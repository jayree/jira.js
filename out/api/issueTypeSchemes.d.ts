import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class IssueTypeSchemes {
    private readonly client;
    constructor(client: Sender);
    getAllIssueTypeSchemes(params?: {
        startAt?: number;
        maxResults?: number;
        id?: Array<number>;
    }, callback?: Callback): Promise<any>;
    createIssueTypeScheme(params: {
        name: string;
        description?: string;
        defaultIssueTypeId?: string;
        issueTypeIds: Array<string>;
    }, callback?: Callback): Promise<any>;
    getIssueTypeSchemeItems(params?: {
        startAt?: number;
        maxResults?: number;
        issueTypeSchemeId?: Array<number>;
    }, callback?: Callback): Promise<any>;
    getIssueTypeSchemesForProjects(params: {
        startAt?: number;
        maxResults?: number;
        projectId: Array<number>;
    }, callback?: Callback): Promise<any>;
    assignIssueTypeSchemeToProject(params: {
        issueTypeSchemeId: string;
        projectId: string;
    }, callback?: Callback): Promise<any>;
    updateIssueTypeScheme(params: {
        issueTypeSchemeId: number;
        name?: string;
        description?: string;
        defaultIssueTypeId?: string;
    }, callback?: Callback): Promise<any>;
    deleteIssueTypeScheme(params: {
        issueTypeSchemeId: number;
    }, callback?: Callback): Promise<any>;
    addIssueTypesToIssueTypeScheme(params: {
        issueTypeSchemeId: number;
        issueTypeIds: Array<string>;
    }, callback?: Callback): Promise<any>;
    changeOrderOfIssueTypes(params: {
        issueTypeSchemeId: number;
        issueTypeIds: Array<string>;
        after?: string;
        position?: string;
    }, callback?: Callback): Promise<any>;
    deleteIssueTypeFromIssueTypeScheme(params: {
        issueTypeSchemeId: number;
        issueTypeId: number;
    }, callback?: Callback): Promise<any>;
}
