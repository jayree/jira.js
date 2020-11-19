import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class UserSearch {
    private readonly client;
    constructor(client: Sender);
    findUsersAssignableToProjects(params: {
        query?: string;
        username?: string;
        accountId?: string;
        projectKeys: string;
        startAt?: number;
        maxResults?: number;
    }, callback?: Callback): Promise<any>;
    findUsersAssignableToIssues(params?: {
        query?: string;
        sessionId?: string;
        username?: string;
        accountId?: string;
        project?: string;
        issueKey?: string;
        startAt?: number;
        maxResults?: number;
        actionDescriptorId?: number;
        recommend?: boolean;
    }, callback?: Callback): Promise<any>;
    findUsersWithPermissions(params: {
        query?: string;
        username?: string;
        accountId?: string;
        permissions: string;
        issueKey?: string;
        projectKey?: string;
        startAt?: number;
        maxResults?: number;
    }, callback?: Callback): Promise<any>;
    findUsersForPicker(params: {
        query: string;
        maxResults?: number;
        showAvatar?: boolean;
        exclude?: Array<string>;
        excludeAccountIds?: Array<string>;
        avatarSize?: string;
        excludeConnectUsers?: boolean;
    }, callback?: Callback): Promise<any>;
    findUsers(params?: {
        query?: string;
        username?: string;
        accountId?: string;
        startAt?: number;
        maxResults?: number;
        property?: string;
    }, callback?: Callback): Promise<any>;
    findUsersByQuery(params: {
        query: string;
        startAt?: number;
        maxResults?: number;
    }, callback?: Callback): Promise<any>;
    findUserKeysByQuery(params: {
        query: string;
        startAt?: number;
        maxResults?: number;
    }, callback?: Callback): Promise<any>;
    findUsersWithBrowsePermission(params?: {
        query?: string;
        username?: string;
        accountId?: string;
        issueKey?: string;
        projectKey?: string;
        startAt?: number;
        maxResults?: number;
    }, callback?: Callback): Promise<any>;
}
