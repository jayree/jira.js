import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class IssueTypes {
    private readonly client;
    constructor(client: Sender);
    getAllIssueTypesForUser(callback?: Callback): Promise<any>;
    createIssueType(params: {
        name: string;
        description?: string;
        type?: string;
    }, callback?: Callback): Promise<any>;
    getIssueType(params: {
        id: string;
    }, callback?: Callback): Promise<any>;
    updateIssueType(params: {
        id: string;
        name?: string;
        description?: string;
        avatarId?: number;
    }, callback?: Callback): Promise<any>;
    deleteIssueType(params: {
        id: string;
        alternativeIssueTypeId?: string;
    }, callback?: Callback): Promise<any>;
    getAlternativeIssueTypes(params: {
        id: string;
    }, callback?: Callback): Promise<any>;
    loadIssueTypeAvatar(params: {
        id: string;
        x?: number;
        y?: number;
        size: number;
        [key: string]: any;
    }, callback?: Callback): Promise<any>;
}
