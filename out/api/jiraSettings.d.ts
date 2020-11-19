import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class JiraSettings {
    private readonly client;
    constructor(client: Sender);
    getApplicationProperty(params?: {
        key?: string;
        permissionLevel?: string;
        keyFilter?: string;
    }, callback?: Callback): Promise<any>;
    getAdvancedSettings(callback?: Callback): Promise<any>;
    setApplicationProperty(params: {
        id: string;
        value?: string;
    }, callback?: Callback): Promise<any>;
    getGlobalSettings(callback?: Callback): Promise<any>;
}
