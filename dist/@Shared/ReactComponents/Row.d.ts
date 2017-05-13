/// <reference types="react" />
import { BaseComponent } from "../BaseComponent";
import "../General/Globals";
import * as React from "react";
export default class Row extends BaseComponent<{
    style?;
} & React.HTMLProps<HTMLDivElement>, {}> {
    render(): JSX.Element;
}
export declare class RowLR extends BaseComponent<{
    splitAt?: number | string;
    height?: number;
    className?: string;
    style?;
    leftStyle?;
    rightStyle?;
} & React.HTMLProps<HTMLDivElement>, {}> {
    static defaultProps: {
        splitAt: string;
    };
    render(): JSX.Element;
}
