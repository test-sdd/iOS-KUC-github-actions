import { LitElement } from "lit-element";
declare type MobileButtonProps = {
    className?: string;
    id?: string;
    text?: string;
    type?: "normal" | "submit";
    disabled?: boolean;
    visible?: boolean;
};
export declare class MobileButton extends LitElement {
    text: string;
    type: string;
    disabled: boolean;
    visible: boolean;
    constructor(props?: MobileButtonProps);
    private _updateVisible;
    private _handleClickButton;
    private _dispatchCustomEvent;
    createRenderRoot(): this;
    private _getButtonColorType;
    render(): import("lit-element").TemplateResult;
    private _getStyleTagTemplate;
}
export {};
