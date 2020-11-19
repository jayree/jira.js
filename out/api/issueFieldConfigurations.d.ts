import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class IssueFieldConfigurations {
    private readonly client;
    constructor(client: Sender);
    getAllFieldConfigurations(params?: {
        startAt?: number;
        maxResults?: number;
        id?: Array<number>;
        isDefault?: boolean;
    }, callback?: Callback): Promise<any>;
    getFieldConfigurationItems(params: {
        id: number;
        startAt?: number;
        maxResults?: number;
    }, callback?: Callback): Promise<any>;
    getAllFieldConfigurationSchemes(params?: {
        startAt?: number;
        maxResults?: number;
        id?: Array<number>;
    }, callback?: Callback): Promise<any>;
    getFieldConfigurationIssueTypeItems(params?: {
        startAt?: number;
        maxResults?: number;
        fieldConfigurationSchemeId?: Array<number>;
    }, callback?: Callback): Promise<any>;
    getFieldConfigurationSchemesForProjects(params: {
        startAt?: number;
        maxResults?: number;
        projectId: Array<number>;
    }, callback?: Callback): Promise<any>;
    assignFieldConfigurationSchemeToProject(params: {
        fieldConfigurationSchemeId?: string;
        projectId: string;
    }, callback?: Callback): Promise<any>;
}
