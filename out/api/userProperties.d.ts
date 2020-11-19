import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class UserProperties {
    private readonly client;
    constructor(client: Sender);
    getUserPropertyKeys(params?: {
        accountId?: string;
        userKey?: string;
        username?: string;
    }, callback?: Callback): Promise<any>;
    getUserProperty(params: {
        accountId?: string;
        userKey?: string;
        username?: string;
        propertyKey: string;
    }, callback?: Callback): Promise<any>;
    setUserProperty(params: {
        accountId?: string;
        userKey?: string;
        username?: string;
        propertyKey: string;
        [key: string]: any;
    }, callback?: Callback): Promise<any>;
    deleteUserProperty(params: {
        accountId?: string;
        userKey?: string;
        username?: string;
        propertyKey: string;
    }, callback?: Callback): Promise<any>;
}
