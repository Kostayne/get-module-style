"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createModuleStylesConverter = void 0;
function createModuleStylesConverter(styles) {
    if (!styles)
        throw "There is no styles provided (null or undefined)";
    var closureStyles = styles;
    return function (classNames) {
        var splitted = classNames.split(" ");
        var styled = splitted.map(function (val) { return closureStyles[val]; });
        return styled.join(" ");
    };
}
exports.createModuleStylesConverter = createModuleStylesConverter;
//# sourceMappingURL=index.js.map