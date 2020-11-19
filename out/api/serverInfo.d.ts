import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class ServerInfo {
    private readonly client;
    constructor(client: Sender);
    getJiraInstanceInfo(callback?: Callback): Promise<any>;
}
