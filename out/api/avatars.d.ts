import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class Avatars {
    private readonly client;
    constructor(client: Sender);
    getSystemAvatarsByType(params: {
        type: string;
    }, callback?: Callback): Promise<any>;
    getAvatars(params: {
        type: string;
        entityId: string;
    }, callback?: Callback): Promise<any>;
    loadAvatar(params: {
        type: string;
        entityId: string;
        x?: number;
        y?: number;
        size: number;
        [key: string]: any;
    }, callback?: Callback): Promise<any>;
    deleteAvatar(params: {
        type: string;
        owningObjectId: string;
        id: number;
    }, callback?: Callback): Promise<any>;
}
