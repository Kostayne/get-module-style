"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
describe('gsm function test', function () {
    it('returns module classNames by it\'s keys', function () {
        var styles = {
            text: 'text_HASH',
            red: 'red_HASH',
            big: 'big_HASH',
        };
        var gsm = (0, index_1.createGsm)(styles);
        var classNames = gsm('text red big');
        expect(classNames).toBe('text_HASH red_HASH big_HASH');
    });
    it('throws exception when no styles provided', function () {
        expect(function () { return (0, index_1.createGsm)(undefined); }).toThrow();
    });
    it('allowExternalClassNames option works (true)', function () {
        var styles = {
            text: 'text_HASH',
            red: 'red_HASH',
            big: 'big_HASH',
        };
        var gsm = (0, index_1.createGsm)(styles);
        var classNames = gsm('text', 'red', 'big', 'small', 'green');
        expect(classNames).toBe('text_HASH red_HASH big_HASH small green');
    });
    it('allowExternalClassNames option works (false)', function () {
        var styles = {
            text: 'text_HASH',
            red: 'red_HASH',
            big: 'big_HASH',
        };
        var gsm = (0, index_1.createGsm)(styles, {
            allowExternalClassNames: false,
        });
        var classNames = gsm('text', 'red', 'big', 'small', 'green');
        expect(classNames).toBe('text_HASH red_HASH big_HASH');
    });
});
//# sourceMappingURL=gsm.test.js.map