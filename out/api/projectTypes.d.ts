import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class ProjectTypes {
    private readonly client;
    constructor(client: Sender);
    getAllProjectTypes(callback?: Callback): Promise<any>;
    getLicensedProjectTypes(callback?: Callback): Promise<any>;
    getProjectTypeByKey(params: {
        projectTypeKey: string;
    }, callback?: Callback): Promise<any>;
    getAccessibleProjectTypeByKey(params: {
        projectTypeKey: string;
    }, callback?: Callback): Promise<any>;
}
