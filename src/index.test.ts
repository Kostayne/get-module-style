import { createModuleStylesConverter } from "./index";

it("getting styles", () => {
    // emulating module styles object
    const styles = {
        text: "text_HASH",
        red: "red_HASH",
        big: "big_HASH"
    }

    // getStyle (gs)
    const gs = createModuleStylesConverter(styles);
    const classNames = gs("text red big");

    expect(classNames).toBe("text_HASH red_HASH big_HASH");
});

it("throws exeption when no styles provided", () => {
    expect(() => createModuleStylesConverter(null)).toThrow();
});