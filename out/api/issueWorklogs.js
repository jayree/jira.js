"use strict";
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
exports.IssueWorklogs = void 0;
var IssueWorklogs = /** @class */ (function () {
    function IssueWorklogs(client) {
        this.client = client;
    }
    IssueWorklogs.prototype.getIssueWorklogs = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/issue/" + params.issueIdOrKey + "/worklog",
                    method: 'GET',
                    params: {
                        startAt: params === null || params === void 0 ? void 0 : params.startAt,
                        maxResults: params === null || params === void 0 ? void 0 : params.maxResults,
                        startedAfter: params === null || params === void 0 ? void 0 : params.startedAfter,
                        expand: params === null || params === void 0 ? void 0 : params.expand,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    IssueWorklogs.prototype.addWorklog = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/issue/" + params.issueIdOrKey + "/worklog",
                    method: 'POST',
                    params: {
                        notifyUsers: params === null || params === void 0 ? void 0 : params.notifyUsers,
                        adjustEstimate: params === null || params === void 0 ? void 0 : params.adjustEstimate,
                        newEstimate: params === null || params === void 0 ? void 0 : params.newEstimate,
                        reduceBy: params === null || params === void 0 ? void 0 : params.reduceBy,
                        expand: params === null || params === void 0 ? void 0 : params.expand,
                        overrideEditableFlag: params === null || params === void 0 ? void 0 : params.overrideEditableFlag,
                    },
                    data: __assign(__assign({}, params), { issueIdOrKey: undefined, notifyUsers: undefined, adjustEstimate: undefined, newEstimate: undefined, reduceBy: undefined, expand: undefined, overrideEditableFlag: undefined }),
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    IssueWorklogs.prototype.getWorklog = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/issue/" + params.issueIdOrKey + "/worklog/" + params.id,
                    method: 'GET',
                    params: {
                        expand: params === null || params === void 0 ? void 0 : params.expand,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    IssueWorklogs.prototype.updateWorklog = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/issue/" + params.issueIdOrKey + "/worklog/" + params.id,
                    method: 'PUT',
                    params: {
                        notifyUsers: params === null || params === void 0 ? void 0 : params.notifyUsers,
                        adjustEstimate: params === null || params === void 0 ? void 0 : params.adjustEstimate,
                        newEstimate: params === null || params === void 0 ? void 0 : params.newEstimate,
                        expand: params === null || params === void 0 ? void 0 : params.expand,
                        overrideEditableFlag: params === null || params === void 0 ? void 0 : params.overrideEditableFlag,
                    },
                    data: __assign(__assign({}, params), { issueIdOrKey: undefined, id: undefined, notifyUsers: undefined, adjustEstimate: undefined, newEstimate: undefined, expand: undefined, overrideEditableFlag: undefined }),
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    IssueWorklogs.prototype.deleteWorklog = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/issue/" + params.issueIdOrKey + "/worklog/" + params.id,
                    method: 'DELETE',
                    params: {
                        notifyUsers: params === null || params === void 0 ? void 0 : params.notifyUsers,
                        adjustEstimate: params === null || params === void 0 ? void 0 : params.adjustEstimate,
                        newEstimate: params === null || params === void 0 ? void 0 : params.newEstimate,
                        increaseBy: params === null || params === void 0 ? void 0 : params.increaseBy,
                        overrideEditableFlag: params === null || params === void 0 ? void 0 : params.overrideEditableFlag,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    IssueWorklogs.prototype.getIdsOfDeletedWorklogs = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: '/rest/api/2/worklog/deleted',
                    method: 'GET',
                    params: {
                        since: params === null || params === void 0 ? void 0 : params.since,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    IssueWorklogs.prototype.getWorklogs = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: '/rest/api/2/worklog/list',
                    method: 'POST',
                    params: {
                        expand: params === null || params === void 0 ? void 0 : params.expand,
                    },
                    data: {
                        ids: params === null || params === void 0 ? void 0 : params.ids,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    IssueWorklogs.prototype.getIdsOfUpdatedWorklogs = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: '/rest/api/2/worklog/updated',
                    method: 'GET',
                    params: {
                        since: params === null || params === void 0 ? void 0 : params.since,
                        expand: params === null || params === void 0 ? void 0 : params.expand,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    return IssueWorklogs;
}());
exports.IssueWorklogs = IssueWorklogs;
