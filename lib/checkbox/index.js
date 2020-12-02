var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, property, queryAll, svg } from "lit-element";
import { v4 as uuid } from "uuid";
export class Checkbox extends LitElement {
    constructor(props) {
        super();
        this.error = "";
        this.itemLayout = "horizontal";
        this.label = "";
        this.borderVisible = true;
        this.disabled = false;
        this.requiredIcon = false;
        this.visible = true;
        this.items = [];
        this.value = [];
        this._GUID = this._generateGUID();
        if (!props) {
            return;
        }
        this.className =
            props.className !== undefined ? props.className : this.className;
        this.error = props.error !== undefined ? props.error : this.error;
        this.id = props.id !== undefined ? props.id : this.id;
        this.itemLayout =
            props.itemLayout !== undefined ? props.itemLayout : this.itemLayout;
        this.label = props.label !== undefined ? props.label : this.label;
        this.borderVisible =
            props.borderVisible !== undefined
                ? props.borderVisible
                : this.borderVisible;
        this.disabled =
            props.disabled !== undefined ? props.disabled : this.disabled;
        this.requiredIcon =
            props.requiredIcon !== undefined ? props.requiredIcon : this.requiredIcon;
        this.visible = props.visible !== undefined ? props.visible : this.visible;
        this.items = props.items !== undefined ? props.items : this.items;
        this.value = props.value !== undefined ? props.value : this.value;
    }
    _generateGUID() {
        return uuid();
    }
    _updateVisible() {
        if (!this.visible) {
            this.setAttribute("hidden", "");
        }
        else {
            this.removeAttribute("hidden");
        }
    }
    _getNewValue(value) {
        if (this.value.every(val => val !== value)) {
            return [...this.value, value];
        }
        return this.value.filter(val => val !== value);
    }
    _handleChangeInput(event) {
        event.stopPropagation();
        const inputEl = event.target;
        const value = inputEl.value;
        const oldValue = this.value;
        const newValue = this._getNewValue(value);
        this.value = newValue;
        const detail = { value: newValue, oldValue: oldValue };
        this._dispatchCustomEvent("change", detail);
    }
    _handleFocusInput(event) {
        const inputEl = event.target;
        const menuEl = inputEl.parentNode;
        menuEl.setAttribute("focused", "");
    }
    _handleBlurInput(event) {
        const inputEl = event.target;
        const menuEl = inputEl.parentNode;
        menuEl.removeAttribute("focused");
    }
    _dispatchCustomEvent(eventName, detail) {
        const event = new CustomEvent(eventName, {
            detail,
            bubbles: true,
            composed: true
        });
        return this.dispatchEvent(event);
    }
    createRenderRoot() {
        return this;
    }
    _getCheckboxIconSvgTemplate(disabled, checked) {
        return svg `
    <svg
      class="kuc-checkbox__group__select-menu__item__label__icon"
      width='21'
      height='21'
      viewBox='0 0 21 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='1'
        y='1'
        width='19'
        height='19'
        rx='1'
        fill='white'
        stroke='${this._getSVGStrokeValue(disabled, checked)}'
        stroke-width='2'/>
      ${checked
            ? svg `<path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M5 11L6.5 9L9.5 11.5L14.5 6L16 7.5L9.5 14.5L5 11Z'
            fill='${disabled ? "#d8d8d8" : "#3498db"}'/>`
            : ""}
    </svg>
  `;
    }
    _getSVGStrokeValue(disabled, checked) {
        if (disabled)
            return "#d8d8d8";
        if (checked)
            return "#3498db";
        return "#d8d8d8";
    }
    _getItemTemplate(item, index) {
        return html `
      <div
        class="kuc-checkbox__group__select-menu__item"
        itemLayout="${this.itemLayout}"
      >
        <input
          type="checkbox"
          aria-describedby="${this._GUID}-error"
          aria-required=${this.requiredIcon}
          id="${this._GUID}-item-${index}"
          class="kuc-checkbox__group__select-menu__item__input"
          name="${this._GUID}-group"
          value=${item.value !== undefined ? item.value : ""}
          ?disabled="${this.disabled}"
          @change="${this._handleChangeInput}"
          @focus="${this._handleFocusInput}"
          @blur="${this._handleBlurInput}"
        />
        <label
          for="${this._GUID}-item-${index}"
          class="kuc-checkbox__group__select-menu__item__label"
          >${this._getCheckboxIconSvgTemplate(this.disabled, item.value !== undefined
            ? this.value.some(val => val === item.value)
            : false)}${item.label === undefined ? item.value : item.label}
        </label>
      </div>
    `;
    }
    render() {
        this._updateVisible();
        return html `
      ${this._getStyleTagTemplate()}
      <fieldset class="kuc-checkbox__group">
        <legend class="kuc-checkbox__group__label" ?hidden="${!this.label}">
          <span class="kuc-checkbox__group__label__text">${this.label}</span
          ><!--
          --><span
            class="kuc-checkbox__group__label__required-icon"
            ?hidden="${!this.requiredIcon}"
            >*</span
          >
        </legend>
        <div
          class="kuc-checkbox__group__select-menu"
          ?borderVisible=${this.borderVisible}
          itemLayout="${this.itemLayout}"
        >
          ${this.items.map((item, index) => this._getItemTemplate(item, index))}
        </div>
        <div
          class="kuc-checkbox__error"
          role="alert"
          id="${this._GUID}-error"
          ?hidden="${!this.error}"
        >
          ${this.error}
        </div>
      </fieldset>
    `;
    }
    updated() {
        this._inputEls.forEach((inputEl) => {
            inputEl.checked = this.value.indexOf(inputEl.value) > -1;
        });
    }
    _getStyleTagTemplate() {
        return html `
      <style>
        kuc-checkbox,
        kuc-checkbox *,
        :lang(en) kuc-checkbox,
        :lang(en) kuc-checkbox * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-checkbox,
        :lang(ja) kuc-checkbox * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-checkbox,
        :lang(zh) kuc-checkbox * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-checkbox {
          font-size: 14px;
          color: #333333;
          display: inline-block;
          vertical-align: top;
        }
        kuc-checkbox[hidden] {
          display: none;
        }
        .kuc-checkbox__group {
          border: none;
          padding: 0px;
          height: auto;
          display: inline-block;
        }
        .kuc-checkbox__group__label {
          display: inline-block;
          padding: 4px 0 8px 0;
          white-space: nowrap;
        }
        .kuc-checkbox__group__label[hidden] {
          display: none;
        }
        .kuc-checkbox__group__label__required-icon {
          font-size: 20px;
          vertical-align: -3px;
          color: #e74c3c;
          margin-left: 4px;
          line-height: 1;
        }
        .kuc-checkbox__group__label__required-icon[hidden] {
          display: none;
        }
        .kuc-checkbox__group__select-menu[itemLayout="vertical"] {
          min-width: 233px;
        }
        .kuc-checkbox__group__select-menu[borderVisible] {
          border-color: #e3e7e8;
          border-width: 1px;
          border-style: solid;
          padding: 4px 0 0 4px;
        }
        .kuc-checkbox__group__select-menu__item {
          margin-bottom: 4px;
          margin-right: 16px;
          padding: 4px;
          border: 1px solid transparent;
          position: relative;
          white-space: normal;
          word-wrap: normal;
          display: inline-block;
          height: 24px;
          line-height: 24px;
        }
        .kuc-checkbox__group__select-menu__item[itemLayout="vertical"] {
          display: block;
        }
        .kuc-checkbox__group__select-menu__item[focused] {
          border: 1px solid #3498db;
        }
        .kuc-checkbox__group__select-menu__item__input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
        }
        .kuc-checkbox__group__select-menu__item__input:hover
          + .kuc-checkbox__group__select-menu__item__label {
          color: #666666;
        }
        .kuc-checkbox__group__select-menu__item__label__icon {
          position: absolute;
          top: 50%;
          left: -30px;
          box-sizing: border-box;
          margin-top: -11px;
          width: 21px;
          height: 21px;
          box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;
          content: "";
        }
        .kuc-checkbox__group__select-menu__item__input[disabled]
          + .kuc-checkbox__group__select-menu__item__label {
          color: #888888;
          cursor: not-allowed;
        }
        .kuc-checkbox__group__select-menu__item__label {
          cursor: pointer;
          position: relative;
          margin-left: 32px;
          display: inline-block;
          vertical-align: middle;
          white-space: nowrap;
        }
        .kuc-checkbox__error {
          line-height: 1.5;
          padding: 4px 18px;
          box-sizing: border-box;
          background-color: #e74c3c;
          color: #ffffff;
          margin: 8px 0;
        }
        .kuc-checkbox__error[hidden] {
          display: none;
        }
      </style>
    `;
    }
}
__decorate([
    property({ type: String })
], Checkbox.prototype, "error", void 0);
__decorate([
    property({ type: String })
], Checkbox.prototype, "itemLayout", void 0);
__decorate([
    property({ type: String })
], Checkbox.prototype, "label", void 0);
__decorate([
    property({ type: Boolean })
], Checkbox.prototype, "borderVisible", void 0);
__decorate([
    property({ type: Boolean })
], Checkbox.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], Checkbox.prototype, "requiredIcon", void 0);
__decorate([
    property({ type: Boolean })
], Checkbox.prototype, "visible", void 0);
__decorate([
    property({
        type: Array,
        hasChanged(newVal, _oldVal) {
            if (!Array.isArray(newVal)) {
                throw new Error("'items' property is not array");
            }
            const checkedList = [];
            newVal.forEach((item, index) => {
                if (checkedList.indexOf(item.value === undefined ? "" : item.value) > -1) {
                    throw new Error(`'items[${index}].value' is duplicated! You can specify unique one.`);
                }
                checkedList.push(item.value === undefined ? "" : item.value);
            });
            return true;
        }
    })
], Checkbox.prototype, "items", void 0);
__decorate([
    property({
        type: Array,
        hasChanged(newVal, _oldVal) {
            if (!Array.isArray(newVal)) {
                throw new Error("'value' property is not array");
            }
            const checkedList = [];
            newVal.forEach((value, index) => {
                if (checkedList.indexOf(value === undefined ? "" : value) > -1) {
                    throw new Error(`'value[${index}]' is duplicated! You can specify unique one.`);
                }
                checkedList.push(value === undefined ? "" : value);
            });
            return true;
        }
    })
], Checkbox.prototype, "value", void 0);
__decorate([
    queryAll(".kuc-checkbox__group__select-menu__item__input")
], Checkbox.prototype, "_inputEls", void 0);
if (!window.customElements.get("kuc-checkbox")) {
    window.customElements.define("kuc-checkbox", Checkbox);
}
