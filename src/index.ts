import { GsmOptions } from './types/gsm_options';
import { GsClassNameKeyType } from './types/gs_classname_key';
import { getClassNameKeys } from './utils/get_class_name_keys';

function concatIntoStr(classes: string[]) {
    return classes.join(' ');
}

export function gs(...classNames: GsClassNameKeyType[]) {
    const keys = getClassNameKeys(classNames);
    return concatIntoStr(keys);
}

const defaultGsmOptions: GsmOptions = {
    allowExternalClassNames: true,
};

export function createGms(styles: Record<string, string>, options: GsmOptions = defaultGsmOptions) {
    if (!styles) throw 'There is no styles provided (null or undefined)';
    const closureStyles = styles;

    return (...classNames: GsClassNameKeyType[]) => {
        const keys = getClassNameKeys(classNames);
        const resultClassNames: string[] = [];

        for (const k of keys) {
            const moduleCname = closureStyles[k];

            if (moduleCname) {
                resultClassNames.push(moduleCname);
                continue;
            }

            if (options.allowExternalClassNames) {
                resultClassNames.push(k);
            }
        }
        
        return concatIntoStr(resultClassNames);
    };
}
