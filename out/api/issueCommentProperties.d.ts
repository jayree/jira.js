import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class IssueCommentProperties {
    private readonly client;
    constructor(client: Sender);
    getCommentPropertyKeys(params: {
        commentId: string;
    }, callback?: Callback): Promise<any>;
    getCommentProperty(params: {
        commentId: string;
        propertyKey: string;
    }, callback?: Callback): Promise<any>;
    setCommentProperty(params: {
        commentId: string;
        propertyKey: string;
        [key: string]: any;
    }, callback?: Callback): Promise<any>;
    deleteCommentProperty(params: {
        commentId: string;
        propertyKey: string;
    }, callback?: Callback): Promise<any>;
}
