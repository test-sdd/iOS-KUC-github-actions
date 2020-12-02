var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, property } from "lit-element";
import { v4 as uuid } from "uuid";
export class MobileText extends LitElement {
    constructor(props) {
        super();
        this.error = "";
        this.label = "";
        this.placeholder = "";
        this.prefix = "";
        this.suffix = "";
        this.textAlign = "left";
        this.value = "";
        this.disabled = false;
        this.requiredIcon = false;
        this.visible = true;
        this._GUID = this._generateGUID();
        if (!props) {
            return;
        }
        this.className =
            props.className !== undefined ? props.className : this.className;
        this.error = props.error !== undefined ? props.error : this.error;
        this.id = props.id !== undefined ? props.id : this.id;
        this.label = props.label !== undefined ? props.label : this.label;
        this.placeholder =
            props.placeholder !== undefined ? props.placeholder : this.placeholder;
        this.prefix = props.prefix !== undefined ? props.prefix : this.prefix;
        this.suffix = props.suffix !== undefined ? props.suffix : this.suffix;
        this.textAlign =
            props.textAlign !== undefined ? props.textAlign : this.textAlign;
        this.value = props.value !== undefined ? props.value : this.value;
        this.disabled =
            props.disabled !== undefined ? props.disabled : this.disabled;
        this.requiredIcon =
            props.requiredIcon !== undefined ? props.requiredIcon : this.requiredIcon;
        this.visible = props.visible !== undefined ? props.visible : this.visible;
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
    _handleFocusInput(event) {
        const detail = { value: this.value };
        this._dispatchCustomEvent("focus", detail);
    }
    _handleChangeInput(event) {
        event.stopPropagation();
        const targetEl = event.target;
        const detail = { value: "", oldValue: this.value };
        this.value = targetEl.value;
        detail.value = this.value;
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
    render() {
        this._updateVisible();
        return html `
      ${this._getStyleTagTemplate()}
      <label
        class="kuc-mobile-text__label"
        for="${this._GUID}-label"
        ?hidden=${!this.label}
      >
        <span class="kuc-mobile-text__label__text">${this.label}</span
        ><!--
        --><span
          class="kuc-mobile-text__label__required-icon"
          ?hidden=${!this.requiredIcon}
          >*</span
        >
      </label>
      <div class="kuc-mobile-text__input-form">
        <span
          class="kuc-mobile-text__input-form__prefix"
          ?hidden="${!this.prefix}"
          >${this.prefix}</span
        >
        <input
          class="kuc-mobile-text__input-form__input"
          id="${this._GUID}-label"
          placeholder=${this.placeholder}
          textAlign=${this.textAlign}
          type="text"
          .value=${this.value}
          ?disabled="${this.disabled}"
          aria-invalid="${this.error !== ""}"
          aria-describedby="${this._GUID}-error"
          aria-required=${this.requiredIcon}
          @focus="${this._handleFocusInput}"
          @change="${this._handleChangeInput}"
        />
        <span
          class="kuc-mobile-text__input-form__suffix"
          ?hidden="${!this.suffix}"
          >${this.suffix}</span
        >
      </div>
      <div
        class="kuc-mobile-text__error"
        id="${this._GUID}-error"
        role="alert"
        ?hidden=${!this.error}
      >
        ${this.error}
      </div>
    `;
    }
    _getStyleTagTemplate() {
        return html `
      <style>
        kuc-mobile-text {
          display: block;
          font-size: 13px;
          font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
            "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
            "Lucida Sans Unicode", Arial, Verdana, sans-serif;
        }
        :lang(zh) kuc-mobile-text,
        :lang(zh) kuc-mobile-text * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
            Verdana, sans-serif;
        }
        kuc-mobile-text[hidden] {
          display: none;
        }
        .kuc-mobile-text__label {
          padding: 0;
        }
        .kuc-mobile-text__label[hidden] {
          display: none;
        }
        .kuc-mobile-text__label__text {
          text-shadow: 0 1px 0 #fff;
          color: #888888;
          font-size: 86%;
          font-weight: 700;
          margin: 0 0 4px 0;
        }
        .kuc-mobile-text__label__required-icon {
          margin-left: 3px;
          color: #d01212;
        }
        .kuc-mobile-text__label__required-icon[hidden] {
          display: none;
        }
        .kuc-mobile-text__input-form {
          padding-left: 0.5em;
          padding-right: 0.5em;
          display: flex;
          align-items: center;
        }
        .kuc-mobile-text__input-form__prefix {
          margin-right: 4px;
          color: #888888;
        }
        .kuc-mobile-text__input-form__prefix[hidden] {
          display: none;
        }
        .kuc-mobile-text__input-form__input {
          width: 100%;
          min-width: 20px;
          padding: 0.4em;
          border: 1px solid #b3b3b3;
          outline: 0;
          box-shadow: 0 1px 0 #fff, inset 0 2px 3px #dadada;
          border-radius: 0.4em;
          box-sizing: border-box;
          text-align: left;
        }
        .kuc-mobile-text__input-form__input[aria-required="true"] {
          border: 1px solid #cf4a38;
        }
        .kuc-mobile-text__input-form__input[textAlign="right"] {
          text-align: right;
        }
        .kuc-mobile-text__input-form__input:disabled {
          color: #999999;
          background-color: #d5d7d9;
          -webkit-text-fill-color: #999999;
          opacity: 1;
          -webkit-opacity: 1;
        }
        .kuc-mobile-text__input-form__suffix {
          margin-left: 4px;
          font-size: 13px;
          color: #888888;
        }
        .kuc-mobile-text__input-form__suffix[hidden] {
          display: none;
        }
        .kuc-mobile-text__error {
          background-color: #fdffc9;
          border: 1px solid #e5db68;
          border-radius: 0.4em;
          padding: 0.4em 1em;
          margin-top: 0.3em;
          margin-left: 0.5em;
        }
        .kuc-mobile-text__error[hidden] {
          display: none;
        }
      </style>
    `;
    }
}
__decorate([
    property({ type: String })
], MobileText.prototype, "error", void 0);
__decorate([
    property({ type: String })
], MobileText.prototype, "label", void 0);
__decorate([
    property({ type: String })
], MobileText.prototype, "placeholder", void 0);
__decorate([
    property({ type: String })
], MobileText.prototype, "prefix", void 0);
__decorate([
    property({ type: String })
], MobileText.prototype, "suffix", void 0);
__decorate([
    property({ type: String })
], MobileText.prototype, "textAlign", void 0);
__decorate([
    property({ type: String })
], MobileText.prototype, "value", void 0);
__decorate([
    property({ type: Boolean })
], MobileText.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], MobileText.prototype, "requiredIcon", void 0);
__decorate([
    property({ type: Boolean })
], MobileText.prototype, "visible", void 0);
if (!window.customElements.get("kuc-mobile-text")) {
    window.customElements.define("kuc-mobile-text", MobileText);
}
