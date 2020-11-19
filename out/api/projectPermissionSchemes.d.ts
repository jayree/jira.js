import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class ProjectPermissionSchemes {
    private readonly client;
    constructor(client: Sender);
    getProjectIssueSecurityScheme(params: {
        projectKeyOrId: string;
    }, callback?: Callback): Promise<any>;
    getAssignedPermissionScheme(params: {
        projectKeyOrId: string;
        expand?: string;
    }, callback?: Callback): Promise<any>;
    assignPermissionScheme(params: {
        projectKeyOrId: string;
        expand?: string;
        id: number;
    }, callback?: Callback): Promise<any>;
    getProjectIssueSecurityLevels(params: {
        projectKeyOrId: string;
    }, callback?: Callback): Promise<any>;
}
