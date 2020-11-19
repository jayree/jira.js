import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class IssueLinks {
    private readonly client;
    constructor(client: Sender);
    createIssueLink(params?: {
        type?: any;
        inwardIssue?: any;
        outwardIssue?: any;
        comment?: any;
    }, callback?: Callback): Promise<any>;
    getIssueLink(params: {
        linkId: string;
    }, callback?: Callback): Promise<any>;
    deleteIssueLink(params: {
        linkId: string;
    }, callback?: Callback): Promise<any>;
}
