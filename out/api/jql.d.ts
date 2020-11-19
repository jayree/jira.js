import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class Jql {
    private readonly client;
    constructor(client: Sender);
    getFieldReferenceData(callback?: Callback): Promise<any>;
    getFieldAutoCompleteSuggestions(params?: {
        fieldName?: string;
        fieldValue?: string;
        predicateName?: string;
        predicateValue?: string;
    }, callback?: Callback): Promise<any>;
    parseJqlQuery(params: {
        validation?: string;
        queries: Array<string>;
    }, callback?: Callback): Promise<any>;
    convertUserIdentifiersToAccountIdsInJqlQueries(params?: {
        queryStrings?: Array<string>;
    }, callback?: Callback): Promise<any>;
}
