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
describe("confirm prefix default prop is null", () => {
    const container = new MobileText();
    it("confirm prefix default prop is null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const prefixEl = el.querySelector(".kuc-mobile-text__input-form__prefix");
        yield expect(prefixEl.hasAttribute("hidden")).to.be.equal(true);
    }));
});
describe("prefix constructor set successfully", () => {
    const container = new MobileText({ prefix: "$" });
    it("prefix constructor set successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const prefixEl = el.querySelector(".kuc-mobile-text__input-form__prefix");
        yield expect(prefixEl.hasAttribute("hidden")).to.be.equal(false);
        yield expect(prefixEl.innerText).to.be.equal("$");
    }));
});
describe("prefix prop set successfully", () => {
    const container = new MobileText();
    container.prefix = "$";
    it("prefix prop set successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const prefixEl = el.querySelector(".kuc-mobile-text__input-form__prefix");
        yield expect(prefixEl.hasAttribute("hidden")).to.be.equal(false);
        yield expect(prefixEl.innerText).to.be.equal("$");
    }));
});
describe("prefix prop replace successfully", () => {
    const container = new MobileText({ prefix: "yen" });
    container.prefix = "$";
    it("prefix prop replace successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const prefixEl = el.querySelector(".kuc-mobile-text__input-form__prefix");
        yield expect(prefixEl.hasAttribute("hidden")).to.be.equal(false);
        yield expect(prefixEl.innerText).to.be.equal("$");
    }));
});
describe("prefix prop set to null successfully", () => {
    const container = new MobileText({ prefix: "$" });
    // @ts-expect-error
    container.prefix = null;
    it("prefix prop set to null successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const prefixEl = el.querySelector(".kuc-mobile-text__input-form__prefix");
        yield expect(prefixEl.hasAttribute("hidden")).to.be.equal(true);
    }));
});
