import { LitElement } from "lit-element";
declare type SpinnerProps = {
    text?: string;
};
export declare class Spinner extends LitElement {
    text: string;
    constructor(props?: SpinnerProps);
    private _getSpinnerSvgTemplate;
    open(): void;
    close(): void;
    createRenderRoot(): this;
    render(): import("lit-element").TemplateResult;
    private _getStyleTagTemplate;
}
export {};
