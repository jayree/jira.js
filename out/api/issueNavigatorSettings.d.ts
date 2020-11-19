import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class IssueNavigatorSettings {
    private readonly client;
    constructor(client: Sender);
    getIssueNavigatorDefaultColumns(callback?: Callback): Promise<any>;
    setIssueNavigatorDefaultColumns(params: {
        [key: string]: any;
    }, callback?: Callback): Promise<any>;
}
