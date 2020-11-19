import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class IssueCustomFieldOptionsApps {
    private readonly client;
    constructor(client: Sender);
    getAllIssueFieldOptions(params: {
        startAt?: number;
        maxResults?: number;
        fieldKey: string;
    }, callback?: Callback): Promise<any>;
    createIssueFieldOption(params: {
        fieldKey: string;
        value: string;
        properties?: any;
        config?: any;
        [key: string]: any;
    }, callback?: Callback): Promise<any>;
    getSelectableIssueFieldOptions(params: {
        startAt?: number;
        maxResults?: number;
        projectId?: number;
        fieldKey: string;
    }, callback?: Callback): Promise<any>;
    getVisibleIssueFieldOptions(params: {
        startAt?: number;
        maxResults?: number;
        projectId?: number;
        fieldKey: string;
    }, callback?: Callback): Promise<any>;
    getIssueFieldOption(params: {
        fieldKey: string;
        optionId: number;
    }, callback?: Callback): Promise<any>;
    updateIssueFieldOption(params: {
        fieldKey: string;
        optionId: number;
        id: number;
        value: string;
        properties?: any;
        config?: any;
    }, callback?: Callback): Promise<any>;
    deleteIssueFieldOption(params: {
        fieldKey: string;
        optionId: number;
    }, callback?: Callback): Promise<any>;
    replaceIssueFieldOption(params: {
        replaceWith?: number;
        jql?: string;
        fieldKey: string;
        optionId: number;
    }, callback?: Callback): Promise<any>;
}
