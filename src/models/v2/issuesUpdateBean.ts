import { IssueUpdateDetails } from "./issueUpdateDetails";

export interface IssuesUpdateBean {
    issueUpdates: IssueUpdateDetails[];
    [key: string]: unknown;
}