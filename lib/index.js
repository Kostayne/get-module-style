"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGsm = exports.gs = void 0;
var get_class_name_keys_1 = require("./utils/get_class_name_keys");
function concatIntoStr(classes) {
    return classes.join(' ');
}
function gs() {
    var classNames = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classNames[_i] = arguments[_i];
    }
    var keys = (0, get_class_name_keys_1.getClassNameKeys)(classNames);
    return concatIntoStr(keys);
}
exports.gs = gs;
var defaultGsmOptions = {
    allowExternalClassNames: true,
};
function createGsm(styles, options) {
    if (options === void 0) { options = defaultGsmOptions; }
    if (!styles)
        throw 'There is no styles provided (null or undefined)';
    var closureStyles = styles;
    return function () {
        var classNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            classNames[_i] = arguments[_i];
        }
        var keys = (0, get_class_name_keys_1.getClassNameKeys)(classNames);
        var resultClassNames = [];
        for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
            var k = keys_1[_a];
            var moduleCname = closureStyles[k];
            if (moduleCname) {
                resultClassNames.push(moduleCname);
                continue;
            }
            if (options.allowExternalClassNames) {
                resultClassNames.push(k);
            }
        }
        return concatIntoStr(resultClassNames);
    };
}
exports.createGsm = createGsm;
//# sourceMappingURL=index.js.map