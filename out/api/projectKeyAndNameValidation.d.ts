import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class ProjectKeyAndNameValidation {
    private readonly client;
    constructor(client: Sender);
    validateProjectKey(params?: {
        key?: string;
    }, callback?: Callback): Promise<any>;
    getValidProjectKey(params?: {
        key?: string;
    }, callback?: Callback): Promise<any>;
    getValidProjectName(params: {
        name: string;
    }, callback?: Callback): Promise<any>;
}
