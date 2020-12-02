import { LitElement } from "lit-element";
declare type Item = {
    value?: string;
    label?: string;
};
declare type RadioButtonProps = {
    className?: string;
    error?: string;
    id?: string;
    itemLayout?: string;
    label?: string;
    value?: string;
    borderVisible?: boolean;
    disabled?: boolean;
    requiredIcon?: boolean;
    visible?: boolean;
    items?: Item[];
};
export declare class RadioButton extends LitElement {
    error: string;
    itemLayout: string;
    label: string;
    value: string;
    borderVisible: boolean;
    disabled: boolean;
    requiredIcon: boolean;
    visible: boolean;
    items: Item[];
    private _inputEls;
    private _GUID;
    constructor(props?: RadioButtonProps);
    private _generateGUID;
    private _updateVisible;
    private _handleChangeInput;
    private _handleFocusInput;
    private _handleBlurInput;
    private _dispatchCustomEvent;
    createRenderRoot(): this;
    private _getRadioIconSvgTemplate;
    private _getItemTemplate;
    render(): import("lit-element").TemplateResult;
    updated(): void;
    private _getStyleTagTemplate;
}
export {};
