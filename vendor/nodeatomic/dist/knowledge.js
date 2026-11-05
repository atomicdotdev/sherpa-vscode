import { call, proto } from './native.js';
/** Client for Atomic's KnowledgeService: knowledge-graph queries and
 * maintenance, plus repository-wide workflow inspection.
 *
 * Requires a libatomic runtime built with KnowledgeService dispatch support
 * (e.g. from the `feat/semweb-knowledge-graph` branch).
 */
export class KnowledgeClient {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    /** Every read: content/code search, KG search, entity, neighbors,
     * callers, graph slice, plan execution, RAG ask.
     */
    async queryGraph(request) {
        const bytes = await call('/atomic.KnowledgeService/QueryGraph', proto.QueryGraphRequest.encode({ ...request, repository: this.repository }).finish());
        return proto.QueryGraphResponse.decode(bytes);
    }
    /** Repository-wide workflow inspection; not a view-scoped sandbox query. */
    async getProjectIdentity() {
        const bytes = await call('/atomic.KnowledgeService/GetProjectIdentity', proto.GetProjectIdentityRequest.encode({ repository: this.repository }).finish());
        return proto.GetProjectIdentityResponse.decode(bytes);
    }
    /** One consistent, repository-wide asserted snapshot. SHACL runs client-side. */
    async getWorkflowSnapshot() {
        const bytes = await call('/atomic.KnowledgeService/GetWorkflowSnapshot', proto.GetWorkflowSnapshotRequest.encode({ repository: this.repository }).finish());
        return proto.GetWorkflowSnapshotResponse.decode(bytes);
    }
    /** Embed/enrich/reindex (the write/rebuild side of the KG). */
    async maintainKnowledgeGraph(request) {
        const bytes = await call('/atomic.KnowledgeService/MaintainKnowledgeGraph', proto.MaintainKnowledgeGraphRequest.encode({ ...request, repository: this.repository }).finish());
        return proto.MaintainKnowledgeGraphResponse.decode(bytes);
    }
}
