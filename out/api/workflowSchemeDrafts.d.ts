import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class WorkflowSchemeDrafts {
    private readonly client;
    constructor(client: Sender);
    createDraftWorkflowScheme(params: {
        id: number;
    }, callback?: Callback): Promise<any>;
    getDraftWorkflowScheme(params: {
        id: number;
    }, callback?: Callback): Promise<any>;
    updateDraftWorkflowScheme(params: {
        id: number;
        name?: string;
        description?: string;
        defaultWorkflow?: string;
        issueTypeMappings?: any;
        originalDefaultWorkflow?: string;
        originalIssueTypeMappings?: any;
        draft?: boolean;
        lastModifiedUser?: any;
        lastModified?: string;
        self?: string;
        updateDraftIfNeeded?: boolean;
        issueTypes?: any;
    }, callback?: Callback): Promise<any>;
    deleteDraftWorkflowScheme(params: {
        id: number;
    }, callback?: Callback): Promise<any>;
    getDraftDefaultWorkflow(params: {
        id: number;
    }, callback?: Callback): Promise<any>;
    updateDraftDefaultWorkflow(params: {
        id: number;
        workflow: string;
        updateDraftIfNeeded?: boolean;
    }, callback?: Callback): Promise<any>;
    deleteDraftDefaultWorkflow(params: {
        id: number;
    }, callback?: Callback): Promise<any>;
    getWorkflowForIssueTypeInDraftWorkflowScheme(params: {
        id: number;
        issueType: string;
    }, callback?: Callback): Promise<any>;
    setWorkflowForIssueTypeInDraftWorkflowScheme(params: {
        id: number;
        issueType: string;
        workflow?: string;
        updateDraftIfNeeded?: boolean;
    }, callback?: Callback): Promise<any>;
    deleteWorkflowForIssueTypeInDraftWorkflowScheme(params: {
        id: number;
        issueType: string;
    }, callback?: Callback): Promise<any>;
    getIssueTypesForWorkflowsInDraftWorkflowScheme(params: {
        id: number;
        workflowName?: string;
    }, callback?: Callback): Promise<any>;
    setIssueTypesForWorkflowInWorkflowScheme(params: {
        id: number;
        workflowName: string;
        workflow?: string;
        issueTypes?: Array<string>;
        defaultMapping?: boolean;
        updateDraftIfNeeded?: boolean;
    }, callback?: Callback): Promise<any>;
    deleteIssueTypesForWorkflowInDraftWorkflowScheme(params: {
        id: number;
        workflowName: string;
    }, callback?: Callback): Promise<any>;
}
