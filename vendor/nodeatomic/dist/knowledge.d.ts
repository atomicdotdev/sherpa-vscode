import type { atomic as Contract } from './generated/proto.cjs';
/** Client for Atomic's KnowledgeService: knowledge-graph queries and
 * maintenance, plus repository-wide workflow inspection.
 *
 * Requires a libatomic runtime built with KnowledgeService dispatch support
 * (e.g. from the `feat/semweb-knowledge-graph` branch).
 */
export declare class KnowledgeClient {
    private repository;
    constructor(repository: Contract.RepositoryRef);
    /** Every read: content/code search, KG search, entity, neighbors,
     * callers, graph slice, plan execution, RAG ask.
     */
    queryGraph(request: Omit<Contract.QueryGraphRequest, 'repository'>): Promise<Contract.QueryGraphResponse>;
    /** Repository-wide workflow inspection; not a view-scoped sandbox query. */
    getProjectIdentity(): Promise<Contract.GetProjectIdentityResponse>;
    /** One consistent, repository-wide asserted snapshot. SHACL runs client-side. */
    getWorkflowSnapshot(): Promise<Contract.GetWorkflowSnapshotResponse>;
    /** Embed/enrich/reindex (the write/rebuild side of the KG). */
    maintainKnowledgeGraph(request: Omit<Contract.MaintainKnowledgeGraphRequest, 'repository'>): Promise<Contract.MaintainKnowledgeGraphResponse>;
}
