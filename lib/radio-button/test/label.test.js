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
describe("confirm label default value is null", () => {
    const container = new RadioButton();
    it("confirm label default value is null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const labelEl = el.querySelector(".kuc-radio-button__group__label");
        const labelRadioButtonEl = el.querySelector(".kuc-radio-button__group__label__text");
        yield expect(labelEl.hasAttribute("hidden")).to.be.equal(true);
        yield expect(labelRadioButtonEl.textContent).to.be.equal("");
    }));
});
describe("label constructor set successfully", () => {
    const container = new RadioButton({ label: "options-label" });
    it("label constructor set successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const labelEl = el.querySelector(".kuc-radio-button__group__label");
        const labelRadioButtonEl = el.querySelector(".kuc-radio-button__group__label__text");
        yield expect(labelEl.hasAttribute("hidden")).to.be.equal(false);
        yield expect(labelRadioButtonEl.textContent).to.be.equal("options-label");
    }));
});
describe("label prop set successfully", () => {
    const container = new RadioButton();
    container.label = "options-label";
    it("label prop set successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const labelEl = el.querySelector(".kuc-radio-button__group__label");
        const labelRadioButtonEl = el.querySelector(".kuc-radio-button__group__label__text");
        yield expect(labelEl.hasAttribute("hidden")).to.be.equal(false);
        yield expect(labelRadioButtonEl.textContent).to.be.equal("options-label");
    }));
});
describe("label prop replace successfully", () => {
    const container = new RadioButton({ label: "options-label" });
    container.label = "replace-label";
    it("label prop replace successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const labelEl = el.querySelector(".kuc-radio-button__group__label");
        const labelRadioButtonEl = el.querySelector(".kuc-radio-button__group__label__text");
        yield expect(labelEl.hasAttribute("hidden")).to.be.equal(false);
        yield expect(labelRadioButtonEl.textContent).to.be.equal("replace-label");
    }));
});
describe("label constructor set to null successfully", () => {
    const container = new RadioButton({
        // @ts-ignore
        label: null
    });
    it("label constructor set to null successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const labelEl = el.querySelector(".kuc-radio-button__group__label");
        yield expect(labelEl.hasAttribute("hidden")).to.be.equal(true);
    }));
});
describe("label prop set to null successfully", () => {
    const container = new RadioButton({
        label: "options-label"
    });
    // @ts-ignore
    container.label = null;
    it("label prop set to null successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const labelEl = el.querySelector(".kuc-radio-button__group__label");
        yield expect(labelEl.hasAttribute("hidden")).to.be.equal(true);
    }));
});
