import { LitElement } from "lit-element";
declare type DialogProps = {
    title?: string;
    content?: string | HTMLElement;
    footer?: string | HTMLElement;
};
export declare class Dialog extends LitElement {
    title: string;
    content: string | HTMLElement;
    footer: string | HTMLElement;
    private _dialogEl;
    private _focusableElements;
    private _triggeredElement;
    constructor(props?: DialogProps);
    open(): void;
    close(): void;
    createRenderRoot(): this;
    render(): import("lit-element").TemplateResult;
    private _handleFocusFirstDummy;
    private _handleFocusLastDummy;
    private _getCloseButtonSvgTemplate;
    private _getStyleTagTemplate;
}
export {};
