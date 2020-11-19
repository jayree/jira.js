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
exports.Projects = void 0;
var Projects = /** @class */ (function () {
    function Projects(client) {
        this.client = client;
    }
    Projects.prototype.getAllProjects = function (params, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_b) {
                request = {
                    url: '/rest/api/2/project',
                    method: 'GET',
                    params: {
                        expand: params === null || params === void 0 ? void 0 : params.expand,
                        recent: params === null || params === void 0 ? void 0 : params.recent,
                        properties: (_a = params === null || params === void 0 ? void 0 : params.properties) === null || _a === void 0 ? void 0 : _a.join(','),
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Projects.prototype.createProject = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: '/rest/api/2/project',
                    method: 'POST',
                    data: {
                        key: params === null || params === void 0 ? void 0 : params.key,
                        name: params === null || params === void 0 ? void 0 : params.name,
                        projectTypeKey: params === null || params === void 0 ? void 0 : params.projectTypeKey,
                        projectTemplateKey: params === null || params === void 0 ? void 0 : params.projectTemplateKey,
                        description: params === null || params === void 0 ? void 0 : params.description,
                        lead: params === null || params === void 0 ? void 0 : params.lead,
                        leadAccountId: params === null || params === void 0 ? void 0 : params.leadAccountId,
                        url: params === null || params === void 0 ? void 0 : params.url,
                        assigneeType: params === null || params === void 0 ? void 0 : params.assigneeType,
                        avatarId: params === null || params === void 0 ? void 0 : params.avatarId,
                        issueSecurityScheme: params === null || params === void 0 ? void 0 : params.issueSecurityScheme,
                        permissionScheme: params === null || params === void 0 ? void 0 : params.permissionScheme,
                        notificationScheme: params === null || params === void 0 ? void 0 : params.notificationScheme,
                        categoryId: params === null || params === void 0 ? void 0 : params.categoryId,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Projects.prototype.getProjectsPaginated = function (params, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_b) {
                request = {
                    url: '/rest/api/2/project/search',
                    method: 'GET',
                    params: {
                        startAt: params === null || params === void 0 ? void 0 : params.startAt,
                        maxResults: params === null || params === void 0 ? void 0 : params.maxResults,
                        orderBy: params === null || params === void 0 ? void 0 : params.orderBy,
                        query: params === null || params === void 0 ? void 0 : params.query,
                        typeKey: params === null || params === void 0 ? void 0 : params.typeKey,
                        categoryId: params === null || params === void 0 ? void 0 : params.categoryId,
                        searchBy: params === null || params === void 0 ? void 0 : params.searchBy,
                        action: params === null || params === void 0 ? void 0 : params.action,
                        expand: params === null || params === void 0 ? void 0 : params.expand,
                        status: (_a = params === null || params === void 0 ? void 0 : params.status) === null || _a === void 0 ? void 0 : _a.join(','),
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Projects.prototype.getProject = function (params, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_b) {
                request = {
                    url: "/rest/api/2/project/" + params.projectIdOrKey,
                    method: 'GET',
                    params: {
                        expand: params === null || params === void 0 ? void 0 : params.expand,
                        properties: (_a = params === null || params === void 0 ? void 0 : params.properties) === null || _a === void 0 ? void 0 : _a.join(','),
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Projects.prototype.updateProject = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/project/" + params.projectIdOrKey,
                    method: 'PUT',
                    params: {
                        expand: params === null || params === void 0 ? void 0 : params.expand,
                    },
                    data: {
                        key: params === null || params === void 0 ? void 0 : params.key,
                        name: params === null || params === void 0 ? void 0 : params.name,
                        projectTypeKey: params === null || params === void 0 ? void 0 : params.projectTypeKey,
                        projectTemplateKey: params === null || params === void 0 ? void 0 : params.projectTemplateKey,
                        description: params === null || params === void 0 ? void 0 : params.description,
                        lead: params === null || params === void 0 ? void 0 : params.lead,
                        leadAccountId: params === null || params === void 0 ? void 0 : params.leadAccountId,
                        url: params === null || params === void 0 ? void 0 : params.url,
                        assigneeType: params === null || params === void 0 ? void 0 : params.assigneeType,
                        avatarId: params === null || params === void 0 ? void 0 : params.avatarId,
                        issueSecurityScheme: params === null || params === void 0 ? void 0 : params.issueSecurityScheme,
                        permissionScheme: params === null || params === void 0 ? void 0 : params.permissionScheme,
                        notificationScheme: params === null || params === void 0 ? void 0 : params.notificationScheme,
                        categoryId: params === null || params === void 0 ? void 0 : params.categoryId,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Projects.prototype.deleteProject = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/project/" + params.projectIdOrKey,
                    method: 'DELETE',
                    params: {
                        enableUndo: params === null || params === void 0 ? void 0 : params.enableUndo,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Projects.prototype.deleteProjectAsynchronously = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/project/" + params.projectIdOrKey + "/delete",
                    method: 'POST',
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Projects.prototype.restoreDeletedProject = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/project/" + params.projectIdOrKey + "/restore",
                    method: 'POST',
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Projects.prototype.getAllStatusesForProject = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/project/" + params.projectIdOrKey + "/statuses",
                    method: 'GET',
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Projects.prototype.updateProjectType = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/project/" + params.projectIdOrKey + "/type/" + params.newProjectTypeKey,
                    method: 'PUT',
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Projects.prototype.getProjectIssueTypeHierarchy = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/project/" + params.projectId + "/hierarchy",
                    method: 'GET',
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Projects.prototype.getProjectNotificationScheme = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/project/" + params.projectKeyOrId + "/notificationscheme",
                    method: 'GET',
                    params: {
                        expand: params === null || params === void 0 ? void 0 : params.expand,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    return Projects;
}());
exports.Projects = Projects;
