"use strict";
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
exports.WorkflowSchemeDrafts = void 0;
var WorkflowSchemeDrafts = /** @class */ (function () {
    function WorkflowSchemeDrafts(client) {
        this.client = client;
    }
    WorkflowSchemeDrafts.prototype.createDraftWorkflowScheme = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/workflowscheme/" + params.id + "/createdraft",
                    method: 'POST',
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    WorkflowSchemeDrafts.prototype.getDraftWorkflowScheme = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/workflowscheme/" + params.id + "/draft",
                    method: 'GET',
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    WorkflowSchemeDrafts.prototype.updateDraftWorkflowScheme = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/workflowscheme/" + params.id + "/draft",
                    method: 'PUT',
                    data: {
                        id: params === null || params === void 0 ? void 0 : params.id,
                        name: params === null || params === void 0 ? void 0 : params.name,
                        description: params === null || params === void 0 ? void 0 : params.description,
                        defaultWorkflow: params === null || params === void 0 ? void 0 : params.defaultWorkflow,
                        issueTypeMappings: params === null || params === void 0 ? void 0 : params.issueTypeMappings,
                        originalDefaultWorkflow: params === null || params === void 0 ? void 0 : params.originalDefaultWorkflow,
                        originalIssueTypeMappings: params === null || params === void 0 ? void 0 : params.originalIssueTypeMappings,
                        draft: params === null || params === void 0 ? void 0 : params.draft,
                        lastModifiedUser: params === null || params === void 0 ? void 0 : params.lastModifiedUser,
                        lastModified: params === null || params === void 0 ? void 0 : params.lastModified,
                        self: params === null || params === void 0 ? void 0 : params.self,
                        updateDraftIfNeeded: params === null || params === void 0 ? void 0 : params.updateDraftIfNeeded,
                        issueTypes: params === null || params === void 0 ? void 0 : params.issueTypes,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    WorkflowSchemeDrafts.prototype.deleteDraftWorkflowScheme = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/workflowscheme/" + params.id + "/draft",
                    method: 'DELETE',
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    WorkflowSchemeDrafts.prototype.getDraftDefaultWorkflow = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/workflowscheme/" + params.id + "/draft/default",
                    method: 'GET',
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    WorkflowSchemeDrafts.prototype.updateDraftDefaultWorkflow = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/workflowscheme/" + params.id + "/draft/default",
                    method: 'PUT',
                    data: {
                        workflow: params === null || params === void 0 ? void 0 : params.workflow,
                        updateDraftIfNeeded: params === null || params === void 0 ? void 0 : params.updateDraftIfNeeded,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    WorkflowSchemeDrafts.prototype.deleteDraftDefaultWorkflow = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/workflowscheme/" + params.id + "/draft/default",
                    method: 'DELETE',
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    WorkflowSchemeDrafts.prototype.getWorkflowForIssueTypeInDraftWorkflowScheme = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/workflowscheme/" + params.id + "/draft/issuetype/" + params.issueType,
                    method: 'GET',
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    WorkflowSchemeDrafts.prototype.setWorkflowForIssueTypeInDraftWorkflowScheme = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/workflowscheme/" + params.id + "/draft/issuetype/" + params.issueType,
                    method: 'PUT',
                    data: {
                        issueType: params === null || params === void 0 ? void 0 : params.issueType,
                        workflow: params === null || params === void 0 ? void 0 : params.workflow,
                        updateDraftIfNeeded: params === null || params === void 0 ? void 0 : params.updateDraftIfNeeded,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    WorkflowSchemeDrafts.prototype.deleteWorkflowForIssueTypeInDraftWorkflowScheme = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/workflowscheme/" + params.id + "/draft/issuetype/" + params.issueType,
                    method: 'DELETE',
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    WorkflowSchemeDrafts.prototype.getIssueTypesForWorkflowsInDraftWorkflowScheme = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/workflowscheme/" + params.id + "/draft/workflow",
                    method: 'GET',
                    params: {
                        workflowName: params === null || params === void 0 ? void 0 : params.workflowName,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    WorkflowSchemeDrafts.prototype.setIssueTypesForWorkflowInWorkflowScheme = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/workflowscheme/" + params.id + "/draft/workflow",
                    method: 'PUT',
                    params: {
                        workflowName: params === null || params === void 0 ? void 0 : params.workflowName,
                    },
                    data: {
                        workflow: params === null || params === void 0 ? void 0 : params.workflow,
                        issueTypes: params === null || params === void 0 ? void 0 : params.issueTypes,
                        defaultMapping: params === null || params === void 0 ? void 0 : params.defaultMapping,
                        updateDraftIfNeeded: params === null || params === void 0 ? void 0 : params.updateDraftIfNeeded,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    WorkflowSchemeDrafts.prototype.deleteIssueTypesForWorkflowInDraftWorkflowScheme = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/workflowscheme/" + params.id + "/draft/workflow",
                    method: 'DELETE',
                    params: {
                        workflowName: params === null || params === void 0 ? void 0 : params.workflowName,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    return WorkflowSchemeDrafts;
}());
exports.WorkflowSchemeDrafts = WorkflowSchemeDrafts;
