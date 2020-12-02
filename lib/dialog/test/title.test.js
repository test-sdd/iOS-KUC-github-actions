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
describe("confirm title default prop is null", () => {
    const container = new Dialog();
    it("confirm title default prop is null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const titleEl = el.querySelector(".kuc-dialog__dialog__header__title");
        yield expect(titleEl.textContent).to.be.equal("");
    }));
});
describe("title constructor set successfully", () => {
    const container = new Dialog({
        title: "this is title"
    });
    it("title constructor set successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const titleEl = el.querySelector(".kuc-dialog__dialog__header__title");
        yield expect(titleEl.textContent).to.be.equal("this is title");
    }));
});
describe("title prop set successfully", () => {
    const container = new Dialog();
    container.title = "this is title";
    it("title prop set successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const titleEl = el.querySelector(".kuc-dialog__dialog__header__title");
        yield expect(titleEl.textContent).to.be.equal("this is title");
    }));
});
describe("title constructor set to null successfully", () => {
    const container = new Dialog({
        // @ts-ignore
        title: null
    });
    it("title constructor set to null successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const titleEl = el.querySelector(".kuc-dialog__dialog__header__title");
        yield expect(titleEl.textContent).to.be.equal("");
    }));
});
describe("title prop set to null successfully", () => {
    const container = new Dialog();
    // @ts-ignore
    container.title = null;
    it("title prop set to null successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const titleEl = el.querySelector(".kuc-dialog__dialog__header__title");
        yield expect(titleEl.textContent).to.be.equal("");
    }));
});
describe("title prop replace successfully", () => {
    const container = new Dialog({
        title: "this is title"
    });
    container.title = "this is replace title";
    it("title prop replace successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const titleEl = el.querySelector(".kuc-dialog__dialog__header__title");
        yield expect(titleEl.textContent).to.be.equal("this is replace title");
    }));
});
