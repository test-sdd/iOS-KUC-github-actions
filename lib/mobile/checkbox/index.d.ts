import { LitElement } from "lit-element";
declare type Item = {
    value?: string;
    label?: string;
};
declare type MobileCheckboxProps = {
    className?: string;
    error?: string;
    id?: string;
    label?: string;
    borderVisible?: boolean;
    disabled?: boolean;
    requiredIcon?: boolean;
    visible?: boolean;
    items?: Item[];
    value?: string[];
};
export declare class MobileCheckbox extends LitElement {
    error: string;
    label: string;
    borderVisible: boolean;
    disabled: boolean;
    requiredIcon: boolean;
    visible: boolean;
    items: Item[];
    value: string[];
    private _inputEls;
    private _GUID;
    constructor(props?: MobileCheckboxProps);
    private _generateGUID;
    private _updateVisible;
    private _getNewValue;
    private _handleChangeInput;
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
