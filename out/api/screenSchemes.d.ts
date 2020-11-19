import { Sender } from '../sender';
import { Callback } from '../callback';
import { PageBeanScreenScheme, ScreenSchemeId } from '../models';
export declare class ScreenSchemes {
    private readonly client;
    constructor(client: Sender);
    getScreenSchemes(params?: {
        startAt?: number;
        maxResults?: number;
        id?: Array<number>;
    }, callback?: Callback<PageBeanScreenScheme>): Promise<PageBeanScreenScheme>;
    createScreenScheme(params: {
        name: string;
        description?: string;
        screens?: any;
    }, callback?: Callback<ScreenSchemeId>): Promise<ScreenSchemeId>;
    deleteScreenScheme(params: {
        screenSchemeId: string;
    }, callback?: Callback<void>): Promise<void>;
}
