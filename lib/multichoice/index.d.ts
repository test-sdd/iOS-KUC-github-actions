import { LitElement } from "lit-element";
declare type Item = {
    label?: string;
    value?: string;
};
declare type MultiChoiceProps = {
    className?: string;
    error?: string;
    id?: string;
    label?: string;
    value?: string[];
    disabled?: boolean;
    requiredIcon?: boolean;
    visible?: boolean;
    items?: Item[];
};
export declare class MultiChoice extends LitElement {
    error: string;
    label: string;
    value: string[];
    disabled: boolean;
    requiredIcon: boolean;
    visible: boolean;
    items: Item[];
    private _menuEl;
    private _labelEl;
    private _itemsEl;
    private _GUID;
    constructor(props?: MultiChoiceProps);
    render(): import("lit-element").TemplateResult;
    createRenderRoot(): this;
    private _initProps;
    private _generateGUID;
    private _updateVisible;
    private _updateContainerWidth;
    updated(): void;
    private _handleMousedownMultiChoiceItem;
    private _handleMouseOverMultiChoiceItem;
    private _handleMouseLeaveMultiChoiceItem;
    private _handleKeyDownMultiChoice;
    private _getMultiChoiceCheckedIconSvgTemplate;
    private _getMenuItemTemplate;
    private _getStyleTagTemplate;
    private _setActiveDescendant;
    private _handleChangeValue;
    private _getNewValue;
    private _dispatchCustomEvent;
}
export {};
