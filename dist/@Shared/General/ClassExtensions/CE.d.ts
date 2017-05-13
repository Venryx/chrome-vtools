interface Object {
    _AddItem: (name: string, value) => void;
}
interface Object {
    _AddFunction: (name: string, func: Function) => void;
}
interface Object {
    _AddGetterSetter: (name: string, getter: Function, setter: Function) => void;
}
interface Object {
    _AddFunction_Inline: Function;
}
interface Object {
    _AddGetter_Inline: Function;
}
interface Object {
    _AddSetter_Inline: Function;
}
interface Object {
    GetName(): string;
    SetName(name: string): Function;
}
interface Object {
    Extend: (obj) => void;
}
interface Object {
    VSet<T>(this: T, props: any, defineProp_info?: PropertyDescriptor): T;
    VSet<T>(this: T, propName: string, propValue: any, defineProp_info?: PropertyDescriptor): T;
}
interface Object {
    Extended<T, T2>(this: T, x: T2): T & T2;
}
interface Object {
    VAct<T>(this: T, func: (self: T) => any): T;
}
interface Object {
    As<T>(type: new (..._) => T): T;
}
interface Object {
    Including(...propNames: string[]): Object;
}
interface Object {
    Excluding(...propNames: string[]): Object;
}
declare let specialProps: string[];
interface Object {
    Props(excludeSpecialProps?: boolean): {
        index: number;
        name: string;
        value: any;
    }[];
}
interface Object {
    VKeys(excludeSpecialProps?: boolean): string[];
}
interface Object {
    VValues<T>(this: {
        [key: number]: T;
    } | {
        [key: string]: T;
    }, excludeSpecialProps?: boolean): T[];
}
interface Object {
    FA_Select<T, T2>(this: {
        [key: number]: T;
    } | {
        [key: string]: T;
    }, selectFunc?: (item: T, index?: number) => T2): T2[];
}
interface Object {
    FA_RemoveAt(index: number): any;
}
interface Object {
    FA_Add<T>(this: {
        [key: number]: T;
    } | {
        [key: string]: T;
    }, item: T): any;
}
interface Date {
    readonly MonthDate: Date;
}
declare function isLeapYear(year: any): boolean;
interface Date {
    isLeapYear: () => boolean;
}
declare function getDaysInMonth(year: any, month: any): number;
interface Date {
    getDaysInMonth: () => number;
}
interface Date {
    AddMonths: (value: number) => void;
}
interface Date {
    Clone: () => Date;
}
interface Error {
    readonly Stack: string;
}
