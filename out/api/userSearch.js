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
exports.UserSearch = void 0;
var UserSearch = /** @class */ (function () {
    function UserSearch(client) {
        this.client = client;
    }
    UserSearch.prototype.findUsersAssignableToProjects = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: '/rest/api/2/user/assignable/multiProjectSearch',
                    method: 'GET',
                    params: {
                        query: params === null || params === void 0 ? void 0 : params.query,
                        username: params === null || params === void 0 ? void 0 : params.username,
                        accountId: params === null || params === void 0 ? void 0 : params.accountId,
                        projectKeys: params === null || params === void 0 ? void 0 : params.projectKeys,
                        startAt: params === null || params === void 0 ? void 0 : params.startAt,
                        maxResults: params === null || params === void 0 ? void 0 : params.maxResults,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    UserSearch.prototype.findUsersAssignableToIssues = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: '/rest/api/2/user/assignable/search',
                    method: 'GET',
                    params: {
                        query: params === null || params === void 0 ? void 0 : params.query,
                        sessionId: params === null || params === void 0 ? void 0 : params.sessionId,
                        username: params === null || params === void 0 ? void 0 : params.username,
                        accountId: params === null || params === void 0 ? void 0 : params.accountId,
                        project: params === null || params === void 0 ? void 0 : params.project,
                        issueKey: params === null || params === void 0 ? void 0 : params.issueKey,
                        startAt: params === null || params === void 0 ? void 0 : params.startAt,
                        maxResults: params === null || params === void 0 ? void 0 : params.maxResults,
                        actionDescriptorId: params === null || params === void 0 ? void 0 : params.actionDescriptorId,
                        recommend: params === null || params === void 0 ? void 0 : params.recommend,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    UserSearch.prototype.findUsersWithPermissions = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: '/rest/api/2/user/permission/search',
                    method: 'GET',
                    params: {
                        query: params === null || params === void 0 ? void 0 : params.query,
                        username: params === null || params === void 0 ? void 0 : params.username,
                        accountId: params === null || params === void 0 ? void 0 : params.accountId,
                        permissions: params === null || params === void 0 ? void 0 : params.permissions,
                        issueKey: params === null || params === void 0 ? void 0 : params.issueKey,
                        projectKey: params === null || params === void 0 ? void 0 : params.projectKey,
                        startAt: params === null || params === void 0 ? void 0 : params.startAt,
                        maxResults: params === null || params === void 0 ? void 0 : params.maxResults,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    UserSearch.prototype.findUsersForPicker = function (params, callback) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_c) {
                request = {
                    url: '/rest/api/2/user/picker',
                    method: 'GET',
                    params: {
                        query: params === null || params === void 0 ? void 0 : params.query,
                        maxResults: params === null || params === void 0 ? void 0 : params.maxResults,
                        showAvatar: params === null || params === void 0 ? void 0 : params.showAvatar,
                        exclude: (_a = params === null || params === void 0 ? void 0 : params.exclude) === null || _a === void 0 ? void 0 : _a.join(','),
                        excludeAccountIds: (_b = params === null || params === void 0 ? void 0 : params.excludeAccountIds) === null || _b === void 0 ? void 0 : _b.join(','),
                        avatarSize: params === null || params === void 0 ? void 0 : params.avatarSize,
                        excludeConnectUsers: params === null || params === void 0 ? void 0 : params.excludeConnectUsers,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    UserSearch.prototype.findUsers = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: '/rest/api/2/user/search',
                    method: 'GET',
                    params: {
                        query: params === null || params === void 0 ? void 0 : params.query,
                        username: params === null || params === void 0 ? void 0 : params.username,
                        accountId: params === null || params === void 0 ? void 0 : params.accountId,
                        startAt: params === null || params === void 0 ? void 0 : params.startAt,
                        maxResults: params === null || params === void 0 ? void 0 : params.maxResults,
                        property: params === null || params === void 0 ? void 0 : params.property,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    UserSearch.prototype.findUsersByQuery = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: '/rest/api/2/user/search/query',
                    method: 'GET',
                    params: {
                        query: params === null || params === void 0 ? void 0 : params.query,
                        startAt: params === null || params === void 0 ? void 0 : params.startAt,
                        maxResults: params === null || params === void 0 ? void 0 : params.maxResults,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    UserSearch.prototype.findUserKeysByQuery = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: '/rest/api/2/user/search/query/key',
                    method: 'GET',
                    params: {
                        query: params === null || params === void 0 ? void 0 : params.query,
                        startAt: params === null || params === void 0 ? void 0 : params.startAt,
                        maxResults: params === null || params === void 0 ? void 0 : params.maxResults,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    UserSearch.prototype.findUsersWithBrowsePermission = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: '/rest/api/2/user/viewissue/search',
                    method: 'GET',
                    params: {
                        query: params === null || params === void 0 ? void 0 : params.query,
                        username: params === null || params === void 0 ? void 0 : params.username,
                        accountId: params === null || params === void 0 ? void 0 : params.accountId,
                        issueKey: params === null || params === void 0 ? void 0 : params.issueKey,
                        projectKey: params === null || params === void 0 ? void 0 : params.projectKey,
                        startAt: params === null || params === void 0 ? void 0 : params.startAt,
                        maxResults: params === null || params === void 0 ? void 0 : params.maxResults,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    return UserSearch;
}());
exports.UserSearch = UserSearch;
