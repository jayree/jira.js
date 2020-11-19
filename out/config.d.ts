import { AxiosRequestConfig } from 'axios';
export interface Config {
    host: string;
    /** @deprecated Use <b>baseRequestConfig</b> property for setting timeout value */
    timeout?: number;
    strictGDPR?: boolean;
    baseRequestConfig?: Config.BaseRequestConfig;
    authentication?: Config.Authentication;
    middlewares?: Config.Middlewares;
}
export declare namespace Config {
    type BaseRequestConfig = AxiosRequestConfig;
    interface Authentication {
        jwt?: Authentication.JWT;
        accessToken?: Authentication.AccessToken;
        basic?: Authentication.Basic;
        oauth1?: Authentication.OAuth1;
    }
    interface Middlewares {
        onError?: Config.Middlewares.OnErrorHandler;
        onResponse?: Config.Middlewares.OnResponseHandler;
    }
    namespace Middlewares {
        type OnErrorHandler = (error: Error) => void;
        type OnResponseHandler = (data: any) => void;
    }
    namespace Authentication {
        type JWT = {
            iss: string;
            secret: string;
            expiryTimeSeconds?: number;
        };
        type Basic = {
            username: string;
            apiToken?: string;
            password?: string;
        };
        type OAuth1 = {
            consumerKey: string;
            consumerSecret: string;
            tokenKey: string;
            tokenSecret: string;
        };
        type AccessToken = string;
    }
}
