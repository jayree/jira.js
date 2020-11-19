import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class IssueTypeScreenSchemes {
    private readonly client;
    constructor(client: Sender);
    getIssueTypeScreenSchemes(params?: {
        startAt?: number;
        maxResults?: number;
        id?: Array<number>;
    }, callback?: Callback): Promise<any>;
    getIssueTypeScreenSchemeItems(params?: {
        startAt?: number;
        maxResults?: number;
        issueTypeScreenSchemeId?: Array<number>;
    }, callback?: Callback): Promise<any>;
    getIssueTypeScreenSchemesForProjects(params?: {
        startAt?: number;
        maxResults?: number;
        projectId?: Array<number>;
    }, callback?: Callback): Promise<any>;
    assignIssueTypeScreenSchemeToProject(params?: {
        issueTypeScreenSchemeId?: string;
        projectId?: string;
    }, callback?: Callback): Promise<any>;
}
