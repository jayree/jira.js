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
exports.Board = void 0;
var Board = /** @class */ (function () {
    function Board(client) {
        this.client = client;
    }
    Board.prototype.getAllBoards = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: '/rest/agile/1.0/board',
                    method: 'GET',
                    params: {
                        startAt: params === null || params === void 0 ? void 0 : params.startAt,
                        maxResults: params === null || params === void 0 ? void 0 : params.maxResults,
                        type: params === null || params === void 0 ? void 0 : params.type,
                        name: params === null || params === void 0 ? void 0 : params.name,
                        projectKeyOrId: params === null || params === void 0 ? void 0 : params.projectKeyOrId,
                        accountIdLocation: params === null || params === void 0 ? void 0 : params.accountIdLocation,
                        userkeyLocation: params === null || params === void 0 ? void 0 : params.userkeyLocation,
                        usernameLocation: params === null || params === void 0 ? void 0 : params.usernameLocation,
                        projectLocation: params === null || params === void 0 ? void 0 : params.projectLocation,
                        includePrivate: params === null || params === void 0 ? void 0 : params.includePrivate,
                        negateLocationFiltering: params === null || params === void 0 ? void 0 : params.negateLocationFiltering,
                        orderBy: params === null || params === void 0 ? void 0 : params.orderBy,
                        expand: params === null || params === void 0 ? void 0 : params.expand,
                        filterId: params === null || params === void 0 ? void 0 : params.filterId,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Board.prototype.createBoard = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: '/rest/agile/1.0/board',
                    method: 'POST',
                    data: __assign({}, params),
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Board.prototype.getBoardByFilterId = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/agile/1.0/board/filter/" + params.filterId,
                    method: 'GET',
                    params: {
                        startAt: params.startAt,
                        maxResults: params.maxResults,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Board.prototype.getBoard = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/agile/1.0/board/" + params.boardId,
                    method: 'GET',
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Board.prototype.deleteBoard = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/agile/1.0/board/" + params.boardId,
                    method: 'DELETE',
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Board.prototype.getIssuesForBacklog = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/agile/1.0/board/" + params.boardId + "/backlog",
                    method: 'GET',
                    params: {
                        startAt: params.startAt,
                        maxResults: params.maxResults,
                        jql: params.jql,
                        validateQuery: params.validateQuery,
                        fields: params.fields && params.fields.join(','),
                        expand: params.expand,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Board.prototype.getConfiguration = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/agile/1.0/board/" + params.boardId + "/configuration",
                    method: 'GET',
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Board.prototype.getEpics = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/agile/1.0/board/" + params.boardId + "/epic",
                    method: 'GET',
                    params: {
                        startAt: params.startAt,
                        maxResults: params.maxResults,
                        done: params.done,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Board.prototype.getIssuesWithoutEpic = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/agile/1.0/board/" + params.boardId + "/epic/none/issue",
                    method: 'GET',
                    params: {
                        startAt: params.startAt,
                        maxResults: params.maxResults,
                        jql: params.jql,
                        validateQuery: params.validateQuery,
                        fields: params.fields && params.fields.join(','),
                        expand: params.expand,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Board.prototype.getIssuesForEpic = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/agile/1.0/board/" + params.boardId + "/epic/" + params.epicId + "/issue",
                    method: 'GET',
                    params: {
                        startAt: params.startAt,
                        maxResults: params.maxResults,
                        jql: params.jql,
                        validateQuery: params.validateQuery,
                        fields: params.fields && params.fields.join(','),
                        expand: params.expand,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Board.prototype.getFeaturesForBoard = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/agile/1.0/board/" + params.boardId + "/features",
                    method: 'GET',
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Board.prototype.toggleFeatures = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/agile/1.0/board/" + params.boardId + "/features",
                    method: 'PUT',
                    data: params.body || __assign({}, params),
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Board.prototype.getIssuesForBoard = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/agile/1.0/board/" + params.boardId + "/issue",
                    method: 'GET',
                    params: {
                        startAt: params.startAt,
                        maxResults: params.maxResults,
                        jql: params.jql,
                        validateQuery: params.validateQuery,
                        fields: params.fields && params.fields.join(','),
                        expand: params.expand,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Board.prototype.moveIssuesToBoard = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/agile/1.0/board/" + params.boardId + "/issue",
                    method: 'POST',
                    data: __assign(__assign({}, params), { boardId: undefined }),
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Board.prototype.getProjects = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/agile/1.0/board/" + params.boardId + "/project",
                    method: 'GET',
                    params: {
                        startAt: params.startAt,
                        maxResults: params.maxResults,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Board.prototype.getProjectsFull = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/agile/1.0/board/" + params.boardId + "/project/full",
                    method: 'GET',
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Board.prototype.getBoardPropertyKeys = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/agile/1.0/board/" + params.boardId + "/properties",
                    method: 'GET',
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Board.prototype.getBoardProperty = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/agile/1.0/board/" + params.boardId + "/properties/" + params.propertyKey,
                    method: 'GET',
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Board.prototype.setBoardProperty = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/agile/1.0/board/" + params.boardId + "/properties/" + params.propertyKey,
                    method: 'PUT',
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Board.prototype.deleteBoardProperty = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/agile/1.0/board/" + params.boardId + "/properties/" + params.propertyKey,
                    method: 'DELETE',
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Board.prototype.getAllQuickFilters = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/agile/1.0/board/" + params.boardId + "/quickfilter",
                    method: 'GET',
                    params: {
                        startAt: params.startAt,
                        maxResults: params.maxResults,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Board.prototype.getQuickFilter = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/agile/1.0/board/" + params.boardId + "/quickfilter/" + params.quickFilterId,
                    method: 'GET',
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Board.prototype.getReportsForBoard = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/agile/1.0/board/" + params.boardId + "/reports",
                    method: 'GET',
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Board.prototype.getAllSprints = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/agile/1.0/board/" + params.boardId + "/sprint",
                    method: 'GET',
                    params: {
                        startAt: params.startAt,
                        maxResults: params.maxResults,
                        state: params.state,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Board.prototype.getIssuesForSprint = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/agile/1.0/board/" + params.boardId + "/sprint/" + params.sprintId + "/issue",
                    method: 'GET',
                    params: {
                        startAt: params.startAt,
                        maxResults: params.maxResults,
                        jql: params.jql,
                        validateQuery: params.validateQuery,
                        fields: params.fields && params.fields.join(','),
                        expand: params.expand,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Board.prototype.getAllVersions = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/agile/1.0/board/" + params.boardId + "/version",
                    method: 'GET',
                    params: {
                        startAt: params.startAt,
                        maxResults: params.maxResults,
                        released: params.released,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    return Board;
}());
exports.Board = Board;
