import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class Groups {
    private readonly client;
    constructor(client: Sender);
    getGroup(params: {
        groupname: string;
        expand?: string;
    }, callback?: Callback): Promise<any>;
    createGroup(params: {
        name: string;
        [key: string]: any;
    }, callback?: Callback): Promise<any>;
    removeGroup(params: {
        groupname: string;
        swapGroup?: string;
    }, callback?: Callback): Promise<any>;
    bulkGetGroups(params: {
        startAt?: number;
        maxResults?: number;
        groupId: Array<string>;
    }, callback?: Callback): Promise<any>;
    getUsersFromGroup(params: {
        groupname: string;
        includeInactiveUsers?: boolean;
        startAt?: number;
        maxResults?: number;
    }, callback?: Callback): Promise<any>;
    addUserToGroup(params: {
        groupname: string;
        name?: string;
        accountId?: string;
        [key: string]: any;
    }, callback?: Callback): Promise<any>;
    removeUserFromGroup(params: {
        groupname: string;
        username?: string;
        accountId: string;
    }, callback?: Callback): Promise<any>;
    findGroups(params?: {
        accountId?: string;
        query?: string;
        exclude?: Array<string>;
        maxResults?: number;
        userName?: string;
    }, callback?: Callback): Promise<any>;
}
