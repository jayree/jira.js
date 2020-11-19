import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class Tasks {
    private readonly client;
    constructor(client: Sender);
    getTask(params: {
        taskId: string;
    }, callback?: Callback): Promise<any>;
    cancelTask(params: {
        taskId: string;
    }, callback?: Callback): Promise<any>;
}
