import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class IssuePriorities {
    private readonly client;
    constructor(client: Sender);
    getPriorities(callback?: Callback): Promise<any>;
    getPriority(params: {
        id: string;
    }, callback?: Callback): Promise<any>;
}
