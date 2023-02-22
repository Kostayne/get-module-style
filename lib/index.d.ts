import { GsmOptions } from './types/gms_options';
import { GsClassNameKeyType } from './types/gs_classname_key';
export declare function gs(...classNames: GsClassNameKeyType[]): string;
export declare function createGms(styles: Record<string, string>, options?: GsmOptions): (...classNames: GsClassNameKeyType[]) => string;
