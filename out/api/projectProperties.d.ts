import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class ProjectProperties {
    private readonly client;
    constructor(client: Sender);
    getProjectPropertyKeys(params: {
        projectIdOrKey: string;
    }, callback?: Callback): Promise<any>;
    getProjectProperty(params: {
        projectIdOrKey: string;
        propertyKey: string;
    }, callback?: Callback): Promise<any>;
    setProjectProperty(params: {
        projectIdOrKey: string;
        propertyKey: string;
        [key: string]: any;
    }, callback?: Callback): Promise<any>;
    deleteProjectProperty(params: {
        projectIdOrKey: string;
        propertyKey: string;
    }, callback?: Callback): Promise<any>;
}
