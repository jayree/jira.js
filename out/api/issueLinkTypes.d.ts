import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class IssueLinkTypes {
    private readonly client;
    constructor(client: Sender);
    getIssueLinkTypes(callback?: Callback): Promise<any>;
    createIssueLinkType(params?: {
        id?: string;
        name?: string;
        inward?: string;
        outward?: string;
        self?: string;
    }, callback?: Callback): Promise<any>;
    getIssueLinkType(params: {
        issueLinkTypeId: string;
    }, callback?: Callback): Promise<any>;
    updateIssueLinkType(params: {
        issueLinkTypeId: string;
        id?: string;
        name?: string;
        inward?: string;
        outward?: string;
        self?: string;
    }, callback?: Callback): Promise<any>;
    deleteIssueLinkType(params: {
        issueLinkTypeId: string;
    }, callback?: Callback): Promise<any>;
}
