import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class WorkflowStatusCategories {
    private readonly client;
    constructor(client: Sender);
    getAllStatusCategories(callback?: Callback): Promise<any>;
    getStatusCategory(params: {
        idOrKey: string;
    }, callback?: Callback): Promise<any>;
}
