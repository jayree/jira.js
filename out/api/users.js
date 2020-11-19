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
exports.Users = void 0;
var Users = /** @class */ (function () {
    function Users(client) {
        this.client = client;
    }
    Users.prototype.getUser = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: '/rest/api/2/user',
                    method: 'GET',
                    params: {
                        accountId: params === null || params === void 0 ? void 0 : params.accountId,
                        username: params === null || params === void 0 ? void 0 : params.username,
                        key: params === null || params === void 0 ? void 0 : params.key,
                        expand: params === null || params === void 0 ? void 0 : params.expand,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Users.prototype.createUser = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: '/rest/api/2/user',
                    method: 'POST',
                    data: __assign({}, params),
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Users.prototype.deleteUser = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: '/rest/api/2/user',
                    method: 'DELETE',
                    params: {
                        accountId: params === null || params === void 0 ? void 0 : params.accountId,
                        username: params === null || params === void 0 ? void 0 : params.username,
                        key: params === null || params === void 0 ? void 0 : params.key,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Users.prototype.bulkGetUsers = function (params, callback) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_d) {
                request = {
                    url: '/rest/api/2/user/bulk',
                    method: 'GET',
                    params: {
                        startAt: params === null || params === void 0 ? void 0 : params.startAt,
                        maxResults: params === null || params === void 0 ? void 0 : params.maxResults,
                        username: (_a = params === null || params === void 0 ? void 0 : params.username) === null || _a === void 0 ? void 0 : _a.join(','),
                        key: (_b = params === null || params === void 0 ? void 0 : params.key) === null || _b === void 0 ? void 0 : _b.join(','),
                        accountId: (_c = params === null || params === void 0 ? void 0 : params.accountId) === null || _c === void 0 ? void 0 : _c.join(','),
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Users.prototype.getAccountIdsForUsers = function (params, callback) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_c) {
                request = {
                    url: '/rest/api/2/user/bulk/migration',
                    method: 'GET',
                    params: {
                        startAt: params === null || params === void 0 ? void 0 : params.startAt,
                        maxResults: params === null || params === void 0 ? void 0 : params.maxResults,
                        username: (_a = params === null || params === void 0 ? void 0 : params.username) === null || _a === void 0 ? void 0 : _a.join(','),
                        key: (_b = params === null || params === void 0 ? void 0 : params.key) === null || _b === void 0 ? void 0 : _b.join(','),
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Users.prototype.getUserDefaultColumns = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: '/rest/api/2/user/columns',
                    method: 'GET',
                    params: {
                        accountId: params === null || params === void 0 ? void 0 : params.accountId,
                        username: params === null || params === void 0 ? void 0 : params.username,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Users.prototype.setUserDefaultColumns = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: '/rest/api/2/user/columns',
                    method: 'PUT',
                    params: {
                        accountId: params === null || params === void 0 ? void 0 : params.accountId,
                    },
                    data: __assign(__assign({}, params), { accountId: undefined }),
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Users.prototype.resetUserDefaultColumns = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: '/rest/api/2/user/columns',
                    method: 'DELETE',
                    params: {
                        accountId: params === null || params === void 0 ? void 0 : params.accountId,
                        username: params === null || params === void 0 ? void 0 : params.username,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Users.prototype.getUserEmail = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: '/rest/api/2/user/email',
                    method: 'GET',
                    params: {
                        accountId: params === null || params === void 0 ? void 0 : params.accountId,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Users.prototype.getUserEmailBulk = function (params, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_b) {
                request = {
                    url: '/rest/api/2/user/email/bulk',
                    method: 'GET',
                    params: {
                        accountId: (_a = params === null || params === void 0 ? void 0 : params.accountId) === null || _a === void 0 ? void 0 : _a.join(','),
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Users.prototype.getUserGroups = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: '/rest/api/2/user/groups',
                    method: 'GET',
                    params: {
                        accountId: params === null || params === void 0 ? void 0 : params.accountId,
                        username: params === null || params === void 0 ? void 0 : params.username,
                        key: params === null || params === void 0 ? void 0 : params.key,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Users.prototype.getAllUsersDefault = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: '/rest/api/2/users',
                    method: 'GET',
                    params: {
                        startAt: params === null || params === void 0 ? void 0 : params.startAt,
                        maxResults: params === null || params === void 0 ? void 0 : params.maxResults,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Users.prototype.getAllUsers = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: '/rest/api/2/users/search',
                    method: 'GET',
                    params: {
                        startAt: params === null || params === void 0 ? void 0 : params.startAt,
                        maxResults: params === null || params === void 0 ? void 0 : params.maxResults,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    return Users;
}());
exports.Users = Users;
