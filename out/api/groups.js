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
exports.Groups = void 0;
var Groups = /** @class */ (function () {
    function Groups(client) {
        this.client = client;
    }
    Groups.prototype.getGroup = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: '/rest/api/2/group',
                    method: 'GET',
                    params: {
                        groupname: params === null || params === void 0 ? void 0 : params.groupname,
                        expand: params === null || params === void 0 ? void 0 : params.expand,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Groups.prototype.createGroup = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: '/rest/api/2/group',
                    method: 'POST',
                    data: __assign({}, params),
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Groups.prototype.removeGroup = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: '/rest/api/2/group',
                    method: 'DELETE',
                    params: {
                        groupname: params === null || params === void 0 ? void 0 : params.groupname,
                        swapGroup: params === null || params === void 0 ? void 0 : params.swapGroup,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Groups.prototype.bulkGetGroups = function (params, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_b) {
                request = {
                    url: '/rest/api/2/group/bulk',
                    method: 'GET',
                    params: {
                        startAt: params === null || params === void 0 ? void 0 : params.startAt,
                        maxResults: params === null || params === void 0 ? void 0 : params.maxResults,
                        groupId: (_a = params === null || params === void 0 ? void 0 : params.groupId) === null || _a === void 0 ? void 0 : _a.join(','),
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Groups.prototype.getUsersFromGroup = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: '/rest/api/2/group/member',
                    method: 'GET',
                    params: {
                        groupname: params === null || params === void 0 ? void 0 : params.groupname,
                        includeInactiveUsers: params === null || params === void 0 ? void 0 : params.includeInactiveUsers,
                        startAt: params === null || params === void 0 ? void 0 : params.startAt,
                        maxResults: params === null || params === void 0 ? void 0 : params.maxResults,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Groups.prototype.addUserToGroup = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: '/rest/api/2/group/user',
                    method: 'POST',
                    params: {
                        groupname: params === null || params === void 0 ? void 0 : params.groupname,
                    },
                    data: __assign(__assign({}, params), { groupname: undefined }),
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Groups.prototype.removeUserFromGroup = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: '/rest/api/2/group/user',
                    method: 'DELETE',
                    params: {
                        groupname: params === null || params === void 0 ? void 0 : params.groupname,
                        username: params === null || params === void 0 ? void 0 : params.username,
                        accountId: params === null || params === void 0 ? void 0 : params.accountId,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Groups.prototype.findGroups = function (params, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_b) {
                request = {
                    url: '/rest/api/2/groups/picker',
                    method: 'GET',
                    params: {
                        accountId: params === null || params === void 0 ? void 0 : params.accountId,
                        query: params === null || params === void 0 ? void 0 : params.query,
                        exclude: (_a = params === null || params === void 0 ? void 0 : params.exclude) === null || _a === void 0 ? void 0 : _a.join(','),
                        maxResults: params === null || params === void 0 ? void 0 : params.maxResults,
                        userName: params === null || params === void 0 ? void 0 : params.userName,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    return Groups;
}());
exports.Groups = Groups;
