export declare class Vector2i {
    constructor(x: number, y: number);
    x: number;
    y: number;
    Minus(other: Vector2i): Vector2i;
    Minus(otherX: number, otherY: number): Vector2i;
    Plus(other: Vector2i): Vector2i;
    Plus(otherX: number, otherY: number): Vector2i;
}
export declare function GetParents(dom: HTMLElement, topDown?: boolean): HTMLElement[];
export declare function GetSelfAndParents(dom: HTMLElement, topDown?: boolean): HTMLElement[];
export declare function GetOffset(dom: HTMLElement): Vector2i;
export declare function GetContentOffset(dom: HTMLElement, includePadding?: boolean): Vector2i;
export declare function GetScroll(dom: HTMLElement): Vector2i;
export declare function AddGlobalElement(html: string): void;
export declare function AddGlobalStyle(str: any): void;
export declare function StableSort(array: any, compare: (aItem, bItem, aIndex: number, bIndex: number) => number): any;
export declare function Compare(a: any, b: any, caseSensitive?: boolean): 0 | 1 | -1;
