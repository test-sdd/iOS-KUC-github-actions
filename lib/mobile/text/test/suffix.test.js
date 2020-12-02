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
describe("confirm suffix default prop is null", () => {
    const container = new MobileText();
    it("confirm suffix default prop is null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const suffixEl = el.querySelector(".kuc-mobile-text__input-form__suffix");
        yield expect(suffixEl.hasAttribute("hidden")).to.be.equal(true);
    }));
});
describe("suffix constructor set successfully", () => {
    const container = new MobileText({ suffix: "yen" });
    it("suffix constructor set successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const suffixEl = el.querySelector(".kuc-mobile-text__input-form__suffix");
        yield expect(suffixEl.hasAttribute("hidden")).to.be.equal(false);
        yield expect(suffixEl.innerText).to.be.equal("yen");
    }));
});
describe("suffix prop set successfully", () => {
    const container = new MobileText();
    container.suffix = "yen";
    it("suffix prop set successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const suffixEl = el.querySelector(".kuc-mobile-text__input-form__suffix");
        yield expect(suffixEl.hasAttribute("hidden")).to.be.equal(false);
        yield expect(suffixEl.innerText).to.be.equal("yen");
    }));
});
describe("suffix prop replace successfully", () => {
    const container = new MobileText({ suffix: "$" });
    container.suffix = "yen";
    it("suffix prop replace successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const suffixEl = el.querySelector(".kuc-mobile-text__input-form__suffix");
        yield expect(suffixEl.hasAttribute("hidden")).to.be.equal(false);
        yield expect(suffixEl.innerText).to.be.equal("yen");
    }));
});
describe("suffix prop set to null successfully", () => {
    const container = new MobileText({ suffix: "$" });
    // @ts-expect-error
    container.suffix = null;
    it("suffix prop set to null successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const suffixEl = el.querySelector(".kuc-mobile-text__input-form__suffix");
        yield expect(suffixEl.hasAttribute("hidden")).to.be.equal(true);
    }));
});
