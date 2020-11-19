import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class PermissionSchemes {
    private readonly client;
    constructor(client: Sender);
    getAllPermissionSchemes(params?: {
        expand?: string;
    }, callback?: Callback): Promise<any>;
    createPermissionScheme(params: {
        expand?: string;
        id?: number;
        self?: string;
        name: string;
        description?: string;
        scope?: any;
        permissions?: Array<any>;
        [key: string]: any;
    }, callback?: Callback): Promise<any>;
    getPermissionScheme(params: {
        schemeId: number;
        expand?: string;
    }, callback?: Callback): Promise<any>;
    updatePermissionScheme(params: {
        schemeId: number;
        expand?: string;
        id?: number;
        self?: string;
        name: string;
        description?: string;
        scope?: any;
        permissions?: Array<any>;
        [key: string]: any;
    }, callback?: Callback): Promise<any>;
    deletePermissionScheme(params: {
        schemeId: number;
    }, callback?: Callback): Promise<any>;
    getPermissionSchemeGrants(params: {
        schemeId: number;
        expand?: string;
    }, callback?: Callback): Promise<any>;
    createPermissionGrant(params: {
        schemeId: number;
        expand?: string;
        id?: number;
        self?: string;
        holder?: any;
        permission?: string;
    }, callback?: Callback): Promise<any>;
    getPermissionSchemeGrant(params: {
        schemeId: number;
        permissionId: number;
        expand?: string;
    }, callback?: Callback): Promise<any>;
    deletePermissionSchemeGrant(params: {
        schemeId: number;
        permissionId: number;
    }, callback?: Callback): Promise<any>;
}
