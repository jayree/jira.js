import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class Filters {
    private readonly client;
    constructor(client: Sender);
    getFilters(params?: {
        expand?: string;
    }, callback?: Callback): Promise<any>;
    createFilter(params: {
        expand?: string;
        self?: string;
        id?: string;
        name: string;
        description?: string;
        owner?: any;
        jql?: string;
        viewUrl?: string;
        searchUrl?: string;
        favourite?: boolean;
        favouritedCount?: number;
        sharePermissions?: Array<any>;
        sharedUsers?: any;
        subscriptions?: any;
    }, callback?: Callback): Promise<any>;
    getFavoriteFilters(params?: {
        expand?: string;
    }, callback?: Callback): Promise<any>;
    getMyFilters(params?: {
        expand?: string;
        includeFavourites?: boolean;
    }, callback?: Callback): Promise<any>;
    searchForFilters(params?: {
        filterName?: string;
        accountId?: string;
        owner?: string;
        groupname?: string;
        projectId?: number;
        id?: Array<number>;
        orderBy?: string;
        startAt?: number;
        maxResults?: number;
        expand?: string;
    }, callback?: Callback): Promise<any>;
    getFilter(params: {
        id: number;
        expand?: string;
    }, callback?: Callback): Promise<any>;
    updateFilter(params: {
        id: number;
        expand?: string;
        self?: string;
        name: string;
        description?: string;
        owner?: any;
        jql?: string;
        viewUrl?: string;
        searchUrl?: string;
        favourite?: boolean;
        favouritedCount?: number;
        sharePermissions?: Array<any>;
        sharedUsers?: any;
        subscriptions?: any;
    }, callback?: Callback): Promise<any>;
    deleteFilter(params: {
        id: number;
    }, callback?: Callback): Promise<any>;
    getColumns(params: {
        id: number;
    }, callback?: Callback): Promise<any>;
    setColumns(params: {
        id: number;
        [key: string]: any;
    }, callback?: Callback): Promise<any>;
    resetColumns(params: {
        id: number;
    }, callback?: Callback): Promise<any>;
    addFilterAsFavorite(params: {
        id: number;
        expand?: string;
    }, callback?: Callback): Promise<any>;
    removeFilterAsFavorite(params: {
        id: number;
        expand?: string;
    }, callback?: Callback): Promise<any>;
}
