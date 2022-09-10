import { GsClassNameKeyType } from "../types/gs_classname_key";

export function getClassNameKeys(classNames: GsClassNameKeyType[]) {
    return classNames.flatMap(cname => {
        switch (typeof cname) {
            case 'undefined':
                return '';

            case 'object':
                return Object.entries(cname)
                    // if cnameKeyValue equals to false, it will be filtered
                    .filter(([_cnameKey, cnameKeyValue]) => cnameKeyValue)

                    // array first element destructure
                    .map(([key]) => key);

            case 'string':
                return cname.split(' ');
        }
    // remove empty classNames
    }).filter(cname => cname !== '');
}
