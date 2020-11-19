import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class IssueProperties {
    private readonly client;
    constructor(client: Sender);
    bulkSetIssuesProperties(params?: {
        entitiesIds?: Array<number>;
        properties?: any;
    }, callback?: Callback): Promise<any>;
    bulkSetIssueProperty(params: {
        propertyKey: string;
        value?: any;
        filter?: any;
    }, callback?: Callback): Promise<any>;
    bulkDeleteIssueProperty(params: {
        propertyKey: string;
        entityIds?: Array<number>;
        currentValue?: any;
    }, callback?: Callback): Promise<any>;
    getIssuePropertyKeys(params: {
        issueIdOrKey: string;
    }, callback?: Callback): Promise<any>;
    getIssueProperty(params: {
        issueIdOrKey: string;
        propertyKey: string;
    }, callback?: Callback): Promise<any>;
    setIssueProperty(params: {
        issueIdOrKey: string;
        propertyKey: string;
        [key: string]: any;
    }, callback?: Callback): Promise<any>;
    deleteIssueProperty(params: {
        issueIdOrKey: string;
        propertyKey: string;
    }, callback?: Callback): Promise<any>;
}
