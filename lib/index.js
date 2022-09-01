"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createModuleStylesConverter = void 0;
function createModuleStylesConverter(styles) {
    if (!styles)
        throw 'There is no styles provided (null or undefined)';
    var closureStyles = styles;
    return function () {
        var classNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            classNames[_i] = arguments[_i];
        }
        var splitted = classNames.flatMap(function (cname) {
            return typeof cname === 'string'
                ? cname.split(' ')
                : Object.entries(cname)
                    .filter(function (_a) {
                    var _key = _a[0], value = _a[1];
                    return value;
                })
                    .map(function (_a) {
                    var key = _a[0];
                    return key;
                });
        });
        var styled = splitted.map(function (val) { var _a; return (_a = closureStyles[val]) !== null && _a !== void 0 ? _a : val; });
        return styled.join(' ');
    };
}
exports.createModuleStylesConverter = createModuleStylesConverter;
//# sourceMappingURL=index.js.map