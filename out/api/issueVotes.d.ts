import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class IssueVotes {
    private readonly client;
    constructor(client: Sender);
    getVotes(params: {
        issueIdOrKey: string;
    }, callback?: Callback): Promise<any>;
    addVote(params: {
        issueIdOrKey: string;
    }, callback?: Callback): Promise<any>;
    deleteVote(params: {
        issueIdOrKey: string;
    }, callback?: Callback): Promise<any>;
}
