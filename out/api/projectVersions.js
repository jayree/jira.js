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
exports.ProjectVersions = void 0;
var ProjectVersions = /** @class */ (function () {
    function ProjectVersions(client) {
        this.client = client;
    }
    ProjectVersions.prototype.getProjectVersionsPaginated = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/project/" + params.projectIdOrKey + "/version",
                    method: 'GET',
                    params: {
                        startAt: params === null || params === void 0 ? void 0 : params.startAt,
                        maxResults: params === null || params === void 0 ? void 0 : params.maxResults,
                        orderBy: params === null || params === void 0 ? void 0 : params.orderBy,
                        query: params === null || params === void 0 ? void 0 : params.query,
                        status: params === null || params === void 0 ? void 0 : params.status,
                        expand: params === null || params === void 0 ? void 0 : params.expand,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    ProjectVersions.prototype.getProjectVersions = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/project/" + params.projectIdOrKey + "/versions",
                    method: 'GET',
                    params: {
                        expand: params === null || params === void 0 ? void 0 : params.expand,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    ProjectVersions.prototype.createVersion = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: '/rest/api/2/version',
                    method: 'POST',
                    data: {
                        expand: params === null || params === void 0 ? void 0 : params.expand,
                        self: params === null || params === void 0 ? void 0 : params.self,
                        id: params === null || params === void 0 ? void 0 : params.id,
                        description: params === null || params === void 0 ? void 0 : params.description,
                        name: params === null || params === void 0 ? void 0 : params.name,
                        archived: params === null || params === void 0 ? void 0 : params.archived,
                        released: params === null || params === void 0 ? void 0 : params.released,
                        startDate: params === null || params === void 0 ? void 0 : params.startDate,
                        releaseDate: params === null || params === void 0 ? void 0 : params.releaseDate,
                        overdue: params === null || params === void 0 ? void 0 : params.overdue,
                        userStartDate: params === null || params === void 0 ? void 0 : params.userStartDate,
                        userReleaseDate: params === null || params === void 0 ? void 0 : params.userReleaseDate,
                        project: params === null || params === void 0 ? void 0 : params.project,
                        projectId: params === null || params === void 0 ? void 0 : params.projectId,
                        moveUnfixedIssuesTo: params === null || params === void 0 ? void 0 : params.moveUnfixedIssuesTo,
                        operations: params === null || params === void 0 ? void 0 : params.operations,
                        issuesStatusForFixVersion: params === null || params === void 0 ? void 0 : params.issuesStatusForFixVersion,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    ProjectVersions.prototype.getVersion = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/version/" + params.id,
                    method: 'GET',
                    params: {
                        expand: params === null || params === void 0 ? void 0 : params.expand,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    ProjectVersions.prototype.updateVersion = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/version/" + params.id,
                    method: 'PUT',
                    data: {
                        expand: params === null || params === void 0 ? void 0 : params.expand,
                        self: params === null || params === void 0 ? void 0 : params.self,
                        id: params === null || params === void 0 ? void 0 : params.id,
                        description: params === null || params === void 0 ? void 0 : params.description,
                        name: params === null || params === void 0 ? void 0 : params.name,
                        archived: params === null || params === void 0 ? void 0 : params.archived,
                        released: params === null || params === void 0 ? void 0 : params.released,
                        startDate: params === null || params === void 0 ? void 0 : params.startDate,
                        releaseDate: params === null || params === void 0 ? void 0 : params.releaseDate,
                        overdue: params === null || params === void 0 ? void 0 : params.overdue,
                        userStartDate: params === null || params === void 0 ? void 0 : params.userStartDate,
                        userReleaseDate: params === null || params === void 0 ? void 0 : params.userReleaseDate,
                        project: params === null || params === void 0 ? void 0 : params.project,
                        projectId: params === null || params === void 0 ? void 0 : params.projectId,
                        moveUnfixedIssuesTo: params === null || params === void 0 ? void 0 : params.moveUnfixedIssuesTo,
                        operations: params === null || params === void 0 ? void 0 : params.operations,
                        issuesStatusForFixVersion: params === null || params === void 0 ? void 0 : params.issuesStatusForFixVersion,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    ProjectVersions.prototype.deleteVersion = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/version/" + params.id,
                    method: 'DELETE',
                    params: {
                        moveFixIssuesTo: params === null || params === void 0 ? void 0 : params.moveFixIssuesTo,
                        moveAffectedIssuesTo: params === null || params === void 0 ? void 0 : params.moveAffectedIssuesTo,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    ProjectVersions.prototype.mergeVersions = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/version/" + params.id + "/mergeto/" + params.moveIssuesTo,
                    method: 'PUT',
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    ProjectVersions.prototype.moveVersion = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/version/" + params.id + "/move",
                    method: 'POST',
                    data: {
                        after: params === null || params === void 0 ? void 0 : params.after,
                        position: params === null || params === void 0 ? void 0 : params.position,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    ProjectVersions.prototype.getVersionsRelatedIssuesCount = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/version/" + params.id + "/relatedIssueCounts",
                    method: 'GET',
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    ProjectVersions.prototype.deleteAndReplaceVersion = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/version/" + params.id + "/removeAndSwap",
                    method: 'POST',
                    data: {
                        moveFixIssuesTo: params === null || params === void 0 ? void 0 : params.moveFixIssuesTo,
                        moveAffectedIssuesTo: params === null || params === void 0 ? void 0 : params.moveAffectedIssuesTo,
                        customFieldReplacementList: params === null || params === void 0 ? void 0 : params.customFieldReplacementList,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    ProjectVersions.prototype.getVersionsUnresolvedIssuesCount = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/version/" + params.id + "/unresolvedIssueCount",
                    method: 'GET',
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    return ProjectVersions;
}());
exports.ProjectVersions = ProjectVersions;
