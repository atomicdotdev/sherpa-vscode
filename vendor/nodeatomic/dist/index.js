import { resolve } from 'node:path';
import { call, proto as atomic } from './native.js';
export { call, proto } from './native.js';
export { AtomicRuntimeError } from './runtime/loader.mjs';
export { openRepository, AtomicRepository } from './repository.js';
export { KnowledgeClient } from './knowledge.js';
const statusNames = {
    [atomic.FileStatus.FILE_STATUS_MODIFIED]: 'modified',
    [atomic.FileStatus.FILE_STATUS_DELETED]: 'deleted',
    [atomic.FileStatus.FILE_STATUS_UNTRACKED]: 'untracked',
    [atomic.FileStatus.FILE_STATUS_ADDED]: 'added',
    [atomic.FileStatus.FILE_STATUS_CONFLICTED]: 'conflicted',
};
const hex = (hash) => hash?.value ? Buffer.from(hash.value).toString('hex') : undefined;
/** Read working-copy status through libatomic inside Node. Accepts an existing
 * repository root or nested path. Defaults to cwd; never changes process cwd.
 */
export async function status(path = process.cwd()) {
    if (typeof path !== 'string' || path.length === 0) {
        throw new TypeError('status path must be a non-empty string');
    }
    const resolved = atomic.ResolveRepositoryResponse.decode(await call('/atomic.DaemonService/ResolveRepository', atomic.ResolveRepositoryRequest.encode({ path: resolve(path) }).finish()));
    const response = atomic.StatusResponse.decode(await call('/atomic.RepositoryQueryService/Status', atomic.StatusRequest.encode({ repository: resolved.repository }).finish()));
    return {
        view: response.view,
        viewMerkle: hex(response.viewMerkle),
        needsReindex: response.needsReindex,
        files: response.files.map((properties) => {
            const file = atomic.FileStatusEntry.create(properties);
            return {
                path: file.path,
                status: statusNames[file.status] ?? 'unspecified',
                recordedHash: hex(file.recordedHash),
                currentHash: hex(file.currentHash),
                details: file.details ?? undefined,
            };
        }),
        modifiedCount: response.modifiedCount,
        deletedCount: response.deletedCount,
        untrackedCount: response.untrackedCount,
        addedCount: response.addedCount,
        conflictedCount: response.conflictedCount,
        staleIndexCount: response.staleIndexCount,
    };
}
