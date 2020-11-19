import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class WorkflowTransitionRules {
    private readonly client;
    constructor(client: Sender);
    getWorkflowTransitionRuleConfigurations(params: {
        startAt?: number;
        maxResults?: number;
        types: Array<string>;
        keys?: Array<string>;
        expand?: string;
    }, callback?: Callback): Promise<any>;
    updateWorkflowTransitionRuleConfigurations(params?: {
        workflows?: Array<any>;
    }, callback?: Callback): Promise<any>;
}
