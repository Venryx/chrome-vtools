export declare var bool: () => new (..._: any[]) => boolean;
export declare var int: () => new (..._: any[]) => number;
export declare var double: () => new (..._: any[]) => number;
export declare var string: () => new (..._: any[]) => string;
declare global  {
    function IsNaN(obj: any): boolean;
}
export declare function IsNaN(obj: any): boolean;
export declare function IsPrimitive(obj: any): boolean;
export declare function IsBool(obj: any): obj is boolean;
export declare function ToBool(boolStr: any): boolean;
export declare function IsObject(obj: any): obj is Object;
export declare function IsObjectOf<T>(obj: any): obj is T;
declare global  {
    function IsNumber(obj: any): obj is number;
}
export declare function IsNumber(obj: any, allowNumberObj?: boolean): obj is number;
declare global  {
    function IsNumberString(obj: any): boolean;
}
export declare function IsNumberString(obj: any): boolean;
export declare function IsInt(obj: any): obj is number;
export declare function ToInt(stringOrFloatVal: any): number;
export declare function IsDouble(obj: any): obj is number;
export declare function ToDouble(stringOrIntVal: any): number;
declare global  {
    function IsString(obj: any, allowStringObj?: boolean): boolean;
}
export declare function IsString(obj: any, allowStringObj?: boolean): obj is string;
export declare function ToString(val: any): string;
export declare function IsConstructor(obj: any): obj is new (..._) => any;
export {};
