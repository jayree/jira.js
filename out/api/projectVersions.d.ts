import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class ProjectVersions {
    private readonly client;
    constructor(client: Sender);
    getProjectVersionsPaginated(params: {
        projectIdOrKey: string;
        startAt?: number;
        maxResults?: number;
        orderBy?: string;
        query?: string;
        status?: string;
        expand?: string;
    }, callback?: Callback): Promise<any>;
    getProjectVersions(params: {
        projectIdOrKey: string;
        expand?: string;
    }, callback?: Callback): Promise<any>;
    createVersion(params?: {
        expand?: string;
        self?: string;
        id?: string;
        description?: string;
        name?: string;
        archived?: boolean;
        released?: boolean;
        startDate?: string;
        releaseDate?: string;
        overdue?: boolean;
        userStartDate?: string;
        userReleaseDate?: string;
        project?: string;
        projectId?: number;
        moveUnfixedIssuesTo?: string;
        operations?: Array<any>;
        issuesStatusForFixVersion?: any;
    }, callback?: Callback): Promise<any>;
    getVersion(params: {
        id: string;
        expand?: string;
    }, callback?: Callback): Promise<any>;
    updateVersion(params: {
        id: string;
        expand?: string;
        self?: string;
        description?: string;
        name?: string;
        archived?: boolean;
        released?: boolean;
        startDate?: string;
        releaseDate?: string;
        overdue?: boolean;
        userStartDate?: string;
        userReleaseDate?: string;
        project?: string;
        projectId?: number;
        moveUnfixedIssuesTo?: string;
        operations?: Array<any>;
        issuesStatusForFixVersion?: any;
    }, callback?: Callback): Promise<any>;
    deleteVersion(params: {
        id: string;
        moveFixIssuesTo?: string;
        moveAffectedIssuesTo?: string;
    }, callback?: Callback): Promise<any>;
    mergeVersions(params: {
        id: string;
        moveIssuesTo: string;
    }, callback?: Callback): Promise<any>;
    moveVersion(params: {
        id: string;
        after?: string;
        position?: string;
    }, callback?: Callback): Promise<any>;
    getVersionsRelatedIssuesCount(params: {
        id: string;
    }, callback?: Callback): Promise<any>;
    deleteAndReplaceVersion(params: {
        id: string;
        moveFixIssuesTo?: number;
        moveAffectedIssuesTo?: number;
        customFieldReplacementList?: Array<any>;
    }, callback?: Callback): Promise<any>;
    getVersionsUnresolvedIssuesCount(params: {
        id: string;
    }, callback?: Callback): Promise<any>;
}
