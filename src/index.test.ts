import { createModuleStylesConverter } from "./index";

it('works with list in a string', () => {
    // emulating module styles object
    const styles = {
        text: 'text_HASH',
        red: 'red_HASH',
        big: 'big_HASH',
    };

    // getStyle (gs)
    const gs = createModuleStylesConverter(styles);
    const classNames = gs('text red big');

    expect(classNames).toBe('text_HASH red_HASH big_HASH');
});

it('works with many strings', () => {
    // emulating module styles object
    const styles = {
        text: 'text_HASH',
        red: 'red_HASH',
        big: 'big_HASH',
    };

    // getStyle (gs)
    const gs = createModuleStylesConverter(styles);
    const classNames = gs('text', 'red');

    expect(classNames).toBe('text_HASH red_HASH');
});

it('works with mixed types of providing classNames', () => {
    // emulating module styles object
    const styles = {
        text: 'text_HASH',
        red: 'red_HASH',
        big: 'big_HASH',
    };

    // getStyle (gs)
    const gs = createModuleStylesConverter(styles);
    const classNames = gs('text', 'red big');

    expect(classNames).toBe('text_HASH red_HASH big_HASH');
});

it('throws exception when no styles provided', () => {
    expect(() => createModuleStylesConverter()).toThrow();
});

it('works with object like { className: true }', () => {
    // emulating module styles object
    const styles = {
        text: 'text_HASH',
        red: 'red_HASH',
        big: 'big_HASH',
    };

    // getStyle (gs)
    const gs = createModuleStylesConverter(styles);
    const classNames = gs('text', { red: false }, { big: true });

    expect(classNames).toBe('text_HASH big_HASH');
});

it('returns the original class name if it is not specified in the module', () => {
    // emulating module styles object
    const styles = {
        text: 'text_HASH',
        red: 'red_HASH',
        big: 'big_HASH',
    };

    // getStyle (gs)
    const gs = createModuleStylesConverter(styles);
    const classNames = gs('text', 'red', 'big', 'small', 'green');

    expect(classNames).toBe('text_HASH red_HASH big_HASH small green');
})

