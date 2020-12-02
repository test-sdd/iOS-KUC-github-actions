var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, property, svg, queryAll } from "lit-element";
import { v4 as uuid } from "uuid";
export class RadioButton extends LitElement {
    constructor(props) {
        super();
        this.error = "";
        this.itemLayout = "horizontal";
        this.label = "";
        this.value = "";
        this.borderVisible = true;
        this.disabled = false;
        this.requiredIcon = false;
        this.visible = true;
        this.items = [];
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
        this.value = props.value !== undefined ? props.value : this.value;
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
    _handleChangeInput(event) {
        event.stopPropagation();
        const inputEl = event.target;
        const value = inputEl.value;
        const detail = { value: value, oldValue: this.value };
        this.value = value;
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
    _getRadioIconSvgTemplate(disabled, checked) {
        return svg `
    <svg
      class="kuc-radio-button__group__select-menu__item__label__icon"
      width='21'
      height='21'
      viewBox='0 0 21 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        cx='10.5'
        cy='10.5'
        r='10'
        fill='white'
        stroke='#e3e7e8' stroke-width='1'/>
      ${checked
            ? svg `<circle cx='10.5' cy='10.5' r='6.5' fill='${disabled ? "#e3e7e8" : "#3498db"}'/>`
            : ""}
    </svg>
  `;
    }
    _getItemTemplate(item, index) {
        return html `
      <div
        class="kuc-radio-button__group__select-menu__item"
        itemLayout="${this.itemLayout}"
      >
        <input
          type="radio"
          aria-describedby="${this._GUID}-error"
          id="${this._GUID}-item-${index}"
          class="kuc-radio-button__group__select-menu__item__input"
          name="${this._GUID}-group"
          value="${item.value !== undefined ? item.value : ""}"
          aria-required=${this.requiredIcon}
          ?disabled="${this.disabled}"
          @change="${this._handleChangeInput}"
          @focus="${this._handleFocusInput}"
          @blur="${this._handleBlurInput}"
        />
        <label
          class="kuc-radio-button__group__select-menu__item__label"
          for="${this._GUID}-item-${index}"
          >${this._getRadioIconSvgTemplate(this.disabled, item.value !== undefined ? this.value === item.value : false)}${item.label === undefined ? item.value : item.label}
        </label>
      </div>
    `;
    }
    render() {
        this._updateVisible();
        return html `
      ${this._getStyleTagTemplate()}
      <fieldset class="kuc-radio-button__group">
        <legend class="kuc-radio-button__group__label" ?hidden="${!this.label}">
          <span class="kuc-radio-button__group__label__text">${this.label}</span
          ><!--
            --><span
            class="kuc-radio-button__group__label__required-icon"
            ?hidden="${!this.requiredIcon}"
            >*</span
          >
        </legend>
        <div
          class="kuc-radio-button__group__select-menu"
          ?borderVisible=${this.borderVisible}
          itemLayout="${this.itemLayout}"
        >
          ${this.items.map((item, index) => this._getItemTemplate(item, index))}
        </div>
        <div
          class="kuc-radio-button__error"
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
        this._inputEls.forEach((inputEl, idx) => {
            inputEl.checked = this.value === inputEl.value;
        });
    }
    _getStyleTagTemplate() {
        return html `
      <style>
        kuc-radio-button,
        kuc-radio-button *,
        :lang(en) kuc-radio-button,
        :lang(en) kuc-radio-button * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-radio-button,
        :lang(ja) kuc-radio-button * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-radio-button,
        :lang(zh) kuc-radio-button * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-radio-button {
          font-size: 14px;
          color: #333333;
          display: inline-block;
        }

        kuc-radio-button[hidden] {
          display: none;
        }

        .kuc-radio-button__group {
          border: none;
          padding: 0px;
          height: auto;
          display: inline-block;
        }

        .kuc-radio-button__group__label {
          display: inline-block;
          padding: 4px 0 8px 0;
          white-space: nowrap;
        }

        .kuc-radio-button__group__label[hidden] {
          display: none;
        }

        .kuc-radio-button__group__label__required-icon {
          font-size: 20px;
          vertical-align: -3px;
          color: #e74c3c;
          margin-left: 4px;
          line-height: 1;
        }

        .kuc-radio-button__group__label__required-icon[hidden] {
          display: none;
        }

        .kuc-radio-button__group__select-menu[itemlayout="vertical"] {
          min-width: 233px;
        }

        .kuc-radio-button__group__select-menu[bordervisible] {
          border-color: #e3e7e8;
          border-width: 1px;
          border-style: solid;
          padding: 4px 0 0 4px;
        }

        .kuc-radio-button__group__select-menu__item {
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

        .kuc-radio-button__group__select-menu__item[itemlayout="vertical"] {
          display: block;
        }

        .kuc-radio-button__group__select-menu__item[focused] {
          border: 1px solid #3498db;
        }

        .kuc-radio-button__group__select-menu__item__input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
        }

        .kuc-radio-button__group__select-menu__item__input:hover
          + .kuc-radio-button__group__select-menu__item__label {
          color: #666666;
        }

        .kuc-radio-button__group__select-menu__item__label__icon {
          position: absolute;
          top: 50%;
          left: -30px;
          box-sizing: border-box;
          margin-top: -11px;
          width: 21px;
          height: 21px;
          box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;
          content: "";
          border-radius: 9px;
        }

        .kuc-radio-button__group__select-menu__item__input[disabled]
          + .kuc-radio-button__group__select-menu__item__label {
          color: #888888;
          cursor: not-allowed;
        }

        .kuc-radio-button__group__select-menu__item__label {
          cursor: pointer;
          position: relative;
          margin-left: 32px;
          display: inline-block;
          vertical-align: middle;
          white-space: nowrap;
        }

        .kuc-radio-button__error {
          line-height: 1.5;
          padding: 4px 18px;
          box-sizing: border-box;
          background-color: #e74c3c;
          color: #ffffff;
          margin: 8px 0;
          word-break: break-all;
        }

        .kuc-radio-button__error[hidden] {
          display: none;
        }
      </style>
    `;
    }
}
__decorate([
    property({ type: String })
], RadioButton.prototype, "error", void 0);
__decorate([
    property({ type: String })
], RadioButton.prototype, "itemLayout", void 0);
__decorate([
    property({ type: String })
], RadioButton.prototype, "label", void 0);
__decorate([
    property({ type: String })
], RadioButton.prototype, "value", void 0);
__decorate([
    property({ type: Boolean })
], RadioButton.prototype, "borderVisible", void 0);
__decorate([
    property({ type: Boolean })
], RadioButton.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], RadioButton.prototype, "requiredIcon", void 0);
__decorate([
    property({ type: Boolean })
], RadioButton.prototype, "visible", void 0);
__decorate([
    property({
        type: Array,
        hasChanged(newVal, _oldVal) {
            if (!Array.isArray(newVal)) {
                throw new Error("'items' property is not array");
            }
            const checkedList = [];
            newVal.forEach((item, index) => {
                const value = item.value === undefined ? "" : item.value;
                if (checkedList.indexOf(value) > -1) {
                    throw new Error(`'items[${index}].value' is duplicated! You can specify unique one.`);
                }
                checkedList.push(value);
            });
            return true;
        }
    })
], RadioButton.prototype, "items", void 0);
__decorate([
    queryAll(".kuc-radio-button__group__select-menu__item__input")
], RadioButton.prototype, "_inputEls", void 0);
if (!window.customElements.get("kuc-radio-button")) {
    window.customElements.define("kuc-radio-button", RadioButton);
}
