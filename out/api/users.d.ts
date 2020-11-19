import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class Users {
    private readonly client;
    constructor(client: Sender);
    getUser(params?: {
        accountId?: string;
        username?: string;
        key?: string;
        expand?: string;
    }, callback?: Callback): Promise<any>;
    createUser(params: {
        self?: string;
        key?: string;
        name?: string;
        password?: string;
        emailAddress: string;
        displayName: string;
        notification?: string;
        applicationKeys?: Array<string>;
        [key: string]: any;
    }, callback?: Callback): Promise<any>;
    deleteUser(params: {
        accountId: string;
        username?: string;
        key?: string;
    }, callback?: Callback): Promise<any>;
    bulkGetUsers(params: {
        startAt?: number;
        maxResults?: number;
        username?: Array<string>;
        key?: Array<string>;
        accountId: Array<string>;
    }, callback?: Callback): Promise<any>;
    getAccountIdsForUsers(params?: {
        startAt?: number;
        maxResults?: number;
        username?: Array<string>;
        key?: Array<string>;
    }, callback?: Callback): Promise<any>;
    getUserDefaultColumns(params?: {
        accountId?: string;
        username?: string;
    }, callback?: Callback): Promise<any>;
    setUserDefaultColumns(params?: {
        accountId?: string;
        [key: string]: any;
    }, callback?: Callback): Promise<any>;
    resetUserDefaultColumns(params?: {
        accountId?: string;
        username?: string;
    }, callback?: Callback): Promise<any>;
    getUserEmail(params: {
        accountId: string;
    }, callback?: Callback): Promise<any>;
    getUserEmailBulk(params: {
        accountId: Array<string>;
    }, callback?: Callback): Promise<any>;
    getUserGroups(params: {
        accountId: string;
        username?: string;
        key?: string;
    }, callback?: Callback): Promise<any>;
    getAllUsersDefault(params?: {
        startAt?: number;
        maxResults?: number;
    }, callback?: Callback): Promise<any>;
    getAllUsers(params?: {
        startAt?: number;
        maxResults?: number;
    }, callback?: Callback): Promise<any>;
}
