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
import { MobileTextArea } from "../index";
describe("confirm disabled default prop is false", () => {
    const container = new MobileTextArea();
    it("confirm disabled default prop is false", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const textareaEl = (yield el.querySelector(".kuc-mobile-textarea__form__textarea"));
        yield expect(textareaEl.hasAttribute("disabled")).to.have.equal(false);
    }));
});
describe("disabled constructor set successfully", () => {
    const container = new MobileTextArea({ disabled: true });
    it("disabled constructor set successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const textareaEl = (yield el.querySelector(".kuc-mobile-textarea__form__textarea"));
        yield expect(textareaEl.hasAttribute("disabled")).to.have.equal(true);
    }));
});
describe("disabled prop set to true successfully", () => {
    const container = new MobileTextArea({ disabled: false });
    container.disabled = true;
    it("disabled prop set to true successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const textareaEl = (yield el.querySelector(".kuc-mobile-textarea__form__textarea"));
        yield expect(textareaEl.hasAttribute("disabled")).to.have.equal(true);
    }));
});
describe("disabled prop set to false successfully", () => {
    const container = new MobileTextArea({ disabled: true });
    container.disabled = false;
    it("disabled prop set to false successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const textareaEl = (yield el.querySelector(".kuc-mobile-textarea__form__textarea"));
        yield expect(textareaEl.hasAttribute("disabled")).to.have.equal(false);
    }));
});
describe("disabled default prop set to null successfully", () => {
    // @ts-expect-error
    const container = new MobileTextArea({ disabled: null });
    it("disabled default prop set to null successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const textareaEl = (yield el.querySelector(".kuc-mobile-textarea__form__textarea"));
        yield expect(textareaEl.hasAttribute("disabled")).to.have.equal(false);
    }));
});
describe("disabled prop set to null successfully", () => {
    const container = new MobileTextArea();
    // @ts-expect-error
    container.disabled = null;
    it("disabled prop set to null successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const textareaEl = (yield el.querySelector(".kuc-mobile-textarea__form__textarea"));
        yield expect(textareaEl.hasAttribute("disabled")).to.have.equal(false);
    }));
});
