import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class WorkflowSchemes {
    private readonly client;
    constructor(client: Sender);
    getAllWorkflowSchemes(params?: {
        startAt?: number;
        maxResults?: number;
    }, callback?: Callback): Promise<any>;
    createWorkflowScheme(params?: {
        id?: number;
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
    getWorkflowScheme(params: {
        id: number;
        returnDraftIfExists?: boolean;
    }, callback?: Callback): Promise<any>;
    updateWorkflowScheme(params: {
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
    deleteWorkflowScheme(params: {
        id: number;
    }, callback?: Callback): Promise<any>;
    getDefaultWorkflow(params: {
        id: number;
        returnDraftIfExists?: boolean;
    }, callback?: Callback): Promise<any>;
    updateDefaultWorkflow(params: {
        id: number;
        workflow: string;
        updateDraftIfNeeded?: boolean;
    }, callback?: Callback): Promise<any>;
    deleteDefaultWorkflow(params: {
        id: number;
        updateDraftIfNeeded?: boolean;
    }, callback?: Callback): Promise<any>;
    getWorkflowForIssueTypeInWorkflowScheme(params: {
        id: number;
        issueType: string;
        returnDraftIfExists?: boolean;
    }, callback?: Callback): Promise<any>;
    setWorkflowForIssueTypeInWorkflowScheme(params: {
        id: number;
        issueType: string;
        workflow?: string;
        updateDraftIfNeeded?: boolean;
    }, callback?: Callback): Promise<any>;
    deleteWorkflowForIssueTypeInWorkflowScheme(params: {
        id: number;
        issueType: string;
        updateDraftIfNeeded?: boolean;
    }, callback?: Callback): Promise<any>;
    getIssueTypesForWorkflowsInWorkflowScheme(params: {
        id: number;
        workflowName?: string;
        returnDraftIfExists?: boolean;
    }, callback?: Callback): Promise<any>;
    setIssueTypesForWorkflowInWorkflowScheme(params: {
        id: number;
        workflowName: string;
        workflow?: string;
        issueTypes?: Array<string>;
        defaultMapping?: boolean;
        updateDraftIfNeeded?: boolean;
    }, callback?: Callback): Promise<any>;
    deleteIssueTypesForWorkflowInWorkflowScheme(params: {
        id: number;
        workflowName: string;
        updateDraftIfNeeded?: boolean;
    }, callback?: Callback): Promise<any>;
}
