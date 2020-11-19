import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class Deployments {
    private readonly client;
    constructor(client: Sender);
    submitDeploymentData(params: {
        Authorization?: string;
        properties?: {
            [key: string]: any;
        };
        deployments: Array<{
            deploymentSequenceNumber: number;
            updateSequenceNumber: number;
            issueKeys: Array<string>;
            displayName: string;
            url: string;
            description: string;
            lastUpdated: string;
            label?: string;
            state: 'unknown' | 'pending' | 'in_progress' | 'cancelled' | 'failed' | 'rolled_back' | 'successful';
            pipeline: {
                id: string;
                displayName: string;
                url: string;
            };
            environment: {
                id: string;
                displayName: string;
                type: 'unmapped' | 'development' | 'testing' | 'staging' | 'production';
            };
            schemaVersion?: string;
        }>;
        providerMetadata?: {
            product: string;
        };
    }, callback?: Callback): Promise<any>;
    deleteDeploymentsByProperty(params: {
        Authorization?: string;
        _updateSequenceNumber?: number;
    }, callback?: Callback): Promise<any>;
    getADeploymentByKey(params: {
        pipelineId: string;
        environmentId: string;
        deploymentSequenceNumber: number;
        Authorization?: string;
    }, callback?: Callback): Promise<any>;
    deleteADeploymentByKey(params: {
        pipelineId: string;
        environmentId: string;
        deploymentSequenceNumber: number;
        _updateSequenceNumber?: number;
        Authorization?: string;
    }, callback?: Callback): Promise<any>;
}
