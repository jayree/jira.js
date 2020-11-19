import { Sender } from '../sender';
import { Callback } from '../callback';
import { PageBeanCustomFieldContextOption } from '../models';
export declare class IssueCustomFieldOptions {
    private readonly client;
    constructor(client: Sender);
    getOptionsForContext(params: {
        fieldId: number;
        contextId: number;
        optionId?: number;
        onlyOptions?: boolean;
        startAt?: number;
        maxResults?: number;
    }, callback?: Callback<PageBeanCustomFieldContextOption>): Promise<PageBeanCustomFieldContextOption>;
    deleteCustomFieldOption(params: {
        fieldId: number;
        contextId: number;
        optionId: number;
    }, callback?: Callback<void>): Promise<void>;
    getOptionsForField(params: {
        fieldId: number;
        startAt?: number;
        maxResults?: number;
    }, callback?: Callback): Promise<any>;
    updateCustomFieldOptions(params: {
        fieldId: number;
        options?: Array<any>;
    }, callback?: Callback): Promise<any>;
    createCustomFieldOptions(params: {
        fieldId: number;
        options?: Array<any>;
    }, callback?: Callback): Promise<any>;
    getCustomFieldOption(params: {
        id: string;
    }, callback?: Callback): Promise<any>;
}
