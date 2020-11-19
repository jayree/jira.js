import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class Issues {
    private readonly client;
    constructor(client: Sender);
    createIssue(params?: {
        updateHistory?: boolean;
        transition?: any;
        fields?: any;
        update?: any;
        historyMetadata?: any;
        properties?: Array<any>;
        [key: string]: any;
    }, callback?: Callback): Promise<any>;
    bulkCreateIssue(params?: {
        issueUpdates?: Array<any>;
        [key: string]: any;
    }, callback?: Callback): Promise<any>;
    getCreateIssueMetadata(params?: {
        projectIds?: Array<string>;
        projectKeys?: Array<string>;
        issuetypeIds?: Array<string>;
        issuetypeNames?: Array<string>;
        expand?: string;
    }, callback?: Callback): Promise<any>;
    getIssue(params: {
        issueIdOrKey: string;
        fields?: Array<string>;
        fieldsByKeys?: boolean;
        expand?: string;
        properties?: Array<string>;
        updateHistory?: boolean;
    }, callback?: Callback): Promise<any>;
    editIssue(params: {
        issueIdOrKey: string;
        notifyUsers?: boolean;
        overrideScreenSecurity?: boolean;
        overrideEditableFlag?: boolean;
        transition?: any;
        fields?: any;
        update?: any;
        historyMetadata?: any;
        properties?: Array<any>;
        [key: string]: any;
    }, callback?: Callback): Promise<any>;
    deleteIssue(params: {
        issueIdOrKey: string;
        deleteSubtasks?: string;
    }, callback?: Callback): Promise<any>;
    assignIssue(params: {
        issueIdOrKey: string;
        self?: string;
        key?: string;
        accountId?: string;
        accountType?: string;
        name?: string;
        emailAddress?: string;
        avatarUrls?: any;
        displayName?: string;
        active?: boolean;
        timeZone?: string;
        locale?: string;
        groups?: any;
        applicationRoles?: any;
        expand?: string;
    }, callback?: Callback): Promise<any>;
    getChangeLogs(params: {
        issueIdOrKey: string;
        startAt?: number;
        maxResults?: number;
    }, callback?: Callback): Promise<any>;
    getEditIssueMetadata(params: {
        issueIdOrKey: string;
        overrideScreenSecurity?: boolean;
        overrideEditableFlag?: boolean;
    }, callback?: Callback): Promise<any>;
    sendNotificationForIssue(params: {
        issueIdOrKey: string;
        subject?: string;
        textBody?: string;
        htmlBody?: string;
        to?: any;
        restrict?: any;
        [key: string]: any;
    }, callback?: Callback): Promise<any>;
    getTransitions(params: {
        issueIdOrKey: string;
        expand?: string;
        transitionId?: string;
        skipRemoteOnlyCondition?: boolean;
        includeUnavailableTransitions?: boolean;
        sortByOpsBarAndStatus?: boolean;
    }, callback?: Callback): Promise<any>;
    transitionIssue(params: {
        issueIdOrKey: string;
        transition?: any;
        fields?: any;
        update?: any;
        historyMetadata?: any;
        properties?: Array<any>;
        [key: string]: any;
    }, callback?: Callback): Promise<any>;
}
