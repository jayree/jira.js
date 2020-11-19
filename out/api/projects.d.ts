import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class Projects {
    private readonly client;
    constructor(client: Sender);
    getAllProjects(params?: {
        expand?: string;
        recent?: number;
        properties?: Array<string>;
    }, callback?: Callback): Promise<any>;
    createProject(params?: {
        key?: string;
        name?: string;
        projectTypeKey?: string;
        projectTemplateKey?: string;
        description?: string;
        lead?: string;
        leadAccountId?: string;
        url?: string;
        assigneeType?: string;
        avatarId?: number;
        issueSecurityScheme?: number;
        permissionScheme?: number;
        notificationScheme?: number;
        categoryId?: number;
    }, callback?: Callback): Promise<any>;
    getProjectsPaginated(params?: {
        startAt?: number;
        maxResults?: number;
        orderBy?: string;
        query?: string;
        typeKey?: string;
        categoryId?: number;
        searchBy?: string;
        action?: string;
        expand?: string;
        status?: Array<string>;
    }, callback?: Callback): Promise<any>;
    getProject(params: {
        projectIdOrKey: string;
        expand?: string;
        properties?: Array<string>;
    }, callback?: Callback): Promise<any>;
    updateProject(params: {
        projectIdOrKey: string;
        expand?: string;
        key?: string;
        name?: string;
        projectTypeKey?: string;
        projectTemplateKey?: string;
        description?: string;
        lead?: string;
        leadAccountId?: string;
        url?: string;
        assigneeType?: string;
        avatarId?: number;
        issueSecurityScheme?: number;
        permissionScheme?: number;
        notificationScheme?: number;
        categoryId?: number;
    }, callback?: Callback): Promise<any>;
    deleteProject(params: {
        projectIdOrKey: string;
        enableUndo?: boolean;
    }, callback?: Callback): Promise<any>;
    deleteProjectAsynchronously(params: {
        projectIdOrKey: string;
    }, callback?: Callback): Promise<any>;
    restoreDeletedProject(params: {
        projectIdOrKey: string;
    }, callback?: Callback): Promise<any>;
    getAllStatusesForProject(params: {
        projectIdOrKey: string;
    }, callback?: Callback): Promise<any>;
    updateProjectType(params: {
        projectIdOrKey: string;
        newProjectTypeKey: string;
    }, callback?: Callback): Promise<any>;
    getProjectIssueTypeHierarchy(params: {
        projectId: number;
    }, callback?: Callback): Promise<any>;
    getProjectNotificationScheme(params: {
        projectKeyOrId: string;
        expand?: string;
    }, callback?: Callback): Promise<any>;
}
