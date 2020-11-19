import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class ProjectComponents {
    private readonly client;
    constructor(client: Sender);
    createComponent(params?: {
        self?: string;
        id?: string;
        name?: string;
        description?: string;
        lead?: any;
        leadUserName?: string;
        leadAccountId?: string;
        assigneeType?: string;
        assignee?: any;
        realAssigneeType?: string;
        realAssignee?: any;
        isAssigneeTypeValid?: boolean;
        project?: string;
        projectId?: number;
    }, callback?: Callback): Promise<any>;
    getComponent(params: {
        id: string;
    }, callback?: Callback): Promise<any>;
    updateComponent(params: {
        id: string;
        self?: string;
        name?: string;
        description?: string;
        lead?: any;
        leadUserName?: string;
        leadAccountId?: string;
        assigneeType?: string;
        assignee?: any;
        realAssigneeType?: string;
        realAssignee?: any;
        isAssigneeTypeValid?: boolean;
        project?: string;
        projectId?: number;
    }, callback?: Callback): Promise<any>;
    deleteComponent(params: {
        id: string;
        moveIssuesTo?: string;
    }, callback?: Callback): Promise<any>;
    getComponentIssuesCount(params: {
        id: string;
    }, callback?: Callback): Promise<any>;
    getProjectComponentsPaginated(params: {
        projectIdOrKey: string;
        startAt?: number;
        maxResults?: number;
        orderBy?: string;
        query?: string;
    }, callback?: Callback): Promise<any>;
    getProjectComponents(params: {
        projectIdOrKey: string;
    }, callback?: Callback): Promise<any>;
}
