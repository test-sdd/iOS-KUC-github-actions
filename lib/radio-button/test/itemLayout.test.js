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
import { RadioButton } from "../index";
describe("confirm itemLayout default value is horizontal", () => {
    const container = new RadioButton();
    it("itemLayout constructor set successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const selectMenuEl = el.querySelector(".kuc-radio-button__group__select-menu");
        yield expect(selectMenuEl.getAttribute("itemLayout")).to.be.equal("horizontal");
    }));
});
describe("itemLayout constructor set successfully", () => {
    const container = new RadioButton({ itemLayout: "vertical" });
    it("itemLayout constructor set successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const selectMenuEl = el.querySelector(".kuc-radio-button__group__select-menu");
        yield expect(selectMenuEl.getAttribute("itemLayout")).to.be.equal("vertical");
    }));
});
describe("itemLayout prop set to 'horizontal' successfully", () => {
    const container = new RadioButton({ itemLayout: "vertical" });
    container.itemLayout = "horizontal";
    it("itemLayout prop set to 'horizontal' successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const selectMenuEl = el.querySelector(".kuc-radio-button__group__select-menu");
        yield expect(selectMenuEl.getAttribute("itemLayout")).to.be.equal("horizontal");
    }));
});
describe("itemLayout prop set to 'vertical' successfully", () => {
    const container = new RadioButton({ itemLayout: "horizontal" });
    container.itemLayout = "vertical";
    it("itemLayout prop set to 'vertical' successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const selectMenuEl = el.querySelector(".kuc-radio-button__group__select-menu");
        yield expect(selectMenuEl.getAttribute("itemLayout")).to.be.equal("vertical");
    }));
});
describe("itemLayout constructor set to null successfully", () => {
    // @ts-ignore
    const container = new RadioButton({ itemLayout: null });
    it("itemLayout constructor set to null successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const selectMenuEl = el.querySelector(".kuc-radio-button__group__select-menu");
        yield expect(selectMenuEl.getAttribute("itemLayout")).to.be.equal("null");
    }));
});
describe("itemLayout prop set to null successfully", () => {
    const container = new RadioButton({ itemLayout: "vertical" });
    // @ts-ignore
    container.itemLayout = null;
    it("itemLayout prop set to null successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const selectMenuEl = el.querySelector(".kuc-radio-button__group__select-menu");
        yield expect(selectMenuEl.getAttribute("itemLayout")).to.be.equal("null");
    }));
});
