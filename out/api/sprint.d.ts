import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class Sprint {
    private readonly client;
    constructor(client: Sender);
    createSprint(params?: {
        name?: string;
        startDate?: string;
        endDate?: string;
        originBoardId?: number;
        goal?: string;
    }, callback?: Callback): Promise<any>;
    getSprint(params: {
        sprintId: number;
    }, callback?: Callback): Promise<any>;
    updateSprint(params: {
        sprintId: number;
        id?: number;
        self?: string;
        state?: string;
        name?: string;
        startDate?: string;
        endDate?: string;
        completeDate?: string;
        originBoardId?: number;
        goal?: string;
    }, callback?: Callback): Promise<any>;
    partiallyUpdateSprint(params: {
        sprintId: number;
        id?: number;
        self?: string;
        state?: string;
        name?: string;
        startDate?: string;
        endDate?: string;
        completeDate?: string;
        originBoardId?: number;
        goal?: string;
    }, callback?: Callback): Promise<any>;
    deleteSprint(params: {
        sprintId: number;
    }, callback?: Callback): Promise<any>;
    getIssuesForSprint(params: {
        sprintId: number;
        startAt?: number;
        maxResults?: number;
        jql?: string;
        validateQuery?: boolean;
        fields?: Array<string>;
        expand?: string;
    }, callback?: Callback): Promise<any>;
    moveIssuesToSprintAndRank(params: {
        sprintId: number;
        issues?: Array<string>;
        rankBeforeIssue?: string;
        rankAfterIssue?: string;
        rankCustomFieldId?: number;
    }, callback?: Callback): Promise<any>;
    getPropertiesKeys(params: {
        sprintId: string;
    }, callback?: Callback): Promise<any>;
    getProperty(params: {
        sprintId: string;
        propertyKey: string;
    }, callback?: Callback): Promise<any>;
    setProperty(params: {
        sprintId: string;
        propertyKey: string;
    }, callback?: Callback): Promise<any>;
    deleteProperty(params: {
        sprintId: string;
        propertyKey: string;
    }, callback?: Callback): Promise<any>;
    swapSprint(params: {
        sprintId: number;
        sprintToSwapWith?: number;
    }, callback?: Callback): Promise<any>;
}
