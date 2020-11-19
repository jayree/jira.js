import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class Epic {
    private readonly client;
    constructor(client: Sender);
    getIssuesWithoutEpic(params?: {
        startAt?: number;
        maxResults?: number;
        jql?: string;
        validateQuery?: boolean;
        fields?: Array<string>;
        expand?: string;
    }, callback?: Callback): Promise<any>;
    removeIssuesFromEpic(params: {
        issues: Array<string>;
    }, callback?: Callback): Promise<any>;
    getEpic(params: {
        epicIdOrKey: string;
    }, callback?: Callback): Promise<any>;
    partiallyUpdateEpic(params: {
        epicIdOrKey: string;
        name?: string;
        summary?: string;
        color?: {
            key: 'color_1' | 'color_2' | 'color_3' | 'color_4' | 'color_5' | 'color_6' | 'color_7' | 'color_8' | 'color_9' | 'color_10' | 'color_11' | 'color_12' | 'color_13' | 'color_14';
        };
        done?: boolean;
    }, callback?: Callback): Promise<any>;
    getIssuesForEpic(params: {
        epicIdOrKey: string;
        startAt?: number;
        maxResults?: number;
        jql?: string;
        validateQuery?: boolean;
        fields?: Array<string>;
        expand?: string;
    }, callback?: Callback): Promise<any>;
    moveIssuesToEpic(params: {
        epicIdOrKey: string;
        issues: Array<string>;
    }, callback?: Callback): Promise<any>;
    rankEpics(params: {
        epicIdOrKey: string;
        rankBeforeEpic?: string;
        rankAfterEpic?: string;
        rankCustomFieldId?: number;
    }, callback?: Callback): Promise<any>;
}
