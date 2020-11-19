import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class IssueComments {
    private readonly client;
    constructor(client: Sender);
    getCommentsByIds(params: {
        expand?: string;
        ids: Array<number>;
    }, callback?: Callback): Promise<any>;
    getComments(params: {
        issueIdOrKey: string;
        startAt?: number;
        maxResults?: number;
        orderBy?: string;
        expand?: string;
    }, callback?: Callback): Promise<any>;
    addComment(params: {
        issueIdOrKey: string;
        expand?: string;
        self?: string;
        id?: string;
        author?: any;
        body?: string;
        renderedBody?: string;
        updateAuthor?: any;
        created?: string;
        updated?: string;
        visibility?: any;
        jsdPublic?: boolean;
        properties?: Array<any>;
        [key: string]: any;
    }, callback?: Callback): Promise<any>;
    getComment(params: {
        issueIdOrKey: string;
        id: string;
        expand?: string;
    }, callback?: Callback): Promise<any>;
    updateComment(params: {
        issueIdOrKey: string;
        id: string;
        expand?: string;
        self?: string;
        author?: any;
        body?: string;
        renderedBody?: string;
        updateAuthor?: any;
        created?: string;
        updated?: string;
        visibility?: any;
        jsdPublic?: boolean;
        properties?: Array<any>;
        [key: string]: any;
    }, callback?: Callback): Promise<any>;
    deleteComment(params: {
        issueIdOrKey: string;
        id: string;
    }, callback?: Callback): Promise<any>;
}
