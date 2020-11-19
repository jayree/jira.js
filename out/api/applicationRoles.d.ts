import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class ApplicationRoles {
    private readonly client;
    constructor(client: Sender);
    getAllApplicationRoles(callback?: Callback): Promise<any>;
    getApplicationRole(params: {
        key: string;
    }, callback?: Callback): Promise<any>;
}
