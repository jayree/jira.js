import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class IssueSecurityLevel {
    private readonly client;
    constructor(client: Sender);
    getIssueSecurityLevelMembers(params: {
        issueSecuritySchemeId: number;
        startAt?: number;
        maxResults?: number;
        issueSecurityLevelId?: Array<number>;
        expand?: string;
    }, callback?: Callback): Promise<any>;
    getIssueSecurityLevel(params: {
        id: string;
    }, callback?: Callback): Promise<any>;
}
