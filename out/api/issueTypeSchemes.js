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
exports.IssueTypeSchemes = void 0;
var IssueTypeSchemes = /** @class */ (function () {
    function IssueTypeSchemes(client) {
        this.client = client;
    }
    IssueTypeSchemes.prototype.getAllIssueTypeSchemes = function (params, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_b) {
                request = {
                    url: '/rest/api/2/issuetypescheme',
                    method: 'GET',
                    params: {
                        startAt: params === null || params === void 0 ? void 0 : params.startAt,
                        maxResults: params === null || params === void 0 ? void 0 : params.maxResults,
                        id: (_a = params === null || params === void 0 ? void 0 : params.id) === null || _a === void 0 ? void 0 : _a.join(','),
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    IssueTypeSchemes.prototype.createIssueTypeScheme = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: '/rest/api/2/issuetypescheme',
                    method: 'POST',
                    data: {
                        name: params === null || params === void 0 ? void 0 : params.name,
                        description: params === null || params === void 0 ? void 0 : params.description,
                        defaultIssueTypeId: params === null || params === void 0 ? void 0 : params.defaultIssueTypeId,
                        issueTypeIds: params === null || params === void 0 ? void 0 : params.issueTypeIds,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    IssueTypeSchemes.prototype.getIssueTypeSchemeItems = function (params, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_b) {
                request = {
                    url: '/rest/api/2/issuetypescheme/mapping',
                    method: 'GET',
                    params: {
                        startAt: params === null || params === void 0 ? void 0 : params.startAt,
                        maxResults: params === null || params === void 0 ? void 0 : params.maxResults,
                        issueTypeSchemeId: (_a = params === null || params === void 0 ? void 0 : params.issueTypeSchemeId) === null || _a === void 0 ? void 0 : _a.join(','),
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    IssueTypeSchemes.prototype.getIssueTypeSchemesForProjects = function (params, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_b) {
                request = {
                    url: '/rest/api/2/issuetypescheme/project',
                    method: 'GET',
                    params: {
                        startAt: params === null || params === void 0 ? void 0 : params.startAt,
                        maxResults: params === null || params === void 0 ? void 0 : params.maxResults,
                        projectId: (_a = params === null || params === void 0 ? void 0 : params.projectId) === null || _a === void 0 ? void 0 : _a.join(','),
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    IssueTypeSchemes.prototype.assignIssueTypeSchemeToProject = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: '/rest/api/2/issuetypescheme/project',
                    method: 'PUT',
                    data: {
                        issueTypeSchemeId: params === null || params === void 0 ? void 0 : params.issueTypeSchemeId,
                        projectId: params === null || params === void 0 ? void 0 : params.projectId,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    IssueTypeSchemes.prototype.updateIssueTypeScheme = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/issuetypescheme/" + params.issueTypeSchemeId,
                    method: 'PUT',
                    data: {
                        name: params === null || params === void 0 ? void 0 : params.name,
                        description: params === null || params === void 0 ? void 0 : params.description,
                        defaultIssueTypeId: params === null || params === void 0 ? void 0 : params.defaultIssueTypeId,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    IssueTypeSchemes.prototype.deleteIssueTypeScheme = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/issuetypescheme/" + params.issueTypeSchemeId,
                    method: 'DELETE',
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    IssueTypeSchemes.prototype.addIssueTypesToIssueTypeScheme = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/issuetypescheme/" + params.issueTypeSchemeId + "/issuetype",
                    method: 'PUT',
                    data: {
                        issueTypeIds: params === null || params === void 0 ? void 0 : params.issueTypeIds,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    IssueTypeSchemes.prototype.changeOrderOfIssueTypes = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/issuetypescheme/" + params.issueTypeSchemeId + "/issuetype/move",
                    method: 'PUT',
                    data: {
                        issueTypeIds: params === null || params === void 0 ? void 0 : params.issueTypeIds,
                        after: params === null || params === void 0 ? void 0 : params.after,
                        position: params === null || params === void 0 ? void 0 : params.position,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    IssueTypeSchemes.prototype.deleteIssueTypeFromIssueTypeScheme = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/issuetypescheme/" + params.issueTypeSchemeId + "/issuetype/" + params.issueTypeId,
                    method: 'DELETE',
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    return IssueTypeSchemes;
}());
exports.IssueTypeSchemes = IssueTypeSchemes;
