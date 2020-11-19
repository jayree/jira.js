import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class WorkflowStatuses {
    private readonly client;
    constructor(client: Sender);
    getAllStatuses(callback?: Callback): Promise<any>;
    getStatus(params: {
        idOrName: string;
    }, callback?: Callback): Promise<any>;
}
