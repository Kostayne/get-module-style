export function createModuleStylesConverter(styles?: Record<string, string>) {
    if (!styles) throw 'There is no styles provided (null or undefined)';
    const closureStyles = styles;

    return (...classNames: (string | Record<string, boolean>)[]) => {
        const splitted = classNames.flatMap(cname =>
            typeof cname === 'string'
                ? cname.split(' ')
                : Object.entries(cname)
                    .filter(([_key, value]) => value)
                    .map(([key]) => key),
        );
        const styled = splitted.map(val => closureStyles[val] ?? val);
        return styled.join(' ');
    };
}