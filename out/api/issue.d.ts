import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class Issue {
    private readonly client;
    constructor(client: Sender);
    rankIssues(params: {
        issues: Array<string>;
        rankBeforeIssue?: string;
        rankAfterIssue?: string;
        rankCustomFieldId?: number;
    }, callback?: Callback): Promise<any>;
    getIssue(params: {
        issueIdOrKey: string;
        fields?: Array<string>;
        expand?: string;
        updateHistory?: boolean;
    }, callback?: Callback): Promise<any>;
    getIssueEstimationForBoard(params: {
        issueIdOrKey: string;
        boardId?: number;
    }, callback?: Callback): Promise<any>;
    estimateIssueForBoard(params: {
        issueIdOrKey: string;
        boardId?: number;
        value: string;
    }, callback?: Callback): Promise<any>;
}
