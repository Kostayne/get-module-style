"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
describe('gs function test', function () {
    it('concats multiple class names provided in one string', function () {
        var res = (0, index_1.gs)('red big bold');
        expect(res).toBe('red big bold');
    });
    it('works with many strings', function () {
        var classNames = (0, index_1.gs)('text', 'red');
        expect(classNames).toBe('text red');
    });
    it('works with mixed types of providing classNames', function () {
        var classNames = (0, index_1.gs)('text', 'red big');
        expect(classNames).toBe('text red big');
    });
    it('works with object like { className: true }', function () {
        var classNames = (0, index_1.gs)('text', { red: false }, { big: true });
        expect(classNames).toBe('text big');
    });
});
//# sourceMappingURL=gs.test.js.map