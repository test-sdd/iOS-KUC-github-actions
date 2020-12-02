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
import { MobileRadioButton } from "../index";
describe("confirm requiredIcon default value is false", () => {
    const container = new MobileRadioButton();
    it("confirm requiredIcon default value is false", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const requiredIconEl = el.querySelector(".kuc-mobile-radio-button__group__label__required-icon");
        yield expect(requiredIconEl.hasAttribute("hidden")).to.be.equal(true);
        yield expect(window.getComputedStyle(requiredIconEl).display).to.be.equal("none");
    }));
});
describe("requiredIcon constructor set successfully", () => {
    const container = new MobileRadioButton({ requiredIcon: true });
    it("requiredIcon constructor set successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const requiredIconEl = el.querySelector(".kuc-mobile-radio-button__group__label__required-icon");
        yield expect(requiredIconEl.hasAttribute("hidden")).to.be.equal(false);
        yield expect(window.getComputedStyle(requiredIconEl).display).to.be.equal("inline");
    }));
});
describe("requiredIcon prop set to true successfully", () => {
    const container = new MobileRadioButton({ requiredIcon: false });
    container.requiredIcon = true;
    it("requiredIcon prop set to true successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const requiredIconEl = el.querySelector(".kuc-mobile-radio-button__group__label__required-icon");
        yield expect(requiredIconEl.hasAttribute("hidden")).to.be.equal(false);
        yield expect(window.getComputedStyle(requiredIconEl).display).to.be.equal("inline");
    }));
});
describe("requiredIcon set to false successfully", () => {
    const container = new MobileRadioButton({ requiredIcon: true });
    container.requiredIcon = false;
    it("requiredIcon prop set to false successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const requiredIconEl = el.querySelector(".kuc-mobile-radio-button__group__label__required-icon");
        yield expect(requiredIconEl.hasAttribute("hidden")).to.be.equal(true);
        yield expect(window.getComputedStyle(requiredIconEl).display).to.be.equal("none");
    }));
});
describe("requiredIcon constructor set to null successfully", () => {
    // @ts-expect-error
    const container = new MobileRadioButton({ requiredIcon: null });
    it("requiredIcon constructor set to null successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const requiredEl = el.querySelector(".kuc-mobile-radio-button__group__label__required-icon");
        yield expect(requiredEl.hasAttribute("hidden")).to.be.equal(true);
        yield expect(window.getComputedStyle(requiredEl).display).to.be.equal("none");
    }));
});
describe("requiredIcon prop set to null successfully", () => {
    const container = new MobileRadioButton();
    // @ts-expect-error
    container.requiredIcon = null;
    it("requiredIcon prop set to null successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const requiredEl = el.querySelector(".kuc-mobile-radio-button__group__label__required-icon");
        yield expect(requiredEl.hasAttribute("hidden")).to.be.equal(true);
        yield expect(window.getComputedStyle(requiredEl).display).to.be.equal("none");
    }));
});
