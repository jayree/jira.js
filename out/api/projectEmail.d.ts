import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class ProjectEmail {
    private readonly client;
    constructor(client: Sender);
    getProjectsSenderEmail(params: {
        projectId: number;
    }, callback?: Callback): Promise<any>;
    setProjectsSenderEmail(params: {
        projectId: number;
        emailAddress?: string;
    }, callback?: Callback): Promise<any>;
}
