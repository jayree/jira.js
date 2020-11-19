import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class IssueWatchers {
    private readonly client;
    constructor(client: Sender);
    getIssueWatchers(params: {
        issueIdOrKey: string;
    }, callback?: Callback): Promise<any>;
    addWatcher(params: {
        issueIdOrKey: string;
        [key: string]: any;
    }, callback?: Callback): Promise<any>;
    deleteWatcher(params: {
        issueIdOrKey: string;
        username?: string;
        accountId?: string;
    }, callback?: Callback): Promise<any>;
}
