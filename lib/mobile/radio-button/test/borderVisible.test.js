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
describe("confirm borderVisible default value is true", () => {
    const container = new MobileRadioButton();
    it("confirm borderVisible default value is true", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const selectMenuEl = el.querySelector(".kuc-mobile-radio-button__group__select-menu");
        yield expect(selectMenuEl.hasAttribute("borderVisible")).to.be.equal(true);
    }));
});
describe("borderVisible constructor set successfully", () => {
    const container = new MobileRadioButton({ borderVisible: false });
    it("borderVisible constructor set successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const selectMenuEl = el.querySelector(".kuc-mobile-radio-button__group__select-menu");
        yield expect(selectMenuEl.hasAttribute("borderVisible")).to.be.equal(false);
    }));
});
describe("borderVisible prop set to true successfully", () => {
    const container = new MobileRadioButton({ borderVisible: false });
    container.borderVisible = true;
    it("borderVisible prop set to true successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const selectMenuEl = el.querySelector(".kuc-mobile-radio-button__group__select-menu");
        yield expect(selectMenuEl.hasAttribute("borderVisible")).to.be.equal(true);
    }));
});
describe("borderVisible prop set to false successfully", () => {
    const container = new MobileRadioButton({ borderVisible: true });
    container.borderVisible = false;
    it("borderVisible prop set to false successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const selectMenuEl = el.querySelector(".kuc-mobile-radio-button__group__select-menu");
        yield expect(selectMenuEl.hasAttribute("borderVisible")).to.be.equal(false);
    }));
});
describe("borderVisible constructor set to null successfully", () => {
    // @ts-expect-error
    const container = new MobileRadioButton({ borderVisible: null });
    it("borderVisible constructor set to null successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const selectMenuEl = el.querySelector(".kuc-mobile-radio-button__group__select-menu");
        yield expect(selectMenuEl.hasAttribute("borderVisible")).to.be.equal(false);
    }));
});
describe("borderVisible prop set to null successfully", () => {
    const container = new MobileRadioButton({ borderVisible: true });
    // @ts-expect-error
    container.borderVisible = null;
    it("borderVisible prop set to null successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const selectMenuEl = el.querySelector(".kuc-mobile-radio-button__group__select-menu");
        yield expect(selectMenuEl.hasAttribute("borderVisible")).to.be.equal(false);
    }));
});
