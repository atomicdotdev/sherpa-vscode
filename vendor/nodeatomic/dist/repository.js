import { resolve } from 'node:path';
import { call, proto } from './native.js';
function requireId(id) {
    if (typeof id !== 'string' || id.trim().length === 0)
        throw new TypeError('a non-empty subject id is required');
}
function requireName(name) {
    if (typeof name !== 'string' || !name.trim())
        throw new TypeError('a non-empty view name is required');
}
/** A routing reference, not an open database. No close() is required.
 * Vault reads are currently repository-wide; explicit view selection fails
 * closed until the backend implements view-scoped vault revisions.
 */
export class AtomicRepository {
    reference;
    workspace;
    constructor(reference, workspace) {
        this.reference = reference;
        this.workspace = workspace;
    }
    /** Track explicit working-copy paths; no implicit add-all or CLI fallback. */
    async add(paths, options = {}) {
        if (!Array.isArray(paths) || !paths.length || paths.some((p) => typeof p !== 'string' || !p.trim())) {
            throw new TypeError('add requires at least one non-empty path');
        }
        return proto.AddFilesResponse.decode(await call('/atomic.RepositoryMutationService/AddFiles', proto.AddFilesRequest.encode({ ...options, paths, repository: this.reference }).finish()));
    }
    /** Publish a change. Pass expected for optimistic concurrency when available. */
    async record(message, options = {}) {
        if (typeof message !== 'string' || !message.trim())
            throw new TypeError('record requires a non-empty message');
        return proto.RecordResponse.decode(await call('/atomic.RepositoryMutationService/Record', proto.RecordRequest.encode({ ...options, message, repository: this.reference }).finish()));
    }
    /** Working-copy status through the in-process query handler. */
    async status(options = {}) {
        return proto.StatusResponse.decode(await call('/atomic.RepositoryQueryService/Status', proto.StatusRequest.encode({ repository: this.reference, options }).finish()));
    }
    /** Paged change history; use the returned nextCursor for subsequent pages. */
    async log(options = {}) {
        return proto.LogResponse.decode(await call('/atomic.RepositoryQueryService/Log', proto.LogRequest.encode({ ...options, repository: this.reference }).finish()));
    }
    /** Get one change. includes.metadata returns a decoded, privacy-limited
     * metadata projection (including native graph/hunk summaries) alongside the canonical V3 bundle. uint64 counters and
     * micro-USD retain generated Long values; do not coerce them to JS numbers.
     */
    async change(ref, options = {}) {
        if (!ref || typeof ref !== 'object' || Object.keys(ref).length !== 1) {
            throw new TypeError('change requires exactly one hash, prefix, or sequence');
        }
        let reference;
        if ('hash' in ref && ref.hash instanceof Uint8Array && ref.hash.length === 32) {
            reference = { hash: { value: ref.hash } };
        }
        else if ('prefix' in ref && typeof ref.prefix === 'string' && ref.prefix.trim()) {
            reference = { prefix: ref.prefix };
        }
        else if ('sequence' in ref && ((typeof ref.sequence === 'number' && Number.isSafeInteger(ref.sequence) && ref.sequence >= 0) ||
            (typeof ref.sequence === 'object' && ref.sequence !== null &&
                Number.isInteger(ref.sequence.low) && Number.isInteger(ref.sequence.high) &&
                Number(ref.sequence.toString()) >= 0))) {
            reference = { sequence: ref.sequence };
        }
        else {
            throw new TypeError('change requires a 32-byte hash, non-empty prefix, or non-negative safe sequence');
        }
        return proto.GetChangeResponse.decode(await call('/atomic.RepositoryQueryService/GetChange', proto.GetChangeRequest.encode({ ...options, ref: reference, repository: this.reference }).finish()));
    }
    /** Read the current working-copy view's recorded bytes. This uses the existing
     * read-only restore PREVIEW, never the restore mutation or the on-disk file.
     * Missing content is absent, not an empty file. The observed view is returned.
     */
    async recordedFile(path) {
        if (typeof path !== 'string' || !path.trim() || path.startsWith('/') || /^[A-Za-z]:/.test(path) || path.startsWith('\\') ||
            path.split(/[\\/]/).some((part) => part === '..'))
            throw new TypeError('recordedFile requires a repository-relative path');
        const response = proto.PreviewMutationResponse.decode(await call('/atomic.RepositoryQueryService/PreviewRestore', proto.PreviewRestoreRequest.encode({ repository: this.reference, paths: [path], contentPath: path }).finish()));
        return { content: response.pristineContent ?? undefined, view: response.view ?? undefined };
    }
    views = {
        list: async (options = {}) => proto.ListViewsResponse.decode(await call('/atomic.ViewService/ListViews', proto.ListViewsRequest.encode({ ...options, repository: this.reference }).finish())),
        create: async (name, options = {}) => {
            requireName(name);
            const bases = [options.fromView, options.parent, options.empty].filter((v) => v != null);
            if (bases.length > 1)
                throw new TypeError('choose only one view base: fromView, parent, or empty');
            return proto.CreateViewResponse.decode(await call('/atomic.ViewService/CreateView', proto.CreateViewRequest.encode({ ...options, name, repository: this.reference }).finish()));
        },
        switch: async (name, options = {}) => {
            requireName(name);
            return proto.SwitchViewResponse.decode(await call('/atomic.ViewService/SwitchView', proto.SwitchViewRequest.encode({ ...options, view: name, repository: this.reference }).finish()));
        },
        delete: async (name, options = {}) => {
            requireName(name);
            return proto.DeleteViewResponse.decode(await call('/atomic.ViewService/DeleteView', proto.DeleteViewRequest.encode({ ...options, view: name, repository: this.reference }).finish()));
        },
    };
    vault = {
        /** Equivalent stored-entry lookup to vault show / intent show / memory show. */
        get: async (options) => {
            const bytes = await call('/atomic.VaultService/GetVaultEntry', proto.GetVaultEntryRequest.encode({ ...options, repository: this.reference }).finish());
            return proto.GetVaultEntryResponse.decode(bytes);
        },
        /** List stored entries; optional kind selects intent/memory/goal summaries. */
        list: async (options = {}) => {
            const bytes = await call('/atomic.VaultService/ListVaultEntries', proto.ListVaultEntriesRequest.encode({ ...options, repository: this.reference }).finish());
            return proto.ListVaultEntriesResponse.decode(bytes);
        },
        context: async (options = {}) => {
            const bytes = await call('/atomic.VaultService/GetVaultContext', proto.GetVaultContextRequest.encode({ ...options, repository: this.reference }).finish());
            return proto.GetVaultContextResponse.decode(bytes);
        },
        getIntent: async (id) => {
            requireId(id);
            return this.vault.get({ id, kind: proto.VaultEntityKind.VAULT_ENTITY_KIND_INTENT, includeBundle: true });
        },
        listIntents: async () => this.vault.list({ kind: proto.VaultEntityKind.VAULT_ENTITY_KIND_INTENT }),
        /** Returns the exact stored signed JSON-LD and backend verification facts.
         * valid means signature-valid AND source-fresh. Use signatureValid and
         * sourceFresh separately; neither implies signer trust or buffer freshness.
         */
        getSignedIntent: async (id, options = {}) => {
            requireId(id);
            return this.attestations.verify({ intentId: id }, options);
        },
    };
    attestations = {
        /** No signing, private-key access, or mutation. Public keys are 32 bytes.
         * Omitted publicKey resolves the proof's signer from existing public identities.
         * Unknown key yields absent signatureValid, not a proven-invalid signature.
         */
        verify: async (subject, options = {}) => {
            const targets = [subject.intentId, subject.memoryId, subject.changeHash, subject.graphStats]
                .filter((value) => value != null);
            if (targets.length !== 1)
                throw new TypeError('exactly one attestation subject is required');
            if (subject.intentId != null)
                requireId(subject.intentId);
            if (subject.memoryId != null)
                requireId(subject.memoryId);
            if (options.publicKey != null && options.identityName != null) {
                throw new TypeError('use publicKey or identityName, not both');
            }
            if (options.publicKey != null && !(options.publicKey instanceof Uint8Array)) {
                throw new TypeError('publicKey must be a Uint8Array');
            }
            if (options.publicKey != null && options.publicKey.length !== 32) {
                throw new TypeError('Ed25519 publicKey must be 32 bytes');
            }
            const bytes = await call('/atomic.AttestationService/VerifyAttestation', proto.VerifyAttestationRequest.encode({ ...options, subject, repository: this.reference }).finish());
            return proto.VerifyAttestationResponse.decode(bytes);
        },
    };
}
/** Resolve a repository once; calls use its reference without running Atomic CLI. */
export async function openRepository(path = process.cwd()) {
    if (typeof path !== 'string' || path.length === 0)
        throw new TypeError('repository path must be a non-empty string');
    const response = proto.ResolveRepositoryResponse.decode(await call('/atomic.DaemonService/ResolveRepository', proto.ResolveRepositoryRequest.encode({ path: resolve(path) }).finish()));
    if (!response.repository)
        throw new Error('libatomic did not return a repository reference');
    return new AtomicRepository(proto.RepositoryRef.create(response.repository), response.workspace ? proto.WorkspaceInfo.create(response.workspace) : undefined);
}
