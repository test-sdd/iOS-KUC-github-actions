var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, property, svg, queryAll } from "lit-element";
import { v4 as uuid } from "uuid";
export class MobileRadioButton extends LitElement {
    constructor(props) {
        super();
        this.error = "";
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
    _dispatchCustomEvent(eventName, detail) {
        const event = new CustomEvent(eventName, {
            detail,
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
    }
    createRenderRoot() {
        return this;
    }
    _getRadioIconSvgTemplate(disabled, checked) {
        return svg `
    <svg
      class="kuc-mobile-radio-button__group__select-menu__item__label__icon"
      width='21'
      height='21'
      viewBox='0 0 21 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
    <defs>
      <radialGradient id="shadow">
        <stop offset="0%" style="stop-color:#5B5B5B;stop-opacity:0" />
        <stop offset="30%" style="stop-color:#5B5B5B;stop-opacity:0" />
        <stop offset="80%" style="stop-color:#5B5B5B;stop-opacity:0.1" />
        <stop offset="90%" style="stop-color:#5B5B5B;stop-opacity:0.15" />
        <stop offset="100%" style="stop-color:#5B5B5B;stop-opacity:0.2" />
      </radialGradient>
    </defs>
      <circle
        fill="url(#shadow)"
        cx='10.5'
        cy='10.5'
        r='10.15'
        stroke='#bbbbbb' stroke-width='1'/>
      ${checked
            ? svg `<circle cx='10.5' cy='10.5' r='6.5' fill='${"#5B5B5B"}'/>`
            : ""}
    </svg>
  `;
    }
    _getItemTemplate(item, index) {
        return html `
      <div class="kuc-mobile-radio-button__group__select-menu__item">
        <input
          type="radio"
          aria-describedby="${this._GUID}-error"
          id="${this._GUID}-item-${index}"
          class="kuc-mobile-radio-button__group__select-menu__item__input"
          name="${this._GUID}-group"
          value="${item.value !== undefined ? item.value : ""}"
          aria-invalid="${this.error !== ""}"
          aria-required=${this.requiredIcon}
          ?disabled="${this.disabled}"
          @change="${this._handleChangeInput}"
        />
        <label
          class="kuc-mobile-radio-button__group__select-menu__item__label"
          for="${this._GUID}-item-${index}"
          >${this._getRadioIconSvgTemplate(this.disabled, item.value !== undefined ? this.value === item.value : false)}
          <div
            class="kuc-mobile-radio-button__group__select-menu__item__label__value"
          >
            ${item.label === undefined ? item.value : item.label}
          </div>
        </label>
      </div>
    `;
    }
    render() {
        this._updateVisible();
        return html `
      ${this._getStyleTagTemplate()}
      <div class="kuc-mobile-radio-button__group">
        <div
          class="kuc-mobile-radio-button__group__label"
          ?hidden="${!this.label}"
        >
          <span class="kuc-mobile-radio-button__group__label__text"
            ><!--
            -->${this.label}</span
          ><!--
            --><span
            class="kuc-mobile-radio-button__group__label__required-icon"
            ?hidden="${!this.requiredIcon}"
            >*</span
          >
        </div>
        <div
          class="kuc-mobile-radio-button__group__select-menu"
          ?borderVisible=${this.borderVisible}
          ?disabled="${this.disabled}"
        >
          ${this.items.map((item, index) => this._getItemTemplate(item, index))}
        </div>
        <div
          class="kuc-mobile-radio-button__error"
          role="alert"
          id="${this._GUID}-error"
          ?hidden="${!this.error}"
        >
          ${this.error}
        </div>
      </div>
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
        kuc-mobile-radio-button,
        kuc-mobile-radio-button * {
          font-size: 13px;
          color: #333333;
          font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
            "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
            "Lucida Sans Unicode", Arial, Verdana, sans-serif;
        }

        :lang(zh) kuc-mobile-radio-button,
        :lang(zh) kuc-mobile-radio-button * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
            Verdana, sans-serif;
        }

        kuc-mobile-radio-button {
          width: 100%;
          display: inline-block;
        }

        kuc-mobile-radio-button[hidden] {
          display: none;
        }

        .kuc-mobile-radio-button__group {
          border: none;
          height: auto;
          display: inline-block;
          width: 100%;
        }

        .kuc-mobile-radio-button__group__label {
          display: inline-block;
          padding: 4px 0px;
          white-space: nowrap;
          text-shadow: 0 1px 0 #fff;
          font-weight: bold;
        }

        .kuc-mobile-radio-button__group__label__text {
          color: #888888;
          font-size: 86%;
        }

        .kuc-mobile-radio-button__group__label[hidden] {
          display: none;
        }

        .kuc-mobile-radio-button__group__label__required-icon {
          font-size: 20px;
          vertical-align: -3px;
          color: #e74c3c;
          margin-left: 4px;
          line-height: 1;
        }

        .kuc-mobile-radio-button__group__label__required-icon[hidden] {
          display: none;
        }

        .kuc-mobile-radio-button__group__select-menu {
          margin-right: 0.5em;
          margin-left: 0.5em;
        }

        .kuc-mobile-radio-button__group__select-menu[bordervisible] {
          border-color: #b3b3b3;
          border-width: 1px;
          border-style: solid;
          border-radius: 0.4em;
        }

        .kuc-mobile-radio-button__group__select-menu__item {
          border: 1px solid transparent;
          position: relative;
          white-space: normal;
          word-wrap: normal;
          height: 45px;
          display: block;
        }

        .kuc-mobile-radio-button__group__select-menu[bordervisible]
          .kuc-mobile-radio-button__group__select-menu__item {
          border-bottom: 1px solid #b3b3b3;
        }

        .kuc-mobile-radio-button__group__select-menu[bordervisible]
          .kuc-mobile-radio-button__group__select-menu__item:last-child {
          border-bottom: 0px;
        }

        .kuc-mobile-radio-button__group__select-menu__item__input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
        }

        .kuc-mobile-radio-button__group__select-menu__item__label__icon {
          position: absolute;
          top: 50%;
          box-sizing: border-box;
          margin-top: -11px;
          width: 21px;
          height: 21px;
          box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;
          content: "";
          border-radius: 9px;
          left: 8px;
        }

        .kuc-mobile-radio-button__group__select-menu__item__label__value {
          height: 45px;
          line-height: 45px;
          padding-left: 35px;
        }

        .kuc-mobile-radio-button__group__select-menu[disabled] {
          background-color: #d5d7d9;
          color: #999999;
          -webkit-text-fill-color: #999999;
          background-color: #d5d7d9;
          opacity: 1;
        }

        .kuc-mobile-radio-button__group__select-menu__item__label {
          position: absolute;
          white-space: nowrap;
          width: 100%;
          top: 50%;
          transform: translateY(-50%);
          height: 100%;
          padding: 0px;
        }

        .kuc-mobile-radio-button__error {
          line-height: 1.5;
          border: 1px solid #e5db68;
          background-color: #fdffc9;
          margin-top: 0.3em;
          padding: 0.4em 1em;
          border-radius: 0.4em;
          margin-left: 0.5em;
        }

        .kuc-mobile-radio-button__error[hidden] {
          display: none;
        }
      </style>
    `;
    }
}
__decorate([
    property({ type: String })
], MobileRadioButton.prototype, "error", void 0);
__decorate([
    property({ type: String })
], MobileRadioButton.prototype, "label", void 0);
__decorate([
    property({ type: String })
], MobileRadioButton.prototype, "value", void 0);
__decorate([
    property({ type: Boolean })
], MobileRadioButton.prototype, "borderVisible", void 0);
__decorate([
    property({ type: Boolean })
], MobileRadioButton.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], MobileRadioButton.prototype, "requiredIcon", void 0);
__decorate([
    property({ type: Boolean })
], MobileRadioButton.prototype, "visible", void 0);
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
], MobileRadioButton.prototype, "items", void 0);
__decorate([
    queryAll(".kuc-mobile-radio-button__group__select-menu__item__input")
], MobileRadioButton.prototype, "_inputEls", void 0);
if (!window.customElements.get("kuc-mobile-radio-button")) {
    window.customElements.define("kuc-mobile-radio-button", MobileRadioButton);
}
