import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class ProjectCategories {
    private readonly client;
    constructor(client: Sender);
    getAllProjectCategories(callback?: Callback): Promise<any>;
    createProjectCategory(params?: {
        self?: string;
        id?: string;
        name?: string;
        description?: string;
    }, callback?: Callback): Promise<any>;
    getProjectCategoryById(params: {
        id: number;
    }, callback?: Callback): Promise<any>;
    updateProjectCategory(params: {
        id: number;
        self?: string;
        name?: string;
        description?: string;
    }, callback?: Callback): Promise<any>;
    deleteProjectCategory(params: {
        id: number;
    }, callback?: Callback): Promise<any>;
}
