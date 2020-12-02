var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, svg, property } from "lit-element";
export class Notification extends LitElement {
    constructor(props) {
        super();
        this.text = "";
        this.type = "danger";
        if (!props) {
            return;
        }
        this.className =
            props.className !== undefined ? props.className : this.className;
        this.text = props.text !== undefined ? props.text : this.text;
        this.type = props.type !== undefined ? props.type : this.type;
    }
    _animationFinished() {
        this.updateComplete.then(() => {
            if (this.classList.contains("kuc-notification-fadein")) {
                this.classList.remove("kuc-notification-fadein");
            }
            if (this.classList.contains("kuc-notification-fadeout")) {
                this.classList.remove("kuc-notification-fadeout");
                this.parentNode && this.parentNode.removeChild(this);
            }
        });
    }
    _handleClickCloseButton(event) {
        this.close();
    }
    _getCloseButtonColor() {
        switch (this.type) {
            case "info":
                return "#448aca";
            case "success":
                return "#9bbc65";
            default:
                return "#c65040";
        }
    }
    _getCloseButtonSvgTemplate() {
        return svg `
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>close button</title>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
          fill="${this._getCloseButtonColor()}"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.4765 15.7071L20.1229 12.0607L20.4765 11.7071L19.7694 11L19.4158 11.3536L15.7694 15L12.1229 11.3536L11.7694 11L11.0623 11.7071L11.4158 12.0607L15.0623 15.7071L11.3536 19.4158L11 19.7694L11.7071 20.4765L12.0607 20.1229L15.7694 16.4142L19.4781 20.1229L19.8316 20.4765L20.5387 19.7694L20.1852 19.4158L16.4765 15.7071Z"
          fill="white"
        />
      </svg>
    `;
    }
    createRenderRoot() {
        return this;
    }
    open() {
        this.classList.add("kuc-notification-fadein");
        const body = document.getElementsByTagName("body")[0];
        body.appendChild(this);
    }
    close() {
        this.classList.add("kuc-notification-fadeout");
    }
    firstUpdated() {
        this.addEventListener("animationend", this._animationFinished);
    }
    render() {
        return html `
      ${this._getStyleTagTemplate()}
      <div
        class="kuc-notification__notification kuc-notification__notification--${this
            .type}"
      >
        <p
          class="kuc-notification__notification__title"
          role="alert"
          aria-live="assertive"
        >
          ${this.text}
        </p>
        <button
          class="kuc-notification__notification__closeButton"
          type="button"
          aria-label="close"
          @click="${this._handleClickCloseButton}"
        >
          ${this._getCloseButtonSvgTemplate()}
        </button>
      </div>
    `;
    }
    _getStyleTagTemplate() {
        return html `
      <style>
        kuc-notification,
        kuc-notification *,
        :lang(en) kuc-notification,
        :lang(en) kuc-notification * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-notification,
        :lang(ja) kuc-notification * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-notification,
        :lang(zh) kuc-notification * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-notification {
          color: #ffffff;
          font-weight: 700;
          text-shadow: 1px -1px 0 rgba(0, 0, 0, 0.5);
          font-size: 0;
          line-height: normal;
          display: inline-block;
          width: 100%;
          position: fixed;
          top: 0;
          z-index: 10000;
          pointer-events: none;
          margin-top: 16px;
          text-align: center;
        }
        .kuc-notification-fadein {
          animation-name: kuc-notification-fade-in;
          animation-duration: 250ms;
          animation-timing-function: ease-out;
        }
        .kuc-notification-fadeout {
          animation-name: kuc-notification-fade-out;
          animation-duration: 250ms;
          animation-timing-function: ease-out;
        }
        .kuc-notification__notification {
          display: inline-block;
          background-color: #e74c3c;
        }
        .kuc-notification__notification--info {
          background-color: #3498db;
        }
        .kuc-notification__notification--success {
          background-color: #91c36c;
        }
        .kuc-notification__notification--danger {
          background-color: #e74c3c;
        }
        .kuc-notification__notification__title {
          display: inline-block;
          vertical-align: middle;
          word-break: break-word;
          font-size: 16px;
          margin: 16px 8px 16px 24px;
          max-width: 500px;
        }
        .kuc-notification__notification__closeButton {
          width: 48px;
          height: 48px;
          padding: 0;
          background-color: transparent;
          border: none;
          vertical-align: middle;
          pointer-events: auto;
        }
        @keyframes kuc-notification-fade-in {
          0% {
            top: -56px;
          }
          100% {
            top: 0;
          }
        }
        @keyframes kuc-notification-fade-out {
          0% {
            top: 0;
          }
          10% {
            top: 14px;
          }
          100% {
            top: -56px;
          }
        }
      </style>
    `;
    }
}
__decorate([
    property({ type: String })
], Notification.prototype, "text", void 0);
__decorate([
    property({ type: String })
], Notification.prototype, "type", void 0);
if (!window.customElements.get("kuc-notification")) {
    window.customElements.define("kuc-notification", Notification);
}
