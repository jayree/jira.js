import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class FilterSharing {
    private readonly client;
    constructor(client: Sender);
    getDefaultShareScope(callback?: Callback): Promise<any>;
    setDefaultShareScope(params: {
        scope: string;
    }, callback?: Callback): Promise<any>;
    getSharePermissions(params: {
        id: number;
    }, callback?: Callback): Promise<any>;
    addSharePermission(params: {
        id: number;
        type: string;
        projectId?: string;
        groupname?: string;
        projectRoleId?: string;
    }, callback?: Callback): Promise<any>;
    getSharePermission(params: {
        id: number;
        permissionId: number;
    }, callback?: Callback): Promise<any>;
    deleteSharePermission(params: {
        id: number;
        permissionId: number;
    }, callback?: Callback): Promise<any>;
}
