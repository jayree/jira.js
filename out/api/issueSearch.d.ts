import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class IssueSearch {
    private readonly client;
    constructor(client: Sender);
    getIssuePickerSuggestions(params?: {
        query?: string;
        currentJQL?: string;
        currentIssueKey?: string;
        currentProjectId?: string;
        showSubTasks?: boolean;
        showSubTaskParent?: boolean;
    }, callback?: Callback): Promise<any>;
    checkIssuesAgainstJql(params: {
        jqls: Array<string>;
        issueIds: Array<number>;
    }, callback?: Callback): Promise<any>;
    searchForIssuesUsingJqlGet(params?: {
        jql?: string;
        startAt?: number;
        maxResults?: number;
        validateQuery?: string;
        fields?: Array<string>;
        expand?: string;
        properties?: Array<string>;
        fieldsByKeys?: boolean;
    }, callback?: Callback): Promise<any>;
    searchForIssuesUsingJqlPost(params?: {
        jql?: string;
        startAt?: number;
        maxResults?: number;
        fields?: Array<string>;
        validateQuery?: string;
        expand?: Array<string>;
        properties?: Array<string>;
        fieldsByKeys?: boolean;
    }, callback?: Callback): Promise<any>;
}
