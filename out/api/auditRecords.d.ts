import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class AuditRecords {
    private readonly client;
    constructor(client: Sender);
    getAuditRecords(params?: {
        offset?: number;
        limit?: number;
        filter?: string;
        from?: string;
        to?: string;
    }, callback?: Callback): Promise<any>;
}
