import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class WorkflowSchemeProjectAssociations {
    private readonly client;
    constructor(client: Sender);
    getWorkflowSchemeProjectAssociations(params: {
        projectId: Array<number>;
    }, callback?: Callback): Promise<any>;
    assignWorkflowSchemeToProject(params: {
        workflowSchemeId: string;
        projectId: string;
    }, callback?: Callback): Promise<any>;
}
