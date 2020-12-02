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
describe("confirm content default prop is null", () => {
    const container = new Dialog();
    it("confirm content default prop is null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const cotentEl = el.querySelector(".kuc-dialog__dialog__content");
        yield expect(cotentEl.childElementCount).to.be.equals(0);
    }));
});
describe("constructor: content set string successfully", () => {
    const container = new Dialog({
        content: "this is content"
    });
    it("content constructor set successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const cotentEl = el.querySelector(".kuc-dialog__dialog__content");
        yield expect(cotentEl.textContent.trim()).to.be.equals("this is content");
    }));
});
describe("constructor: content set HTMLElement successfully", () => {
    const divElement = document.createElement("div");
    divElement.textContent = "this is content";
    const container = new Dialog({
        content: divElement
    });
    it("content constructor set successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const el = yield fixture(container);
        const cotentEl = el.querySelector(".kuc-dialog__dialog__content");
        yield expect(cotentEl.firstElementChild.tagName.toLowerCase()).to.be.equal("div");
        yield expect((_a = cotentEl.firstElementChild.textContent) === null || _a === void 0 ? void 0 : _a.trim()).to.be.equal("this is content");
    }));
});
describe("constructor: content set HTMLElement from string successfully", () => {
    const divElement = "<div>this is content</div>";
    const container = new Dialog({
        content: divElement
    });
    it("constructor: content set HTMLElement from string successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const el = yield fixture(container);
        const contentEl = el.querySelector(".kuc-dialog__dialog__content");
        yield expect(contentEl.firstElementChild.tagName.toLowerCase()).to.be.equal("div");
        yield expect((_a = contentEl.firstElementChild.textContent) === null || _a === void 0 ? void 0 : _a.trim()).to.be.equal("this is content");
    }));
});
describe("constructor: content set to null successfully", () => {
    const container = new Dialog({
        // @ts-ignore
        content: null
    });
    it("constructor: content set to null successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const el = yield fixture(container);
        const cotentEl = el.querySelector(".kuc-dialog__dialog__content");
        yield expect((_a = cotentEl.textContent) === null || _a === void 0 ? void 0 : _a.trim()).to.be.equal("");
    }));
});
describe("property: content set string successfully", () => {
    const container = new Dialog();
    container.content = "this is content";
    it("content prop set successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const cotentEl = el.querySelector(".kuc-dialog__dialog__content");
        yield expect(cotentEl.textContent.trim()).to.be.equal("this is content");
    }));
});
describe("property: content set HTMLElement successfully", () => {
    const divElement = document.createElement("div");
    divElement.textContent = "this is content";
    const container = new Dialog();
    container.content = divElement;
    it("property: content set HTMLElement successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const el = yield fixture(container);
        const cotentEl = el.querySelector(".kuc-dialog__dialog__content");
        yield expect(cotentEl.firstElementChild.tagName.toLowerCase()).to.be.equal("div");
        yield expect((_a = cotentEl.firstElementChild.textContent) === null || _a === void 0 ? void 0 : _a.trim()).to.be.equal("this is content");
    }));
});
describe("property: content set HTMLElement from string successfully", () => {
    const divElement = "<div>this is content</div>";
    const container = new Dialog();
    container.content = divElement;
    it("property: content set HTMLElement from string successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const el = yield fixture(container);
        const contentEl = el.querySelector(".kuc-dialog__dialog__content");
        yield expect(contentEl.firstElementChild.tagName.toLowerCase()).to.be.equal("div");
        yield expect((_a = contentEl.firstElementChild.textContent) === null || _a === void 0 ? void 0 : _a.trim()).to.be.equal("this is content");
    }));
});
describe("property: content set to null successfully", () => {
    const container = new Dialog();
    // @ts-ignore
    container.content = null;
    it("property: content set to null successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const el = yield fixture(container);
        const contentEl = el.querySelector(".kuc-dialog__dialog__content");
        yield expect((_a = contentEl.textContent) === null || _a === void 0 ? void 0 : _a.trim()).to.be.equal("");
    }));
});
describe("content prop replace successfully", () => {
    const container = new Dialog({ content: "this is content" });
    container.content = "replace content";
    it("content prop replace successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const cotentEl = el.querySelector(".kuc-dialog__dialog__content");
        yield expect(cotentEl.textContent.trim()).to.be.equal("replace content");
    }));
});
