import { LitElement } from "lit-element";
declare type Item = {
    value?: string;
    label?: string;
};
declare type CheckboxProps = {
    className?: string;
    error?: string;
    id?: string;
    itemLayout?: "horizontal" | "vertical";
    label?: string;
    borderVisible?: boolean;
    disabled?: boolean;
    requiredIcon?: boolean;
    visible?: boolean;
    items?: Item[];
    value?: string[];
};
export declare class Checkbox extends LitElement {
    error: string;
    itemLayout: "horizontal" | "vertical";
    label: string;
    borderVisible: boolean;
    disabled: boolean;
    requiredIcon: boolean;
    visible: boolean;
    items: Item[];
    value: string[];
    private _inputEls;
    private _GUID;
    constructor(props?: CheckboxProps);
    private _generateGUID;
    private _updateVisible;
    private _getNewValue;
    private _handleChangeInput;
    private _handleFocusInput;
    private _handleBlurInput;
    private _dispatchCustomEvent;
    createRenderRoot(): this;
    private _getCheckboxIconSvgTemplate;
    private _getSVGStrokeValue;
    private _getItemTemplate;
    render(): import("lit-element").TemplateResult;
    updated(): void;
    private _getStyleTagTemplate;
}
export {};
