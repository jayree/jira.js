import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class IssueResolutions {
    private readonly client;
    constructor(client: Sender);
    getResolutions(callback?: Callback): Promise<any>;
    getResolution(params: {
        id: string;
    }, callback?: Callback): Promise<any>;
}
