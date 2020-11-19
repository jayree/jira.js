import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class ProjectAvatars {
    private readonly client;
    constructor(client: Sender);
    setProjectAvatar(params: {
        projectIdOrKey: string;
        id: string;
        owner?: string;
        isSystemAvatar?: boolean;
        isSelected?: boolean;
        isDeletable?: boolean;
        fileName?: string;
        urls?: any;
    }, callback?: Callback): Promise<any>;
    deleteProjectAvatar(params: {
        projectIdOrKey: string;
        id: number;
    }, callback?: Callback): Promise<any>;
    loadProjectAvatar(params: {
        projectIdOrKey: string;
        x?: number;
        y?: number;
        size?: number;
        [key: string]: any;
    }, callback?: Callback): Promise<any>;
    getAllProjectAvatars(params: {
        projectIdOrKey: string;
    }, callback?: Callback): Promise<any>;
}
