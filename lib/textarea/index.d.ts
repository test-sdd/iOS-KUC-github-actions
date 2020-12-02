import { LitElement } from "lit-element";
declare type TextAreaProps = {
    className?: string;
    error?: string;
    id?: string;
    label?: string;
    placeholder?: string;
    value?: string;
    disabled?: boolean;
    requiredIcon?: boolean;
    visible?: boolean;
};
export declare class TextArea extends LitElement {
    error: string;
    label: string;
    placeholder: string;
    value: string;
    disabled: boolean;
    requiredIcon: boolean;
    visible: boolean;
    private _GUID;
    constructor(props?: TextAreaProps);
    private _generateGUID;
    private _updateVisible;
    private _handleFocusTextarea;
    private _handleChangeTextarea;
    private _dispatchCustomEvent;
    createRenderRoot(): this;
    render(): import("lit-element").TemplateResult;
    private _getStyleTagTemplate;
}
export {};
