export function createModuleStylesConverter(styles) {
    if (!styles) throw "There is no styles provided (null or undefined)";
    const closureStyles = styles;
    
    return (classNames: string) => {
        const splitted = classNames.split(" ");
        const styled = splitted.map((val) => closureStyles[val]);

        return styled.join(" ");
    }
}