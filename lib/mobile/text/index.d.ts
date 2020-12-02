import { LitElement } from "lit-element";
declare type MobileTextProps = {
    className?: string;
    error?: string;
    id?: string;
    label?: string;
    placeholder?: string;
    prefix?: string;
    suffix?: string;
    textAlign?: "left" | "right";
    value?: string;
    disabled?: boolean;
    requiredIcon?: boolean;
    visible?: boolean;
};
export declare class MobileText extends LitElement {
    error: string;
    label: string;
    placeholder: string;
    prefix: string;
    suffix: string;
    textAlign: "left" | "right";
    value: string;
    disabled: boolean;
    requiredIcon: boolean;
    visible: boolean;
    private _GUID;
    constructor(props?: MobileTextProps);
    private _generateGUID;
    private _updateVisible;
    private _handleFocusInput;
    private _handleChangeInput;
    private _dispatchCustomEvent;
    createRenderRoot(): this;
    render(): import("lit-element").TemplateResult;
    private _getStyleTagTemplate;
}
export {};
