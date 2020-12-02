var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { expect, fixture } from "@open-wc/testing";
import { Dialog } from "../index";
describe("confirm footer default prop is null", () => {
    const container = new Dialog();
    it("confirm footer default prop is null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const footerEl = el.querySelector(".kuc-dialog__dialog__footer");
        yield expect(footerEl.childElementCount).to.be.equals(0);
    }));
});
describe("constructor: footer set string successfully", () => {
    const container = new Dialog({
        footer: "this is footer"
    });
    it("footer constructor set successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const footerEl = el.querySelector(".kuc-dialog__dialog__footer");
        yield expect(footerEl.textContent.trim()).to.be.equals("this is footer");
    }));
});
describe("constructor: footer set HTMLElement successfully", () => {
    const divElement = document.createElement("div");
    divElement.textContent = "this is footer";
    const container = new Dialog({
        footer: divElement
    });
    it("footer constructor set successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const el = yield fixture(container);
        const footerEl = el.querySelector(".kuc-dialog__dialog__footer");
        yield expect(footerEl.firstElementChild.tagName.toLowerCase()).to.be.equal("div");
        yield expect((_a = footerEl.firstElementChild.textContent) === null || _a === void 0 ? void 0 : _a.trim()).to.be.equal("this is footer");
    }));
});
describe("constructor: footer set HTMLElement from string successfully", () => {
    const divElement = "<div>this is footer</div>";
    const container = new Dialog({
        footer: divElement
    });
    it("constructor: footer set HTMLElement from string successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const el = yield fixture(container);
        const footerEl = el.querySelector(".kuc-dialog__dialog__footer");
        yield expect(footerEl.firstElementChild.tagName.toLowerCase()).to.be.equal("div");
        yield expect((_a = footerEl.firstElementChild.textContent) === null || _a === void 0 ? void 0 : _a.trim()).to.be.equal("this is footer");
    }));
});
describe("constructor: footer set to null successfully", () => {
    const container = new Dialog({
        // @ts-ignore
        footer: null
    });
    it("constructor: content set to null successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const footerEl = el.querySelector(".kuc-dialog__dialog__footer");
        yield expect(footerEl.textContent.trim()).to.be.equals("");
    }));
});
describe("property: footer set string successfully", () => {
    const container = new Dialog();
    container.footer = "this is footer";
    it("footer prop set successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const footerEl = el.querySelector(".kuc-dialog__dialog__footer");
        yield expect(footerEl.textContent.trim()).to.be.equal("this is footer");
    }));
});
describe("property: footer set HTMLElement successfully", () => {
    const divElement = document.createElement("div");
    divElement.textContent = "this is footer";
    const container = new Dialog();
    container.footer = divElement;
    it("property: footer set HTMLElement successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const el = yield fixture(container);
        const footerEl = el.querySelector(".kuc-dialog__dialog__footer");
        yield expect(footerEl.firstElementChild.tagName.toLowerCase()).to.be.equal("div");
        yield expect((_a = footerEl.firstElementChild.textContent) === null || _a === void 0 ? void 0 : _a.trim()).to.be.equal("this is footer");
    }));
});
describe("property: footer set HTMLElement from string successfully", () => {
    const divElement = "<div>this is footer</div>";
    const container = new Dialog();
    container.footer = divElement;
    it("property: footer set HTMLElement from string successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const el = yield fixture(container);
        const footerEl = el.querySelector(".kuc-dialog__dialog__footer");
        yield expect(footerEl.firstElementChild.tagName.toLowerCase()).to.be.equal("div");
        yield expect((_a = footerEl.firstElementChild.textContent) === null || _a === void 0 ? void 0 : _a.trim()).to.be.equal("this is footer");
    }));
});
describe("property: footer set to null successfully", () => {
    const container = new Dialog();
    // @ts-ignore
    container.footer = null;
    it("property: footer set to null successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const footerEl = el.querySelector(".kuc-dialog__dialog__footer");
        yield expect(footerEl.textContent.trim()).to.be.equal("");
    }));
});
describe("footer prop replace successfully", () => {
    const container = new Dialog({ footer: "this is footer" });
    container.footer = "replace footer";
    it("footer prop replace successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const footerEl = el.querySelector(".kuc-dialog__dialog__footer");
        yield expect(footerEl.textContent.trim()).to.be.equal("replace footer");
    }));
});
