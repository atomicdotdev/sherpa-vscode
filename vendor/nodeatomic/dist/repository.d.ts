import type { atomic as Contract } from './generated/proto.cjs';
export type GetVaultOptions = Omit<Contract.GetVaultEntryRequest.$Properties, 'repository'>;
export type ListVaultOptions = Omit<Contract.ListVaultEntriesRequest.$Properties, 'repository'>;
export type VaultContextOptions = Omit<Contract.GetVaultContextRequest.$Properties, 'repository'>;
export type VerificationOptions = Pick<Contract.VerifyAttestationRequest.$Properties, 'identityName' | 'publicKey' | 'view'>;
export type AddOptions = Omit<Contract.AddFilesRequest.$Properties, 'repository' | 'paths'>;
export type RecordOptions = Omit<Contract.RecordRequest.$Properties, 'repository' | 'message'>;
export type LogOptions = Omit<Contract.LogRequest.$Properties, 'repository'>;
export type ChangeOptions = Omit<Contract.GetChangeRequest.$Properties, 'repository' | 'ref'>;
export type ChangeMetadata = Contract.ChangeMetadata;
export type ChangeAIUsage = Contract.ChangeAIUsage;
export type ChangeTokenUsage = Contract.ChangeTokenUsage;
export type ChangeGraphSummary = Contract.ChangeGraphSummary;
export type ChangeFileSummary = Contract.ChangeFileSummary;
export type ChangeBlastRadius = Contract.ChangeBlastRadius;
export type ChangeImpactFile = Contract.ChangeImpactFile;
export type ChangeImpactEdge = Contract.ChangeImpactEdge;
export type ChangeIntentContext = Contract.ChangeIntentContext;
export type ChangePlanBinding = Contract.ChangePlanBinding;
export type ChangeIntentIdentity = Contract.ChangeIntentIdentity;
export type ChangeIntentAssociation = Contract.ChangeIntentAssociation;
export type StatusOptions = Contract.StatusOptions.$Properties;
export type ListViewsOptions = Omit<Contract.ListViewsRequest.$Properties, 'repository'>;
export type CreateViewOptions = Omit<Contract.CreateViewRequest.$Properties, 'repository' | 'name'>;
export type SwitchViewOptions = Omit<Contract.SwitchViewRequest.$Properties, 'repository' | 'view'>;
export type DeleteViewOptions = Omit<Contract.DeleteViewRequest.$Properties, 'repository' | 'view'>;
export type PushOptions = Omit<Contract.PushChangesRequest.$Properties, 'repository' | 'authHeaders' | 'remoteUrl'>;
export type PullOptions = Omit<Contract.PullChangesRequest.$Properties, 'repository' | 'authHeaders' | 'remoteUrl'>;
export type AddRemoteOptions = Pick<Contract.ManageRemotesRequest.$Properties, 'setDefault'>;
export type InsertViewOptions = Pick<Contract.InsertChangesRequest.$Properties, 'meta' | 'allowConflicts' | 'expectedSnapshot' | 'sourceSnapshot' | 'applyDependencies' | 'dryRun'>;
export type PushResponse = Contract.PushChangesResponse;
export type PullResponse = Contract.PullChangesResponse;
export type InsertViewResponse = Contract.InsertChangesResponse;
/** A full binary hash, an unambiguous base32 prefix, or a view-log sequence. */
export type ChangeReference = {
    hash: Uint8Array;
} | {
    prefix: string;
} | {
    sequence: NonNullable<Contract.ChangeRef.$Properties['sequence']>;
};
/** A routing reference, not an open database. No close() is required.
 * Vault reads are currently repository-wide; explicit view selection fails
 * closed until the backend implements view-scoped vault revisions.
 */
