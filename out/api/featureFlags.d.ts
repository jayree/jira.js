import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class FeatureFlags {
    private readonly client;
    constructor(client: Sender);
    submitFeatureFlagData(params: {
        Authorization?: string;
        properties?: {
            [key: string]: any;
        };
        flags: Array<{
            schemaVersion?: string;
            id: string;
            key: string;
            updateSequenceId: number;
            displayName?: string;
            issueKeys: string[];
            summary: {
                url?: string;
                lastUpdated: Date;
                status: {
                    enabled: boolean;
                    defaultValue?: string;
                    rollout?: {
                        percentage?: number;
                        text?: string;
                        rules?: number;
                    };
                };
            };
            details: Array<{
                url: string;
                lastUpdated: Date;
                environment: {
                    name: string;
                    type?: string;
                };
                status: {
                    enabled: boolean;
                    defaultValue?: string;
                    rollout?: {
                        percentage?: number;
                        text?: string;
                        rules?: number;
                    };
                };
            }>;
        }>;
        providerMetadata?: {
            product: string;
        };
    }, callback?: Callback): Promise<any>;
    deleteFeatureFlagsByProperty(params: {
        Authorization?: string;
        _updateSequenceId?: number;
    }, callback?: Callback): Promise<any>;
    getAFeatureFlagById(params: {
        Authorization?: string;
        featureFlagId: string;
    }, callback?: Callback): Promise<any>;
    deleteAFeatureFlagById(params: {
        Authorization?: string;
        featureFlagId: string;
        _updateSequenceId?: number;
    }, callback?: Callback): Promise<any>;
}
