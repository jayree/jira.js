import { Sender } from '../sender';
import { Callback } from '../callback';
export declare class DevelopmentInformation {
    private readonly client;
    constructor(client: Sender);
    storeDevelopmentInformation(params: {
        Authorization?: string;
        repositories: Array<{
            name: string;
            description?: string;
            forkOf?: string;
            url: string;
            commits?: Array<{
                id: string;
                issueKeys: Array<string>;
                updateSequenceId: number;
                hash: string;
                flags?: Array<string>;
                message: string;
                author: {
                    name: string;
                    email?: string;
                    username?: string;
                    url?: string;
                    avatar?: string;
                };
                fileCount: number;
                url: string;
                files?: Array<{
                    path: string;
                    url: string;
                    changeType: 'ADDED' | 'COPIED' | 'DELETED' | 'MODIFIED' | 'MOVED' | 'UNKNOWN';
                    linesAdded: number;
                    linesRemoved: number;
                }>;
                authorTimestamp: string;
                displayId: string;
            }>;
            branches?: Array<{
                id: string;
                issueKeys: Array<string>;
                updateSequenceId: number;
                name: string;
                lastCommit: {
                    id: string;
                    issueKeys: Array<string>;
                    updateSequenceId: number;
                    hash: string;
                    flags?: Array<string>;
                    message: string;
                    author: {
                        name: string;
                        email?: string;
                        username?: string;
                        url?: string;
                        avatar?: string;
                    };
                    fileCount: number;
                    url: string;
                    files?: Array<{
                        path: string;
                        url: string;
                        changeType: 'ADDED' | 'COPIED' | 'DELETED' | 'MODIFIED' | 'MOVED' | 'UNKNOWN';
                        linesAdded: number;
                        linesRemoved: number;
                    }>;
                    authorTimestamp: string;
                    displayId: string;
                };
                createPullRequestUrl?: string;
                url: string;
            }>;
            pullRequests?: Array<{
                id: string;
                issueKeys: Array<string>;
                updateSequenceId: number;
                status: 'OPEN' | 'MERGED' | 'DECLINED' | 'UNKNOWN';
                title: string;
                author: {
                    name: string;
                    email?: string;
                    username?: string;
                    url?: string;
                    avatar?: string;
                };
                commentCount: number;
                sourceBranch: string;
                sourceBranchUrl?: string;
                lastUpdate: string;
                destinationBranch?: string;
                reviewers?: Array<{
                    name: string;
                    approvalStatus?: 'APPROVED' | 'UNAPPROVED';
                    url?: string;
                    avatar?: string;
                }>;
                url: string;
                displayId: string;
            }>;
            avatar?: string;
            avatarDescription?: string;
            id: string;
            updateSequenceId: number;
        }>;
    }, callback?: Callback): Promise<any>;
    getRepository(params: {
        repositoryId: string;
        Authorization?: string;
    }, callback?: Callback): Promise<any>;
    deleteRepository(params: {
        repositoryId: string;
        _updateSequenceId?: number;
        Authorization?: string;
    }, callback?: Callback): Promise<any>;
    deleteDevelopmentInformationByProperties(params: {
        Authorization?: string;
        _updateSequenceId?: number;
    }, callback?: Callback): Promise<any>;
    checkIfDataExistsForTheSuppliedProperties(params: {
        Authorization?: string;
        _updateSequenceId?: number;
    }, callback?: Callback): Promise<any>;
    deleteDevelopmentInformationEntity(params: {
        repositoryId: string;
        entityType: string;
        entityId: string;
        _updateSequenceId?: number;
        Authorization?: string;
    }, callback?: Callback): Promise<any>;
}
