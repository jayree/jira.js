import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class Labels {
    private readonly client;
    constructor(client: Sender);
    getAllLabels(params?: {
        startAt?: number;
        maxResults?: number;
    }, callback?: Callback): Promise<any>;
}
