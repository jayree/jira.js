import { Sender } from '../sender';
import { Callback } from '../callback';
import { ScreenableTab } from '../models';
export declare class ScreenTabs {
    private readonly client;
    constructor(client: Sender);
    getAllScreenTabs(params: {
        screenId: number;
        projectKey?: string;
    }, callback?: Callback<ScreenTabs[]>): Promise<ScreenTabs[]>;
    createScreenTab(params: {
        screenId: number;
        id?: number;
        name: string;
    }, callback?: Callback<ScreenableTab>): Promise<ScreenableTab>;
    updateScreenTab(params: {
        screenId: number;
        tabId: number;
        id?: number;
        name: string;
    }, callback?: Callback<ScreenableTab>): Promise<ScreenableTab>;
    deleteScreenTab(params: {
        screenId: number;
        tabId: number;
    }, callback?: Callback<void>): Promise<void>;
    moveScreenTab(params: {
        screenId: number;
        tabId: number;
        pos: number;
    }, callback?: Callback<void>): Promise<void>;
}
