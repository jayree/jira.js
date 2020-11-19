import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class IssueTypeProperties {
    private readonly client;
    constructor(client: Sender);
    getIssueTypePropertyKeys(params: {
        issueTypeId: string;
    }, callback?: Callback): Promise<any>;
    getIssueTypeProperty(params: {
        issueTypeId: string;
        propertyKey: string;
    }, callback?: Callback): Promise<any>;
    setIssueTypeProperty(params: {
        issueTypeId: string;
        propertyKey: string;
        [key: string]: any;
    }, callback?: Callback): Promise<any>;
    deleteIssueTypeProperty(params: {
        issueTypeId: string;
        propertyKey: string;
    }, callback?: Callback): Promise<any>;
}
