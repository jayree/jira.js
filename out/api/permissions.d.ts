import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class Permissions {
    private readonly client;
    constructor(client: Sender);
    getMyPermissions(params?: {
        projectKey?: string;
        projectId?: string;
        issueKey?: string;
        issueId?: string;
        permissions?: string;
        projectUuid?: string;
        projectConfigurationUuid?: string;
    }, callback?: Callback): Promise<any>;
    getAllPermissions(callback?: Callback): Promise<any>;
    getBulkPermissions(params?: {
        projectPermissions?: Array<any>;
        globalPermissions?: Array<string>;
        accountId?: string;
    }, callback?: Callback): Promise<any>;
    getPermittedProjects(params: {
        permissions: Array<string>;
    }, callback?: Callback): Promise<any>;
}
