import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class IssueWorklogs {
    private readonly client;
    constructor(client: Sender);
    getIssueWorklogs(params: {
        issueIdOrKey: string;
        startAt?: number;
        maxResults?: number;
        startedAfter?: number;
        expand?: string;
    }, callback?: Callback): Promise<any>;
    addWorklog(params: {
        issueIdOrKey: string;
        notifyUsers?: boolean;
        adjustEstimate?: string;
        newEstimate?: string;
        reduceBy?: string;
        expand?: string;
        overrideEditableFlag?: boolean;
        self?: string;
        author?: any;
        updateAuthor?: any;
        comment?: string;
        created?: string;
        updated?: string;
        visibility?: any;
        started?: string;
        timeSpent?: string;
        timeSpentSeconds?: number;
        id?: string;
        issueId?: string;
        properties?: Array<any>;
        [key: string]: any;
    }, callback?: Callback): Promise<any>;
    getWorklog(params: {
        issueIdOrKey: string;
        id: string;
        expand?: string;
    }, callback?: Callback): Promise<any>;
    updateWorklog(params: {
        issueIdOrKey: string;
        id: string;
        notifyUsers?: boolean;
        adjustEstimate?: string;
        newEstimate?: string;
        expand?: string;
        overrideEditableFlag?: boolean;
        self?: string;
        author?: any;
        updateAuthor?: any;
        comment?: string;
        created?: string;
        updated?: string;
        visibility?: any;
        started?: string;
        timeSpent?: string;
        timeSpentSeconds?: number;
        issueId?: string;
        properties?: Array<any>;
        [key: string]: any;
    }, callback?: Callback): Promise<any>;
    deleteWorklog(params: {
        issueIdOrKey: string;
        id: string;
        notifyUsers?: boolean;
        adjustEstimate?: string;
        newEstimate?: string;
        increaseBy?: string;
        overrideEditableFlag?: boolean;
    }, callback?: Callback): Promise<any>;
    getIdsOfDeletedWorklogs(params?: {
        since?: number;
    }, callback?: Callback): Promise<any>;
    getWorklogs(params: {
        expand?: string;
        ids: Array<number>;
    }, callback?: Callback): Promise<any>;
    getIdsOfUpdatedWorklogs(params?: {
        since?: number;
        expand?: string;
    }, callback?: Callback): Promise<any>;
}
