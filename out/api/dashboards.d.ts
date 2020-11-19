import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class Dashboards {
    private readonly client;
    constructor(client: Sender);
    getAllDashboards(params?: {
        filter?: string;
        startAt?: number;
        maxResults?: number;
    }, callback?: Callback): Promise<any>;
    createDashboard(params?: {
        description?: string;
        name?: string;
        sharePermissions?: Array<any>;
    }, callback?: Callback): Promise<any>;
    searchForDashboards(params?: {
        dashboardName?: string;
        accountId?: string;
        owner?: string;
        groupname?: string;
        projectId?: number;
        orderBy?: string;
        startAt?: number;
        maxResults?: number;
        expand?: string;
    }, callback?: Callback): Promise<any>;
    getDashboardItemPropertyKeys(params: {
        dashboardId: string;
        itemId: string;
    }, callback?: Callback): Promise<any>;
    getDashboardItemProperty(params: {
        dashboardId: string;
        itemId: string;
        propertyKey: string;
    }, callback?: Callback): Promise<any>;
    setDashboardItemProperty(params: {
        dashboardId: string;
        itemId: string;
        propertyKey: string;
        [key: string]: any;
    }, callback?: Callback): Promise<any>;
    deleteDashboardItemProperty(params: {
        dashboardId: string;
        itemId: string;
        propertyKey: string;
    }, callback?: Callback): Promise<any>;
    getDashboard(params: {
        id: string;
    }, callback?: Callback): Promise<any>;
    updateDashboard(params: {
        id: string;
        description?: string;
        name?: string;
        sharePermissions?: Array<any>;
    }, callback?: Callback): Promise<any>;
    deleteDashboard(params: {
        id: string;
    }, callback?: Callback): Promise<any>;
    copyDashboard(params: {
        id: string;
        description?: string;
        name?: string;
        sharePermissions?: Array<any>;
    }, callback?: Callback): Promise<any>;
}
