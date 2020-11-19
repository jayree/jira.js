import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class IssueFields {
    private readonly client;
    constructor(client: Sender);
    getFields(callback?: Callback): Promise<any>;
    createCustomField(params: {
        name: string;
        description?: string;
        type: string;
        searcherKey: string;
    }, callback?: Callback): Promise<any>;
    getFieldsPaginated(params?: {
        startAt?: number;
        maxResults?: number;
        type?: Array<string>;
        id?: Array<string>;
        query?: string;
        orderBy?: string;
        expand?: string;
    }, callback?: Callback): Promise<any>;
    getContextsForAField(params: {
        fieldId: string;
        startAt?: number;
        maxResults?: number;
    }, callback?: Callback): Promise<any>;
}
