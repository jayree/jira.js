import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class ProjectRoles {
    private readonly client;
    constructor(client: Sender);
    getProjectRolesForProject(params: {
        projectIdOrKey: string;
    }, callback?: Callback): Promise<any>;
    getProjectRoleForProject(params: {
        projectIdOrKey: string;
        id: number;
    }, callback?: Callback): Promise<any>;
    getProjectRoleDetails(params: {
        projectIdOrKey: string;
        currentMember?: boolean;
        excludeConnectAddons?: boolean;
    }, callback?: Callback): Promise<any>;
    getAllProjectRoles(callback?: Callback): Promise<any>;
    createProjectRole(params?: {
        name?: string;
        description?: string;
    }, callback?: Callback): Promise<any>;
    getProjectRoleById(params: {
        id: number;
    }, callback?: Callback): Promise<any>;
    fullyUpdateProjectRole(params: {
        id: number;
        name?: string;
        description?: string;
    }, callback?: Callback): Promise<any>;
    partialUpdateProjectRole(params: {
        id: number;
        name?: string;
        description?: string;
    }, callback?: Callback): Promise<any>;
    deleteProjectRole(params: {
        id: number;
        swap?: number;
    }, callback?: Callback): Promise<any>;
}
