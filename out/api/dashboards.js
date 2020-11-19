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
exports.Dashboards = void 0;
var Dashboards = /** @class */ (function () {
    function Dashboards(client) {
        this.client = client;
    }
    Dashboards.prototype.getAllDashboards = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: '/rest/api/2/dashboard',
                    method: 'GET',
                    params: {
                        filter: params === null || params === void 0 ? void 0 : params.filter,
                        startAt: params === null || params === void 0 ? void 0 : params.startAt,
                        maxResults: params === null || params === void 0 ? void 0 : params.maxResults,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Dashboards.prototype.createDashboard = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: '/rest/api/2/dashboard',
                    method: 'POST',
                    data: {
                        description: params === null || params === void 0 ? void 0 : params.description,
                        name: params === null || params === void 0 ? void 0 : params.name,
                        sharePermissions: params === null || params === void 0 ? void 0 : params.sharePermissions,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Dashboards.prototype.searchForDashboards = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: '/rest/api/2/dashboard/search',
                    method: 'GET',
                    params: {
                        dashboardName: params === null || params === void 0 ? void 0 : params.dashboardName,
                        accountId: params === null || params === void 0 ? void 0 : params.accountId,
                        owner: params === null || params === void 0 ? void 0 : params.owner,
                        groupname: params === null || params === void 0 ? void 0 : params.groupname,
                        projectId: params === null || params === void 0 ? void 0 : params.projectId,
                        orderBy: params === null || params === void 0 ? void 0 : params.orderBy,
                        startAt: params === null || params === void 0 ? void 0 : params.startAt,
                        maxResults: params === null || params === void 0 ? void 0 : params.maxResults,
                        expand: params === null || params === void 0 ? void 0 : params.expand,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Dashboards.prototype.getDashboardItemPropertyKeys = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/dashboard/" + params.dashboardId + "/items/" + params.itemId + "/properties",
                    method: 'GET',
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Dashboards.prototype.getDashboardItemProperty = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/dashboard/" + params.dashboardId + "/items/" + params.itemId + "/properties/" + params.propertyKey,
                    method: 'GET',
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Dashboards.prototype.setDashboardItemProperty = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/dashboard/" + params.dashboardId + "/items/" + params.itemId + "/properties/" + params.propertyKey,
                    method: 'PUT',
                    data: __assign(__assign({}, params), { dashboardId: undefined, itemId: undefined, propertyKey: undefined }),
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Dashboards.prototype.deleteDashboardItemProperty = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/dashboard/" + params.dashboardId + "/items/" + params.itemId + "/properties/" + params.propertyKey,
                    method: 'DELETE',
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Dashboards.prototype.getDashboard = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/dashboard/" + params.id,
                    method: 'GET',
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Dashboards.prototype.updateDashboard = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/dashboard/" + params.id,
                    method: 'PUT',
                    data: {
                        description: params === null || params === void 0 ? void 0 : params.description,
                        name: params === null || params === void 0 ? void 0 : params.name,
                        sharePermissions: params === null || params === void 0 ? void 0 : params.sharePermissions,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Dashboards.prototype.deleteDashboard = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/dashboard/" + params.id,
                    method: 'DELETE',
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Dashboards.prototype.copyDashboard = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/dashboard/" + params.id + "/copy",
                    method: 'POST',
                    data: {
                        description: params === null || params === void 0 ? void 0 : params.description,
                        name: params === null || params === void 0 ? void 0 : params.name,
                        sharePermissions: params === null || params === void 0 ? void 0 : params.sharePermissions,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    return Dashboards;
}());
exports.Dashboards = Dashboards;
