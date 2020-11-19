import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class Board {
    private readonly client;
    constructor(client: Sender);
    getAllBoards(params?: {
        startAt?: number;
        maxResults?: number;
        type?: string;
        name?: string;
        projectKeyOrId?: string;
        accountIdLocation?: string;
        userkeyLocation?: string;
        usernameLocation?: string;
        projectLocation?: string;
        includePrivate?: boolean;
        negateLocationFiltering?: boolean;
        orderBy?: string;
        expand?: string;
        filterId?: number;
    }, callback?: Callback): Promise<any>;
    createBoard(params: {
        name: string;
        type: 'scrum' | 'kanban';
        filterId: number;
        location?: {
            type: string;
            projectKeyOrId: string;
        };
    }, callback?: Callback): Promise<any>;
    getBoardByFilterId(params: {
        filterId: number;
        startAt?: number;
        maxResults?: number;
    }, callback?: Callback): Promise<any>;
    getBoard(params: {
        boardId: number;
    }, callback?: Callback): Promise<any>;
    deleteBoard(params: {
        boardId: number;
    }, callback?: Callback): Promise<any>;
    getIssuesForBacklog(params: {
        boardId: number;
        startAt?: number;
        maxResults?: number;
        jql?: string;
        validateQuery?: boolean;
        fields?: Array<string>;
        expand?: string;
    }, callback?: Callback): Promise<any>;
    getConfiguration(params: {
        boardId: number;
    }, callback?: Callback): Promise<any>;
    getEpics(params: {
        boardId: number;
        startAt?: number;
        maxResults?: number;
        done?: string;
    }, callback?: Callback): Promise<any>;
    getIssuesWithoutEpic(params: {
        boardId: number;
        startAt?: number;
        maxResults?: number;
        jql?: string;
        validateQuery?: boolean;
        fields?: Array<string>;
        expand?: string;
    }, callback?: Callback): Promise<any>;
    getIssuesForEpic(params: {
        boardId: number;
        epicId: number;
        startAt?: number;
        maxResults?: number;
        jql?: string;
        validateQuery?: boolean;
        fields?: Array<string>;
        expand?: string;
    }, callback?: Callback): Promise<any>;
    getFeaturesForBoard(params: {
        boardId: number;
    }, callback?: Callback): Promise<any>;
    toggleFeatures(params: {
        boardId: number;
        [key: string]: any;
        body?: {
            boardId: number;
            feature?: string;
            enabling?: boolean;
        };
    }, callback?: Callback): Promise<any>;
    getIssuesForBoard(params: {
        boardId: number;
        startAt?: number;
        maxResults?: number;
        jql?: string;
        validateQuery?: boolean;
        fields?: Array<string>;
        expand?: string;
    }, callback?: Callback): Promise<any>;
    moveIssuesToBoard(params: {
        boardId: number;
        issues: Array<string>;
        rankBeforeIssue?: string;
        rankAfterIssue?: string;
        rankCustomFieldId?: number;
    }, callback?: Callback): Promise<any>;
    getProjects(params: {
        boardId: number;
        startAt?: number;
        maxResults?: number;
    }, callback?: Callback): Promise<any>;
    getProjectsFull(params: {
        boardId: number;
    }, callback?: Callback): Promise<any>;
    getBoardPropertyKeys(params: {
        boardId: string;
    }, callback?: Callback): Promise<any>;
    getBoardProperty(params: {
        boardId: string;
        propertyKey: string;
    }, callback?: Callback): Promise<any>;
    setBoardProperty(params: {
        boardId: string;
        propertyKey: string;
    }, callback?: Callback): Promise<any>;
    deleteBoardProperty(params: {
        boardId: string;
        propertyKey: string;
    }, callback?: Callback): Promise<any>;
    getAllQuickFilters(params: {
        boardId: number;
        startAt?: number;
        maxResults?: number;
    }, callback?: Callback): Promise<any>;
    getQuickFilter(params: {
        boardId: number;
        quickFilterId: number;
    }, callback?: Callback): Promise<any>;
    getReportsForBoard(params: {
        boardId: number;
    }, callback?: Callback): Promise<any>;
    getAllSprints(params: {
        boardId: number;
        startAt?: number;
        maxResults?: number;
        state?: string;
    }, callback?: Callback): Promise<any>;
    getIssuesForSprint(params: {
        boardId: number;
        sprintId: number;
        startAt?: number;
        maxResults?: number;
        jql?: string;
        validateQuery?: boolean;
        fields?: Array<string>;
        expand?: string;
    }, callback?: Callback): Promise<any>;
    getAllVersions(params: {
        boardId: number;
        startAt?: number;
        maxResults?: number;
        released?: string;
    }, callback?: Callback): Promise<any>;
}
