import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class AppProperties {
    private readonly client;
    constructor(client: Sender);
    getAppProperties(params: {
        addonKey: string;
    }, callback?: Callback): Promise<any>;
    getAppProperty(params: {
        addonKey: string;
        propertyKey: string;
    }, callback?: Callback): Promise<any>;
    setAppProperty(params: {
        addonKey: string;
        propertyKey: string;
        [key: string]: any;
    }, callback?: Callback): Promise<any>;
    deleteAppProperty(params: {
        addonKey: string;
        propertyKey: string;
    }, callback?: Callback): Promise<any>;
}
