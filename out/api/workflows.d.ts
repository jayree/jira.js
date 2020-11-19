import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class Workflows {
    private readonly client;
    constructor(client: Sender);
    getAllWorkflows(params?: {
        workflowName?: string;
    }, callback?: Callback): Promise<any>;
    getWorkflowsPaginated(params?: {
        startAt?: number;
        maxResults?: number;
        workflowName?: Array<string>;
        expand?: string;
    }, callback?: Callback): Promise<any>;
}
