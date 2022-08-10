"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createModuleStylesConverter = void 0;
function createModuleStylesConverter(styles) {
    if (!styles)
        throw "There is no styles provided (null or undefined)";
    var closureStyles = styles;
    return function () {
        var classNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            classNames[_i] = arguments[_i];
        }
        var splitted = classNames.flatMap(function (cname) { return cname.split(' '); });
        var styled = splitted.map(function (val) { return closureStyles[val]; });
        return styled.join(' ');
    };
}
exports.createModuleStylesConverter = createModuleStylesConverter;
//# sourceMappingURL=index.js.map