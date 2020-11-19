"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthentication = void 0;
var jwt = require("atlassian-jwt");
var url = require("url");
var oauth_1 = require("oauth");
var qs = require("qs");
exports.getAuthentication = function (config, request) {
    var _a, _b, _c, _d;
    if ((_a = config.authentication) === null || _a === void 0 ? void 0 : _a.jwt) {
        var _e = config.authentication.jwt, iss = _e.iss, secret = _e.secret, _f = _e.expiryTimeSeconds, expiryTimeSeconds = _f === void 0 ? 180 : _f;
        var pathname = url.parse(request.url || '').pathname || '';
        var nowInSeconds = Math.floor(Date.now() / 1000);
        var jwtToken = jwt.encode({
            iss: iss,
            iat: nowInSeconds,
            exp: nowInSeconds + expiryTimeSeconds,
            qsh: jwt.createQueryStringHash({
                method: request.method || 'get',
                pathname: pathname,
                query: request.params || {},
            }),
        }, secret);
        return "JWT " + jwtToken;
    }
    if ((_b = config.authentication) === null || _b === void 0 ? void 0 : _b.oauth1) {
        var oauthUrl = config.host + "/plugins/servlet/oauth/";
        var oauth = new oauth_1.OAuth(oauthUrl + "request-token", oauthUrl + "access-token", config.authentication.oauth1.consumerKey, config.authentication.oauth1.consumerSecret, '1.0', null, 'RSA-SHA1');
        return oauth.authHeader(config.host + request.url + "?" + qs.stringify(request.params), config.authentication.oauth1.tokenKey, config.authentication.oauth1.tokenSecret, request.method);
    }
    if ((_c = config.authentication) === null || _c === void 0 ? void 0 : _c.accessToken) {
        return "Bearer " + config.authentication.accessToken;
    }
    if ((_d = config.authentication) === null || _d === void 0 ? void 0 : _d.basic) {
        var _g = config.authentication.basic, username = _g.username, apiToken = _g.apiToken, password = _g.password;
        return "Basic " + Buffer.from(username + ":" + (apiToken || password)).toString('base64');
    }
    return undefined;
};
