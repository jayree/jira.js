import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class TimeTracking {
    private readonly client;
    constructor(client: Sender);
    getSelectedTimeTrackingProvider(callback?: Callback): Promise<any>;
    selectTimeTrackingProvider(params: {
        key: string;
        name?: string;
        url?: string;
    }, callback?: Callback): Promise<any>;
    getAllTimeTrackingProviders(callback?: Callback): Promise<any>;
    getTimeTrackingSettings(callback?: Callback): Promise<any>;
    setTimeTrackingSettings(params: {
        workingHoursPerDay: any;
        workingDaysPerWeek: any;
        timeFormat: string;
        defaultUnit: string;
    }, callback?: Callback): Promise<any>;
}
