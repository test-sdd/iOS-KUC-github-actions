import { LitElement } from "lit-element";
declare type ButtonProps = {
    className?: string;
    id?: string;
    text?: string;
    type?: "normal" | "submit" | "alert";
    disabled?: boolean;
    visible?: boolean;
};
export declare class Button extends LitElement {
    text: string;
    type: string;
    disabled: boolean;
    visible: boolean;
    constructor(props?: ButtonProps);
    private _updateVisible;
    private _handleClickButton;
    private _dispatchCustomEvent;
    createRenderRoot(): this;
    private _getButtonColorType;
    render(): import("lit-element").TemplateResult;
    private _getStyleTagTemplate;
}
export {};
