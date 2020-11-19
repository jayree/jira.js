"use strict";
/* eslint-disable lines-between-class-members */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = exports.Models = void 0;
var axios_1 = require("axios");
var helpers_1 = require("./helpers");
var Utils = require("./utils");
var api_1 = require("./api");
exports.Models = require("./models");
__exportStar(require("./callback"), exports);
__exportStar(require("./config"), exports);
__exportStar(require("./sender"), exports);
var Client = /** @class */ (function () {
    function Client(config) {
        var _a;
        this.config = config;
        var headers = Utils.removeUndefinedElements(__assign(__assign({}, (_a = config.baseRequestConfig) === null || _a === void 0 ? void 0 : _a.headers), { 'x-atlassian-force-account-id': config.strictGDPR }));
        this.requestInstance = axios_1.default.create(__assign(__assign({ timeout: config.timeout }, config.baseRequestConfig), { baseURL: config.host, headers: headers }));
        this.applicationRoles = new api_1.ApplicationRoles(this);
        this.appProperties = new api_1.AppProperties(this);
        this.auditRecords = new api_1.AuditRecords(this);
        this.avatars = new api_1.Avatars(this);
        this.backlog = new api_1.Backlog(this);
        this.board = new api_1.Board(this);
        this.builds = new api_1.Builds(this);
        this.dashboards = new api_1.Dashboards(this);
        this.deployments = new api_1.Deployments(this);
        this.developmentInformation = new api_1.DevelopmentInformation(this);
        this.dynamicModules = new api_1.DynamicModules(this);
        this.epic = new api_1.Epic(this);
        this.featureFlags = new api_1.FeatureFlags(this);
        this.filters = new api_1.Filters(this);
        this.filterSharing = new api_1.FilterSharing(this);
        this.groupAndUserPicker = new api_1.GroupAndUserPicker(this);
        this.groups = new api_1.Groups(this);
        this.issue = new api_1.Issue(this);
        this.issueAttachments = new api_1.IssueAttachments(this);
        /** @deprecated Use issueAttachments. Will be removed in next major version */
        this.issueAttachment = new api_1.IssueAttachments(this);
        this.issueCommentProperties = new api_1.IssueCommentProperties(this);
        this.issueComments = new api_1.IssueComments(this);
        this.issueCustomFieldOptions = new api_1.IssueCustomFieldOptions(this);
        this.issueCustomFieldOptionsApps = new api_1.IssueCustomFieldOptionsApps(this);
        this.issueFieldConfigurations = new api_1.IssueFieldConfigurations(this);
        this.issueFields = new api_1.IssueFields(this);
        this.issueLinks = new api_1.IssueLinks(this);
        this.issueLinkTypes = new api_1.IssueLinkTypes(this);
        this.issueNavigatorSettings = new api_1.IssueNavigatorSettings(this);
        this.issueNotificationSchemes = new api_1.IssueNotificationSchemes(this);
        this.issuePriorities = new api_1.IssuePriorities(this);
        this.issueProperties = new api_1.IssueProperties(this);
        this.issueRemoteLinks = new api_1.IssueRemoteLinks(this);
        this.issueResolutions = new api_1.IssueResolutions(this);
        this.issues = new api_1.Issues(this);
        this.issueSearch = new api_1.IssueSearch(this);
        this.issueSecurityLevel = new api_1.IssueSecurityLevel(this);
        this.issueSecuritySchemes = new api_1.IssueSecuritySchemes(this);
        this.issueTypeProperties = new api_1.IssueTypeProperties(this);
        this.issueTypeSchemes = new api_1.IssueTypeSchemes(this);
        this.issueTypeScreenSchemes = new api_1.IssueTypeScreenSchemes(this);
        this.issueTypes = new api_1.IssueTypes(this);
        this.issueVotes = new api_1.IssueVotes(this);
        this.issueWatchers = new api_1.IssueWatchers(this);
        this.issueWorklogProperties = new api_1.IssueWorklogProperties(this);
        this.issueWorklogs = new api_1.IssueWorklogs(this);
        this.jiraExpressions = new api_1.JiraExpressions(this);
        this.jiraSettings = new api_1.JiraSettings(this);
        this.jql = new api_1.Jql(this);
        this.labels = new api_1.Labels(this);
        this.myself = new api_1.Myself(this);
        this.permissions = new api_1.Permissions(this);
        this.permissionSchemes = new api_1.PermissionSchemes(this);
        /** @deprecated Use permissionSchemes. Will be removed in next major version */
        this.permissionsSchemes = new api_1.PermissionSchemes(this);
        this.projectAvatars = new api_1.ProjectAvatars(this);
        this.projectCategories = new api_1.ProjectCategories(this);
        this.projectComponents = new api_1.ProjectComponents(this);
        this.projectEmail = new api_1.ProjectEmail(this);
        this.projectKeyAndNameValidation = new api_1.ProjectKeyAndNameValidation(this);
        this.projectPermissionSchemes = new api_1.ProjectPermissionSchemes(this);
        this.projectProperties = new api_1.ProjectProperties(this);
        this.projectRoleActors = new api_1.ProjectRoleActors(this);
        this.projectRoles = new api_1.ProjectRoles(this);
        this.projects = new api_1.Projects(this);
        this.projectTypes = new api_1.ProjectTypes(this);
        this.projectVersions = new api_1.ProjectVersions(this);
        this.screens = new api_1.Screens(this);
        this.screenSchemes = new api_1.ScreenSchemes(this);
        this.screenTabFields = new api_1.ScreenTabFields(this);
        this.screenTabs = new api_1.ScreenTabs(this);
        this.sprint = new api_1.Sprint(this);
        this.tasks = new api_1.Tasks(this);
        this.timeTracking = new api_1.TimeTracking(this);
        this.userProperties = new api_1.UserProperties(this);
        this.users = new api_1.Users(this);
        this.userSearch = new api_1.UserSearch(this);
        this.webhooks = new api_1.Webhooks(this);
        this.workflows = new api_1.Workflows(this);
        this.workflowSchemeDrafts = new api_1.WorkflowSchemeDrafts(this);
        this.workflowSchemeProjectAssociations = new api_1.WorkflowSchemeProjectAssociations(this);
        this.workflowSchemes = new api_1.WorkflowSchemes(this);
        this.workflowStatusCategories = new api_1.WorkflowStatusCategories(this);
        this.workflowStatuses = new api_1.WorkflowStatuses(this);
        this.workflowTransitionProperties = new api_1.WorkflowTransitionProperties(this);
        this.workflowTransitionRules = new api_1.WorkflowTransitionRules(this);
    }
    Client.prototype.sendRequest = function (request, callback) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var response, callbackResponseHandler, defaultResponseHandler, responseHandler, e_1, callbackErrorHandler, defaultErrorHandler, errorHandler;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 2, , 3]);
                        request.headers = Utils.removeUndefinedElements(__assign({ Authorization: helpers_1.getAuthentication(this.config, request) }, request.headers));
                        return [4 /*yield*/, this.requestInstance.request(request)];
                    case 1:
                        response = _e.sent();
                        callbackResponseHandler = callback && (function (data) { return callback(null, data); });
                        defaultResponseHandler = function (data) { return data; };
                        responseHandler = callbackResponseHandler !== null && callbackResponseHandler !== void 0 ? callbackResponseHandler : defaultResponseHandler;
                        (_b = (_a = this.config.middlewares) === null || _a === void 0 ? void 0 : _a.onResponse) === null || _b === void 0 ? void 0 : _b.call(_a, response.data);
                        return [2 /*return*/, responseHandler(response.data)];
                    case 2:
                        e_1 = _e.sent();
                        callbackErrorHandler = callback && (function (error) { return callback(error); });
                        defaultErrorHandler = function (error) { throw error; };
                        errorHandler = callbackErrorHandler !== null && callbackErrorHandler !== void 0 ? callbackErrorHandler : defaultErrorHandler;
                        (_d = (_c = this.config.middlewares) === null || _c === void 0 ? void 0 : _c.onError) === null || _d === void 0 ? void 0 : _d.call(_c, e_1);
                        return [2 /*return*/, errorHandler(e_1)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Client;
}());
exports.Client = Client;
