import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class GroupAndUserPicker {
    private readonly client;
    constructor(client: Sender);
    findUsersAndGroups(params: {
        query: string;
        maxResults?: number;
        showAvatar?: boolean;
        fieldId?: string;
        projectId?: Array<string>;
        issueTypeId?: Array<string>;
        avatarSize?: string;
        caseInsensitive?: boolean;
        excludeConnectAddons?: boolean;
    }, callback?: Callback): Promise<any>;
}
