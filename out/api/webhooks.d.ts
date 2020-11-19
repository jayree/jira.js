import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class Webhooks {
    private readonly client;
    constructor(client: Sender);
    getDynamicWebhooksForApp(params?: {
        startAt?: number;
        maxResults?: number;
    }, callback?: Callback): Promise<any>;
    registerDynamicWebhooks(params: {
        webhooks: Array<any>;
        url: string;
    }, callback?: Callback): Promise<any>;
    deleteWebhooksById(params: {
        webhookIds: Array<number>;
    }, callback?: Callback): Promise<any>;
    getFailedWebhooks(params?: {
        maxResults?: number;
        after?: number;
    }, callback?: Callback): Promise<any>;
    extendWebhookLife(params: {
        webhookIds: Array<number>;
    }, callback?: Callback): Promise<any>;
}
