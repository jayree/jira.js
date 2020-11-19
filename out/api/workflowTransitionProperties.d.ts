import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class WorkflowTransitionProperties {
    private readonly client;
    constructor(client: Sender);
    getWorkflowTransitionProperties(params: {
        transitionId: number;
        includeReservedKeys?: boolean;
        key?: string;
        workflowName: string;
        workflowMode?: string;
    }, callback?: Callback): Promise<any>;
    updateWorkflowTransitionProperty(params: {
        transitionId: number;
        key: string;
        workflowName: string;
        workflowMode?: string;
        value: string;
        id?: string;
        [key: string]: any;
    }, callback?: Callback): Promise<any>;
    createWorkflowTransitionProperty(params: {
        transitionId: number;
        key: string;
        workflowName: string;
        workflowMode?: string;
        value: string;
        id?: string;
        [key: string]: any;
    }, callback?: Callback): Promise<any>;
    deleteWorkflowTransitionProperty(params: {
        transitionId: number;
        key: string;
        workflowName: string;
        workflowMode?: string;
    }, callback?: Callback): Promise<any>;
}
