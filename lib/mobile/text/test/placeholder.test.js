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
describe("confirm placeholder default prop is null", () => {
    const container = new MobileText();
    it("confirm placeholder default prop is null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const inputEl = el.querySelector(".kuc-mobile-text__input-form__input");
        expect(inputEl.placeholder).to.be.equal("");
    }));
});
describe("placeholder constructor set successfully", () => {
    const container = new MobileText({ placeholder: "Apple" });
    it("placeholder constructor set successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const inputEl = el.querySelector(".kuc-mobile-text__input-form__input");
        yield expect(inputEl.placeholder).to.be.equal("Apple");
    }));
});
describe("placeholder prop set successfully", () => {
    const container = new MobileText();
    container.placeholder = "Apple";
    it("placeholder prop set successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const inputEl = el.querySelector(".kuc-mobile-text__input-form__input");
        expect(inputEl.placeholder).to.be.equal("Apple");
    }));
});
describe("placeholder prop replace successfully", () => {
    const container = new MobileText({ placeholder: "Orange" });
    container.placeholder = "Apple";
    it("placeholder prop replace successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const inputEl = el.querySelector(".kuc-mobile-text__input-form__input");
        expect(inputEl.placeholder).to.be.equal("Apple");
    }));
});
