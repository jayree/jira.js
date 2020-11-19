import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class Builds {
    private readonly client;
    constructor(client: Sender);
    submitBuildData(params: {
        Authorization?: string;
        properties?: {
            [key: string]: any;
        };
        builds: {
            schemaVersion?: string;
            pipelineId: string;
            buildNumber: number;
            updateSequenceNumber: number;
            displayName: string;
            description?: string;
            label?: string;
            url: string;
            state: 'pending' | 'in_progress' | 'successful' | 'failed' | 'cancelled' | 'unknown';
            lastUpdated: string;
            issueKeys: Array<string>;
            testInfo?: {
                totalNumber: number;
                numberPassed: number;
                numberFailed: number;
                numberSkipped?: number;
            };
            references?: Array<{
                commit?: {
                    id: string;
                    repositoryUri: string;
                };
                ref?: {
                    name: string;
                    uri: string;
                };
            }>;
        };
        providerMetadata?: {
            product: string;
        };
    }, callback?: Callback): Promise<any>;
    deleteBuildsByProperty(params: {
        Authorization?: string;
        _updateSequenceNumber?: number;
    }, callback?: Callback): Promise<any>;
    getABuildByKey(params: {
        Authorization?: string;
        pipelineId: string;
        buildNumber: number;
    }, callback?: Callback): Promise<any>;
    deleteABuildByKey(params: {
        Authorization?: string;
        pipelineId: string;
        buildNumber: number;
        _updateSequenceNumber?: number;
    }, callback?: Callback): Promise<any>;
}
