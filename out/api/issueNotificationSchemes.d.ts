import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class IssueNotificationSchemes {
    private readonly client;
    constructor(client: Sender);
    getNotificationSchemesPaginated(params?: {
        startAt?: number;
        maxResults?: number;
        expand?: string;
    }, callback?: Callback): Promise<any>;
    getNotificationScheme(params: {
        id: number;
        expand?: string;
    }, callback?: Callback): Promise<any>;
}
