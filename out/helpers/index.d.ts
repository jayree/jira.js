import { AxiosRequestConfig } from 'axios';
import { Config } from '../config';
export declare const getAuthentication: (config: Config, request: AxiosRequestConfig) => string | undefined;
