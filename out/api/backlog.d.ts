import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class Backlog {
    private readonly client;
    constructor(client: Sender);
    moveIssuesToBacklog(params: {
        issues: Array<string>;
    }, callback?: Callback): Promise<any>;
    moveIssuesToBacklogForBoard(params: {
        boardId: number;
        issues: Array<string>;
        rankBeforeIssue?: string;
        rankAfterIssue?: string;
        rankCustomFieldId?: number;
    }, callback?: Callback): Promise<any>;
}
