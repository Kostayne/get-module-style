import { createGms } from "../index";

describe('gms function test', () => {
    it('returns module classNames by it\'s keys', () => {
        const styles = {
            text: 'text_HASH',
            red: 'red_HASH',
            big: 'big_HASH',
        };

        const gsm = createGms(styles);
        const classNames = gsm('text red big');

        expect(classNames).toBe('text_HASH red_HASH big_HASH');
    });

    it('throws exception when no styles provided', () => {
        expect(() => createGms(undefined)).toThrow();
    });

    it('allowExternalClassNames option works (true)', () => {
        const styles = {
            text: 'text_HASH',
            red: 'red_HASH',
            big: 'big_HASH',
        };

        const gsm = createGms(styles);
        const classNames = gsm('text', 'red', 'big', 'small', 'green');

        expect(classNames).toBe('text_HASH red_HASH big_HASH small green');
    });

    it('allowExternalClassNames option works (false)', () => {
        const styles = {
            text: 'text_HASH',
            red: 'red_HASH',
            big: 'big_HASH',
        };

        const gsm = createGms(styles, {
            allowExternalClassNames: false,
        });

        const classNames = gsm('text', 'red', 'big', 'small', 'green');

        expect(classNames).toBe('text_HASH red_HASH big_HASH');
    });
});
