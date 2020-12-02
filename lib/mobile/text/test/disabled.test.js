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
import { MobileText } from "../index";
describe("confirm disabled default prop is false", () => {
    const container = new MobileText();
    it("confirm disabled default prop is false", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const inputEl = (yield el.querySelector(".kuc-mobile-text__input-form__input"));
        yield expect(inputEl.hasAttribute("disabled")).to.have.equal(false);
    }));
});
describe("disabled constructor set successfully", () => {
    const container = new MobileText({ disabled: true });
    it("disabled constructor set successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const inputEl = (yield el.querySelector(".kuc-mobile-text__input-form__input"));
        yield expect(inputEl.hasAttribute("disabled")).to.have.equal(true);
    }));
});
describe("disabled prop set to true successfully", () => {
    const container = new MobileText({ disabled: false });
    container.disabled = true;
    it("disabled prop set to true successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const inputEl = (yield el.querySelector(".kuc-mobile-text__input-form__input"));
        yield expect(inputEl.hasAttribute("disabled")).to.have.equal(true);
    }));
});
describe("disabled prop set to false successfully", () => {
    const container = new MobileText({ disabled: true });
    container.disabled = false;
    it("disabled prop set to false successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const inputEl = (yield el.querySelector(".kuc-mobile-text__input-form__input"));
        yield expect(inputEl.hasAttribute("disabled")).to.have.equal(false);
    }));
});
