var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, property } from "lit-element";
export class MobileTextArea extends LitElement {
    constructor(props) {
        super();
        this.error = "";
        this.label = "";
        this.placeholder = "";
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
        this.value = props.value !== undefined ? props.value : this.value;
        this.disabled =
            props.disabled !== undefined ? props.disabled : this.disabled;
        this.requiredIcon =
            props.requiredIcon !== undefined ? props.requiredIcon : this.requiredIcon;
        this.visible = props.visible !== undefined ? props.visible : this.visible;
    }
    _generateGUID() {
        return (new Date().getTime().toString(16) +
            Math.floor(Math.random() * 0x1000).toString(16));
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
        class="kuc-mobile-textarea__label"
        for="${this._GUID}-label"
        ?hidden=${!this.label}
      >
        <span class="kuc-mobile-textarea__label__text">${this.label}</span
        ><!--
        --><span
          class="kuc-mobile-textarea__label__required-icon"
          ?hidden=${!this.requiredIcon}
          >*</span
        >
      </label>
      <div class="kuc-mobile-textarea__form">
        <textarea
          class="kuc-mobile-textarea__form__textarea"
          id="${this._GUID}-label"
          placeholder=${this.placeholder}
          ?disabled="${this.disabled}"
          .value=${this.value}
          aria-invalid="${this.error !== ""}"
          aria-describedby="${this._GUID}-error"
          aria-required=${this.requiredIcon}
          @focus="${this._handleFocusInput}"
          @change="${this._handleChangeInput}"
        /></textarea>
      </div>
      <div
        class="kuc-mobile-textarea__error"
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
        kuc-mobile-textarea {
          display: block;
          font-size: 13px;
          font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
            "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
            "Lucida Sans Unicode", Arial, Verdana, sans-serif;
        }
        :lang(zh) kuc-mobile-textarea,
        :lang(zh) kuc-mobile-textarea * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
            Verdana, sans-serif;
        }
        kuc-mobile-textarea[hidden] {
          display: none;
        }
        .kuc-mobile-textarea__label {
          padding: 0;
          margin: 0 0 4px 0;
        }
        .kuc-mobile-textarea__label[hidden] {
          display: none;
        }
        .kuc-mobile-textarea__label__text {
          text-shadow: 0 1px 0 #fff;
          color: #888;
          font-size: 86%;
          font-weight: 700;
        }
        .kuc-mobile-textarea__label__required-icon {
          margin-left: 3px;
          color: #d01212;
        }
        .kuc-mobile-textarea__label__required-icon[hidden] {
          display: none;
        }
        .kuc-mobile-textarea__form {
          padding-left: 0.5em;
          padding-right: 0.5em;
        }
        .kuc-mobile-textarea__form__textarea {
          width: 100%;
          height: 120px;
          padding: 0.4em;
          border: 1px solid #b3b3b3;
          outline: 0;
          box-shadow: 0 1px 0 #fff, inset 0 2px 3px #dadada;
          border-radius: 0.4em;
          box-sizing: border-box;
        }
        .kuc-mobile-textarea__form__textarea[aria-required="true"] {
          border: 1px solid #cf4a38;
        }
        .kuc-mobile-textarea__form__textarea:disabled {
          color: #999;
          background-color: #d5d7d9;
          opacity: 1;
        }
        .kuc-mobile-textarea__error {
          background-color: #fdffc9;
          border: 1px solid #e5db68;
          border-radius: 0.4em;
          padding: 0.4em 1em;
          margin-top: 0.3em;
          margin-left: 0.5em;
        }
        .kuc-mobile-textarea__error[hidden] {
          display: none;
        }
      </style>
    `;
    }
}
__decorate([
    property({ type: String })
], MobileTextArea.prototype, "error", void 0);
__decorate([
    property({ type: String })
], MobileTextArea.prototype, "label", void 0);
__decorate([
    property({ type: String })
], MobileTextArea.prototype, "placeholder", void 0);
__decorate([
    property({ type: String })
], MobileTextArea.prototype, "value", void 0);
__decorate([
    property({ type: Boolean })
], MobileTextArea.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], MobileTextArea.prototype, "requiredIcon", void 0);
__decorate([
    property({ type: Boolean })
], MobileTextArea.prototype, "visible", void 0);
if (!window.customElements.get("kuc-mobile-textarea")) {
    window.customElements.define("kuc-mobile-textarea", MobileTextArea);
}
