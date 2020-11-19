import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class DynamicModules {
    private readonly client;
    constructor(client: Sender);
    getModules(callback?: Callback): Promise<any>;
    registerModules(params: {
        [key: string]: any;
        modules: Array<any>;
    }, callback?: Callback): Promise<any>;
    removeModules(params?: {
        moduleKey?: Array<string>;
    }, callback?: Callback): Promise<any>;
}
