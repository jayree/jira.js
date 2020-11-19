import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class IssueRemoteLinks {
    private readonly client;
    constructor(client: Sender);
    getRemoteIssueLinks(params: {
        issueIdOrKey: string;
        globalId?: string;
    }, callback?: Callback): Promise<any>;
    createOrUpdateRemoteIssueLink(params: {
        issueIdOrKey: string;
        globalId?: string;
        application?: any;
        relationship?: string;
        object?: any;
        [key: string]: any;
    }, callback?: Callback): Promise<any>;
    deleteRemoteIssueLinkByGlobalId(params: {
        issueIdOrKey: string;
        globalId: string;
    }, callback?: Callback): Promise<any>;
    getRemoteIssueLinkById(params: {
        issueIdOrKey: string;
        linkId: string;
    }, callback?: Callback): Promise<any>;
    updateRemoteIssueLinkById(params: {
        issueIdOrKey: string;
        linkId: string;
        globalId?: string;
        application?: any;
        relationship?: string;
        object?: any;
        [key: string]: any;
    }, callback?: Callback): Promise<any>;
    deleteRemoteIssueLinkById(params: {
        issueIdOrKey: string;
        linkId: string;
    }, callback?: Callback): Promise<any>;
}
