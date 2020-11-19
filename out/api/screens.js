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
exports.Screens = void 0;
var Screens = /** @class */ (function () {
    function Screens(client) {
        this.client = client;
    }
    Screens.prototype.getScreensForAField = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/field/" + params.fieldId + "/screens",
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
    /**
     * @deprecated
     */
    Screens.prototype.getIssueTypeScreenSchemes = function (params, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_b) {
                request = {
                    url: '/rest/api/2/issuetypescreenscheme',
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
    /**
     * @deprecated
     */
    Screens.prototype.getIssueTypeScreenSchemeItems = function (params, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_b) {
                request = {
                    url: '/rest/api/2/issuetypescreenscheme/mapping',
                    method: 'GET',
                    params: {
                        startAt: params === null || params === void 0 ? void 0 : params.startAt,
                        maxResults: params === null || params === void 0 ? void 0 : params.maxResults,
                        issueTypeScreenSchemeId: (_a = params === null || params === void 0 ? void 0 : params.issueTypeScreenSchemeId) === null || _a === void 0 ? void 0 : _a.join(','),
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    /**
     * @deprecated
     */
    Screens.prototype.getIssueTypeScreenSchemesForProjects = function (params, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_b) {
                request = {
                    url: '/rest/api/2/issuetypescreenscheme/project',
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
    Screens.prototype.getAllScreens = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: '/rest/api/2/screens',
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
    Screens.prototype.addFieldToDefaultScreen = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/screens/addToDefault/" + params.fieldId,
                    method: 'POST',
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Screens.prototype.getAvailableScreenFields = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/screens/" + params.screenId + "/availableFields",
                    method: 'GET',
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Screens.prototype.getAllScreenTabs = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/screens/" + params.screenId + "/tabs",
                    method: 'GET',
                    params: {
                        projectKey: params.projectKey,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Screens.prototype.createScreenTab = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/screens/" + params.screenId + "/tabs",
                    method: 'POST',
                    data: {
                        id: params.id,
                        name: params.name,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Screens.prototype.updateScreenTab = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/screens/" + params.screenId + "/tabs/" + params.tabId,
                    method: 'PUT',
                    data: {
                        id: params.id,
                        name: params.name,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Screens.prototype.deleteScreenTab = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/screens/" + params.screenId + "/tabs/" + params.tabId,
                    method: 'DELETE',
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Screens.prototype.getAllScreenTabFields = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/screens/" + params.screenId + "/tabs/" + params.tabId + "/fields",
                    method: 'GET',
                    params: {
                        projectKey: params.projectKey,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Screens.prototype.addScreenTabField = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/screens/" + params.screenId + "/tabs/" + params.tabId + "/fields",
                    method: 'POST',
                    data: {
                        fieldId: params.fieldId,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Screens.prototype.removeScreenTabField = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/screens/" + params.screenId + "/tabs/" + params.tabId + "/fields/" + params.id,
                    method: 'DELETE',
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Screens.prototype.moveScreenTabField = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/screens/" + params.screenId + "/tabs/" + params.tabId + "/fields/" + params.id + "/move",
                    method: 'POST',
                    data: {
                        after: params.after,
                        position: params.position,
                    },
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    Screens.prototype.moveScreenTab = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = {
                    url: "/rest/api/2/screens/" + params.screenId + "/tabs/" + params.tabId + "/move/" + params.pos,
                    method: 'POST',
                };
                return [2 /*return*/, this.client.sendRequest(request, callback)];
            });
        });
    };
    /**
     * Returns a paginated list of screen schemes.
     * Only screen schemes used in classic projects are returned.
     * @deprecated
     * @param {Object} params The request parameters.
     * @param {Callback} callback The callback.
     */
    Screens.prototype.getAllScreenSchemes = function (params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.getScreenSchemes(params, callback)];
            });
        });
    };
    /**
     * Returns a paginated list of screen schemes.
     * Only screen schemes used in classic projects are returned.
     * @param {Object} params The request parameters.
     * @param {Callback} callback The callback.
     */
    Screens.prototype.getScreenSchemes = function (params, callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_b) {
                request = {
                    url: '/rest/api/2/screenscheme',
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
    return Screens;
}());
exports.Screens = Screens;
