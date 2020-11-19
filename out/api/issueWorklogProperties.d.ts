import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class IssueWorklogProperties {
    private readonly client;
    constructor(client: Sender);
    getWorklogPropertyKeys(params: {
        issueIdOrKey: string;
        worklogId: string;
    }, callback?: Callback): Promise<any>;
    getWorklogProperty(params: {
        issueIdOrKey: string;
        worklogId: string;
        propertyKey: string;
    }, callback?: Callback): Promise<any>;
    setWorklogProperty(params: {
        issueIdOrKey: string;
        worklogId: string;
        propertyKey: string;
        [key: string]: any;
    }, callback?: Callback): Promise<any>;
    deleteWorklogProperty(params: {
        issueIdOrKey: string;
        worklogId: string;
        propertyKey: string;
    }, callback?: Callback): Promise<any>;
}
