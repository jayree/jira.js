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
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUndefinedElements = void 0;
function removeUndefinedFromArray(array) {
    return array.filter(function (element) { return element !== undefined; });
}
function removeUndefinedFromObject(object) {
    return Object.entries(object).reduce(function (accumulator, current) {
        var _a, _b;
        var key = current[0], value = current[1];
        if (value === undefined) {
            return accumulator;
        }
        var isObject = typeof value === 'object';
        var isNull = value === null;
        var isSet = value instanceof Set;
        var isMap = value instanceof Map;
        if (!isNull
            && isObject
            && !isSet
            && !isMap) {
            return __assign(__assign({}, accumulator), (_a = {}, _a[key] = Array.isArray(value)
                ? removeUndefinedFromArray(value)
                : removeUndefinedFromObject(value), _a));
        }
        return __assign(__assign({}, accumulator), (_b = {}, _b[key] = value, _b));
    }, {});
}
function removeUndefinedElements(o) {
    switch (typeof o) {
        case 'object':
            if (Array.isArray(o)) {
                return removeUndefinedFromArray(o);
            }
            return removeUndefinedFromObject(o);
        default:
            return o;
    }
}
exports.removeUndefinedElements = removeUndefinedElements;
