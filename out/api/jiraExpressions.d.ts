import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class JiraExpressions {
    private readonly client;
    constructor(client: Sender);
    analyseJiraExpression(params: {
        check?: string;
        expressions: Array<string>;
        contextVariables?: any;
    }, callback?: Callback): Promise<any>;
    evaluateJiraExpression(params: {
        expand?: string;
        expression: string;
        context?: any;
    }, callback?: Callback): Promise<any>;
}
