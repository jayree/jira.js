import { Sender } from '../sender';
import { Callback } from '../callback';
import { ScreenableField } from '../models';
export declare class ScreenTabFields {
    private readonly client;
    constructor(client: Sender);
    getAllScreenTabFields(params: {
        screenId: number;
        tabId: number;
        projectKey?: string;
    }, callback?: Callback<ScreenableField>): Promise<ScreenableField>;
    addScreenTabField(params: {
        screenId: number;
        tabId: number;
        fieldId: string;
    }, callback?: Callback<ScreenableField>): Promise<ScreenableField>;
    removeScreenTabField(params: {
        screenId: number;
        tabId: number;
        id: string;
    }, callback?: Callback<void>): Promise<void>;
    moveScreenTabField(params: {
        screenId: number;
        tabId: number;
        id: string;
        after?: string;
        position?: string;
    }, callback?: Callback<void>): Promise<void>;
}
