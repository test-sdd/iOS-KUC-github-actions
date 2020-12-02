import { LitElement } from "lit-element";
declare type Column = {
    header?: {
        text?: string;
    };
    visible?: boolean;
};
declare type ReadOnlyTableProps = {
    className?: string;
    id?: string;
    label?: string;
    visible?: boolean;
    columns?: Column[];
    data?: string[][];
};
export declare class ReadOnlyTable extends LitElement {
    label: string;
    visible: boolean;
    columns: Column[];
    data: string[][];
    constructor(props?: ReadOnlyTableProps);
    private _updateVisible;
    createRenderRoot(): this;
    private _getColumnsTemplate;
    private _getDataTemplate;
    render(): import("lit-element").TemplateResult;
    private _getStyleTagTemplate;
}
export {};
