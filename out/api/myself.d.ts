import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class Myself {
    private readonly client;
    constructor(client: Sender);
    getPreference(params: {
        key: string;
    }, callback?: Callback): Promise<any>;
    setPreference(params: {
        key: string;
        [key: string]: any;
    }, callback?: Callback): Promise<any>;
    deletePreference(params: {
        key: string;
    }, callback?: Callback): Promise<any>;
    getLocale(callback?: Callback): Promise<any>;
    setLocale(params?: {
        locale?: string;
    }, callback?: Callback): Promise<any>;
    deleteLocale(callback?: Callback): Promise<any>;
    getCurrentUser(params?: {
        expand?: string;
    }, callback?: Callback): Promise<any>;
}