export declare class AtomicRepository {
    readonly reference: Contract.RepositoryRef;
    readonly workspace: Contract.WorkspaceInfo | undefined;
    constructor(reference: Contract.RepositoryRef, workspace: Contract.WorkspaceInfo | undefined);
    /** Track explicit working-copy paths; no implicit add-all or CLI fallback. */
    add(paths: string[], options?: AddOptions): Promise<Contract.AddFilesResponse>;
    /** Publish a change. Pass expected for optimistic concurrency when available. */
    record(message: string, options?: RecordOptions): Promise<Contract.RecordResponse>;
    /** Working-copy status through the in-process query handler. */
    status(options?: StatusOptions): Promise<Contract.StatusResponse>;
    /** Paged change history; use the returned nextCursor for subsequent pages. */
    log(options?: LogOptions): Promise<Contract.LogResponse>;
    /** Get one change. includes.metadata returns a decoded, privacy-limited
     * metadata projection (including native graph/hunk summaries) alongside the canonical V3 bundle. uint64 counters and
     * micro-USD retain generated Long values; do not coerce them to JS numbers.
     */
    change(ref: ChangeReference, options?: ChangeOptions): Promise<Contract.GetChangeResponse>;
    /** Read the current working-copy view's recorded bytes. This uses the existing
     * read-only restore PREVIEW, never the restore mutation or the on-disk file.
     * Missing content is absent, not an empty file. The observed view is returned.
     */
    recordedFile(path: string): Promise<{
        content?: Uint8Array;
        view?: string;
    }>;
    /** Synchronize through native canonical sync; native code resolves credentials. */
    push(options?: PushOptions): Promise<PushResponse>;
    /** Synchronize graph/view state and report any native materialization outcome. */
    pull(options?: PullOptions): Promise<PullResponse>;
    readonly remotes: {
        list: () => Promise<Contract.ListRemotesResponse>;
        add: (name: string, url: string, options?: AddRemoteOptions) => Promise<Contract.ManageRemotesResponse>;
    };
    readonly views: {
        list: (options?: ListViewsOptions) => Promise<Contract.ListViewsResponse>;
        create: (name: string, options?: CreateViewOptions) => Promise<Contract.CreateViewResponse>;
        switch: (name: string, options?: SwitchViewOptions) => Promise<Contract.SwitchViewResponse>;
        delete: (name: string, options?: DeleteViewOptions) => Promise<Contract.DeleteViewResponse>;
        /** Insert source membership/dependencies into target, never promote scope. */
        insert: (source: string, target: string, options?: InsertViewOptions) => Promise<InsertViewResponse>;
    };
    readonly vault: {
        /** Equivalent stored-entry lookup to vault show / intent show / memory show. */
        get: (options: GetVaultOptions) => Promise<Contract.GetVaultEntryResponse>;
        /** List stored entries; optional kind selects intent/memory/goal summaries. */
        list: (options?: ListVaultOptions) => Promise<Contract.ListVaultEntriesResponse>;
        context: (options?: VaultContextOptions) => Promise<Contract.GetVaultContextResponse>;
        getIntent: (id: string) => Promise<Contract.GetVaultEntryResponse>;
        listIntents: () => Promise<Contract.ListVaultEntriesResponse>;
        /** Returns the exact stored signed JSON-LD and backend verification facts.
         * valid means signature-valid AND source-fresh. Use signatureValid and
         * sourceFresh separately; neither implies signer trust or buffer freshness.
         */
        getSignedIntent: (id: string, options?: VerificationOptions) => Promise<Contract.VerifyAttestationResponse>;
    };
    readonly attestations: {
        /** No signing, private-key access, or mutation. Public keys are 32 bytes.
         * Omitted publicKey resolves the proof's signer from existing public identities.
         * Unknown key yields absent signatureValid, not a proven-invalid signature.
         */
        verify: (subject: Contract.AttestationTarget.$Properties, options?: VerificationOptions) => Promise<Contract.VerifyAttestationResponse>;
    };
}
/** Resolve a repository once; calls use its reference without running Atomic CLI. */
export declare function openRepository(path?: string): Promise<AtomicRepository>;
