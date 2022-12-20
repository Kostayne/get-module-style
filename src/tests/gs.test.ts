import { gs } from "../index";

describe('gs function test', () => {
	it('concats multiple class names provided in one string', () => {
		const res = gs('red big bold');
		expect(res).toBe('red big bold');
	});

	it('works with many strings', () => {
        const classNames = gs('text', 'red');
        expect(classNames).toBe('text red');
    });

    it('works with mixed types of providing classNames', () => {
        const classNames = gs('text', 'red big');
        expect(classNames).toBe('text red big');
    });

    it('works with object like { className: true }', () => {
        const classNames = gs('text', { red: false }, { big: true });
        expect(classNames).toBe('text big');
    });

    it('works with object like { className: undefined }', () => {
        const classNames = gs('text', { red: undefined }, { big: true });
        expect(classNames).toBe('text big');
    });

    it('works with object like { className: null }', () => {
        const classNames = gs('text', { red: null}, { big: true });
        expect(classNames).toBe('text big');
    });
});
