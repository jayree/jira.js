import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class IssueAttachments {
    private readonly client;
    constructor(client: Sender);
    getJiraAttachmentSettings(callback?: Callback): Promise<any>;
    getAttachmentMetadata(params: {
        id: string;
    }, callback?: Callback): Promise<any>;
    deleteAttachment(params: {
        id: string;
    }, callback?: Callback): Promise<any>;
    getAllMetadataForAnExpandedAttachment(params: {
        id: string;
    }, callback?: Callback): Promise<any>;
    getContentsMetadataForAnExpandedAttachment(params: {
        id: string;
    }, callback?: Callback): Promise<any>;
    addAttachment(params: {
        issueIdOrKey: string;
        [key: string]: any;
    }, callback?: Callback): Promise<any>;
}
