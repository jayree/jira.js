import { Config } from './config';
import { Callback } from './callback';
export declare type Sender = {
    [key: string]: any;
    sendRequest: (request: Config.BaseRequestConfig, callback?: Callback) => Promise<any>;
};
