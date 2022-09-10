"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClassNameKeys = void 0;
function getClassNameKeys(classNames) {
    return classNames.flatMap(function (cname) {
        switch (typeof cname) {
            case 'undefined':
                return '';
            case 'object':
                return Object.entries(cname)
                    // if cnameKeyValue equals to false, it will be filtered
                    .filter(function (_a) {
                    var _cnameKey = _a[0], cnameKeyValue = _a[1];
                    return cnameKeyValue;
                })
                    // array first element destructure
                    .map(function (_a) {
                    var key = _a[0];
                    return key;
                });
            case 'string':
                return cname.split(' ');
        }
        // remove empty classNames
    }).filter(function (cname) { return cname !== ''; });
}
exports.getClassNameKeys = getClassNameKeys;
//# sourceMappingURL=get_class_name_keys.js.map