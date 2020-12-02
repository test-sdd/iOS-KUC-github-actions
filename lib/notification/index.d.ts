import { LitElement } from "lit-element";
declare type NotificationProps = {
    className?: string;
    text?: string;
    type?: "info" | "danger" | "success";
};
export declare class Notification extends LitElement {
    text: string;
    type: "info" | "danger" | "success";
    constructor(props?: NotificationProps);
    private _animationFinished;
    private _handleClickCloseButton;
    private _getCloseButtonColor;
    private _getCloseButtonSvgTemplate;
    createRenderRoot(): this;
    open(): void;
    close(): void;
    firstUpdated(): void;
    render(): import("lit-element").TemplateResult;
    private _getStyleTagTemplate;
}
export {};
