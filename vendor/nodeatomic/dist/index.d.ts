import type { atomic as Contract } from './generated/proto.cjs';
export { call, proto } from './native.js';
export { AtomicRuntimeError } from './runtime/loader.mjs';
export { openRepository, AtomicRepository } from './repository.js';
export { KnowledgeClient } from './knowledge.js';
export type { GetVaultOptions, ListVaultOptions, VaultContextOptions, VerificationOptions, AddOptions, RecordOptions, LogOptions, ChangeOptions, ChangeReference, StatusOptions, ListViewsOptions, CreateViewOptions, SwitchViewOptions, DeleteViewOptions, PushOptions, PullOptions, AddRemoteOptions, InsertViewOptions, PushResponse, PullResponse, InsertViewResponse, ChangeMetadata, ChangeAIUsage, ChangeTokenUsage, ChangeGraphSummary, ChangeFileSummary, ChangeBlastRadius, ChangeImpactFile, ChangeImpactEdge, ChangeIntentContext, ChangePlanBinding, ChangeIntentIdentity, ChangeIntentAssociation, } from './repository.js';
export type FileStatus = 'modified' | 'deleted' | 'untracked' | 'added' | 'conflicted' | 'unspecified';
/** Convenience presentation of a protobuf file entry (hashes rendered as hex). */
export type StatusFile = Pick<Contract.FileStatusEntry, 'path'> & {
    status: FileStatus;
    recordedHash?: string;
    currentHash?: string;
    details?: string;
};
/** Counts and flags retain their generated contract types. */
export type RepositoryStatus = Pick<Contract.StatusResponse, 'view' | 'needsReindex' | 'modifiedCount' | 'deletedCount' | 'untrackedCount' | 'addedCount' | 'conflictedCount' | 'staleIndexCount'> & {
    viewMerkle?: string;
    files: StatusFile[];
};
/** Read working-copy status through libatomic inside Node. Accepts an existing
 * repository root or nested path. Defaults to cwd; never changes process cwd.
 */
export declare function status(path?: string): Promise<RepositoryStatus>;
