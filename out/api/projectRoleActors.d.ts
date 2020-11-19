import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class ProjectRoleActors {
    private readonly client;
    constructor(client: Sender);
    setActorsForProjectRole(params: {
        projectIdOrKey: string;
        id: number;
        categorisedActors?: any;
    }, callback?: Callback): Promise<any>;
    addActorsToProjectRole(params: {
        projectIdOrKey: string;
        id: number;
        user?: Array<string>;
        group?: Array<string>;
    }, callback?: Callback): Promise<any>;
    deleteActorsFromProjectRole(params: {
        projectIdOrKey: string;
        id: number;
        user?: string;
        group?: string;
    }, callback?: Callback): Promise<any>;
    getDefaultActorsForProjectRole(params: {
        id: number;
    }, callback?: Callback): Promise<any>;
    addDefaultActorsToProjectRole(params: {
        id: number;
        user?: Array<string>;
        group?: Array<string>;
    }, callback?: Callback): Promise<any>;
    deleteDefaultActorsFromProjectRole(params: {
        id: number;
        user?: string;
        group?: string;
    }, callback?: Callback): Promise<any>;
}
