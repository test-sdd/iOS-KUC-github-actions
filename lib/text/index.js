var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, property, query } from "lit-element";
import { v4 as uuid } from "uuid";
export class Text extends LitElement {
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
        return this.dispatchEvent(event);
    }
    createRenderRoot() {
        return this;
    }
    _updateContainerWidth() {
        const inputFormElmOuter = this._inputFormElm.children[1];
        const labelWidth = this._labelElm.getBoundingClientRect().width;
        const inputFormWidth = this._inputFormElm.getBoundingClientRect().width;
        let textContainerWidth = inputFormWidth;
        if (labelWidth > inputFormWidth) {
            textContainerWidth = labelWidth;
        }
        this._textContainerElm.style.width = textContainerWidth + "px";
        inputFormElmOuter.style.width = "100%";
    }
    render() {
        this._updateVisible();
        return html `
      ${this._getStyleTagTemplate()}
      <div class="kuc-text__text">
        <label
          class="kuc-text__text__label"
          for="${this._GUID}-label"
          ?hidden=${!this.label}
        >
          <span class="kuc-text__text__label__text">${this.label}</span
          ><!--
          --><span
            class="kuc-text__text__label__required-icon"
            ?hidden=${!this.requiredIcon}
            >*</span
          >
        </label>
        <div class="kuc-text__text__input-form">
          <div class="kuc-text__text__input-form__prefix-outer">
            <span
              class="kuc-text__text__input-form__prefix-outer__prefix"
              ?hidden="${!this.prefix}"
              >${this.prefix}</span
            >
          </div>
          <div class="kuc-text__text__input-form__input-outer">
            <input
              class="kuc-text__text__input-form__input-outer__input"
              id="${this._GUID}-label"
              placeholder=${this.placeholder}
              textAlign=${this.textAlign}
              type="text"
              .value=${this.value}
              aria-required=${this.requiredIcon}
              aria-invalid="${this.error !== ""}"
              aria-describedby="${this._GUID}-error"
              @focus="${this._handleFocusInput}"
              @change="${this._handleChangeInput}"
              ?disabled="${this.disabled}"
            />
          </div>
          <div class="kuc-text__text__input-form__suffix-outer">
            <span
              class="kuc-text__text__input-form__suffix-outer__suffix"
              ?hidden="${!this.suffix}"
              >${this.suffix}</span
            >
          </div>
        </div>
        <div
          class="kuc-text__text__error"
          id="${this._GUID}-error"
          role="alert"
          ?hidden=${!this.error}
        >
          ${this.error}
        </div>
      </div>
    `;
    }
    updated() {
        this._updateContainerWidth();
    }
    _getStyleTagTemplate() {
        return html `
      <style>
        kuc-text,
        kuc-text *,
        :lang(en) kuc-text,
        :lang(en) kuc-text * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-text,
        :lang(ja) kuc-text * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-text,
        :lang(zh) kuc-text * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-text {
          font-size: 14px;
          color: #333333;
          display: inline-block;
          vertical-align: top;
        }
        kuc-text[hidden] {
          display: none;
        }
        .kuc-text__text {
          display: inline-block;
          width: 193px;
        }
        .kuc-text__text__label {
          display: inline-block;
          margin-top: 4px;
          margin-bottom: 8px;
          white-space: nowrap;
        }
        .kuc-text__text__label[hidden] {
          display: none;
        }
        .kuc-text__text__label__required-icon {
          font-size: 20px;
          vertical-align: -3px;
          color: #e74c3c;
          margin-left: 4px;
          line-height: 1;
        }
        .kuc-text__text__label__required-icon[hidden] {
          display: none;
        }
        .kuc-text__text__input-form {
          display: table;
          width: 100%;
        }
        .kuc-text__text__input-form__prefix-outer,
        .kuc-text__text__input-form__input-outer,
        .kuc-text__text__input-form__suffix-outer {
          display: table-cell;
        }
        .kuc-text__text__input-form__prefix-outer__prefix {
          padding-right: 4px;
          white-space: nowrap;
        }
        .kuc-text__text__input-form__input-outer {
          min-width: 26px;
        }
        .kuc-text__text__input-form__input-outer__input {
          width: 100%;
          height: 40px;
          padding: 0 8px;
          border: 1px solid #e3e7e8;
          box-sizing: border-box;
          font-size: 14px;
          box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
        }
        .kuc-text__text__input-form__input-outer__input[textAlign="left"] {
          text-align: left;
        }
        .kuc-text__text__input-form__input-outer__input[textAlign="right"] {
          text-align: right;
        }
        .kuc-text__text__input-form__input-outer__input:focus {
          border: 1px solid #3498db;
        }
        .kuc-text__text__input-form__input-outer__input:disabled {
          color: #888888;
          background-color: #d4d7d7;
          box-shadow: none;
          cursor: not-allowed;
        }
        .kuc-text__text__input-form__suffix-outer__suffix {
          padding-left: 4px;
          white-space: nowrap;
        }
        .kuc-text__text__error {
          line-height: 1.5;
          padding: 4px 18px;
          box-sizing: border-box;
          background-color: #e74c3c;
          color: #ffffff;
          margin-top: 8px;
          word-break: break-all;
        }
        .kuc-text__text__error[hidden] {
          display: none;
        }
      </style>
    `;
    }
}
__decorate([
    property({ type: String })
], Text.prototype, "error", void 0);
__decorate([
    property({ type: String })
], Text.prototype, "label", void 0);
__decorate([
    property({ type: String })
], Text.prototype, "placeholder", void 0);
__decorate([
    property({ type: String })
], Text.prototype, "prefix", void 0);
__decorate([
    property({ type: String })
], Text.prototype, "suffix", void 0);
__decorate([
    property({ type: String })
], Text.prototype, "textAlign", void 0);
__decorate([
    property({ type: String })
], Text.prototype, "value", void 0);
__decorate([
    property({ type: Boolean })
], Text.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], Text.prototype, "requiredIcon", void 0);
__decorate([
    property({ type: Boolean })
], Text.prototype, "visible", void 0);
__decorate([
    query(".kuc-text__text")
], Text.prototype, "_textContainerElm", void 0);
__decorate([
    query(".kuc-text__text__input-form")
], Text.prototype, "_inputFormElm", void 0);
__decorate([
    query(".kuc-text__text__label")
], Text.prototype, "_labelElm", void 0);
if (!window.customElements.get("kuc-text")) {
    window.customElements.define("kuc-text", Text);
}
