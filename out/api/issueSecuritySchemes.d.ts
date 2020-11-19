import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class IssueSecuritySchemes {
    private readonly client;
    constructor(client: Sender);
    getIssueSecuritySchemes(callback?: Callback): Promise<any>;
    getIssueSecurityScheme(params: {
        id: number;
    }, callback?: Callback): Promise<any>;
}
