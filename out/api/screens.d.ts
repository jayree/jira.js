import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class Screens {
    private readonly client;
    constructor(client: Sender);
    getScreensForAField(params: {
        fieldId: string;
        startAt?: number;
        maxResults?: number;
    }, callback?: Callback): Promise<any>;
    /**
     * @deprecated
     */
    getIssueTypeScreenSchemes(params?: {
        startAt?: number;
        maxResults?: number;
        id?: Array<number>;
    }, callback?: Callback): Promise<any>;
    /**
     * @deprecated
     */
    getIssueTypeScreenSchemeItems(params?: {
        startAt?: number;
        maxResults?: number;
        issueTypeScreenSchemeId?: Array<number>;
    }, callback?: Callback): Promise<any>;
    /**
     * @deprecated
     */
    getIssueTypeScreenSchemesForProjects(params?: {
        startAt?: number;
        maxResults?: number;
        projectId?: Array<number>;
    }, callback?: Callback): Promise<any>;
    getAllScreens(params?: {
        startAt?: number;
        maxResults?: number;
    }, callback?: Callback): Promise<any>;
    addFieldToDefaultScreen(params: {
        fieldId: string;
    }, callback?: Callback): Promise<any>;
    getAvailableScreenFields(params: {
        screenId: number;
    }, callback?: Callback): Promise<any>;
    getAllScreenTabs(params: {
        screenId: number;
        projectKey?: string;
    }, callback?: Callback): Promise<any>;
    createScreenTab(params: {
        screenId: number;
        id?: number;
        name: string;
    }, callback?: Callback): Promise<any>;
    updateScreenTab(params: {
        screenId: number;
        tabId: number;
        id?: number;
        name: string;
    }, callback?: Callback): Promise<any>;
    deleteScreenTab(params: {
        screenId: number;
        tabId: number;
    }, callback?: Callback): Promise<any>;
    getAllScreenTabFields(params: {
        screenId: number;
        tabId: number;
        projectKey?: string;
    }, callback?: Callback): Promise<any>;
    addScreenTabField(params: {
        screenId: number;
        tabId: number;
        fieldId: string;
    }, callback?: Callback): Promise<any>;
    removeScreenTabField(params: {
        screenId: number;
        tabId: number;
        id: string;
    }, callback?: Callback): Promise<any>;
    moveScreenTabField(params: {
        screenId: number;
        tabId: number;
        id: string;
        after?: string;
        position?: string;
    }, callback?: Callback): Promise<any>;
    moveScreenTab(params: {
        screenId: number;
        tabId: number;
        pos: number;
    }, callback?: Callback): Promise<any>;
    /**
     * Returns a paginated list of screen schemes.
     * Only screen schemes used in classic projects are returned.
     * @deprecated
     * @param {Object} params The request parameters.
     * @param {Callback} callback The callback.
     */
    getAllScreenSchemes(params?: {
        startAt?: number;
        maxResults?: number;
        id?: Array<number>;
    }, callback?: Callback): Promise<any>;
    /**
     * Returns a paginated list of screen schemes.
     * Only screen schemes used in classic projects are returned.
     * @param {Object} params The request parameters.
     * @param {Callback} callback The callback.
     */
    getScreenSchemes(params?: {
        startAt?: number;
        maxResults?: number;
        id?: Array<number>;
    }, callback?: Callback): Promise<any>;
}
