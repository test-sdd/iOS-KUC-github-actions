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
import { Dropdown } from "../index";
describe("label default prop is null", () => {
    const container = new Dropdown({});
    it("label default prop is null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const labelEl = el.querySelector(".kuc-dropdown__label__text");
        // eslint-disable-next-line no-unused-expressions
        expect(labelEl).to.be.visible;
    }));
});
describe("label prop set successfully", () => {
    const container = new Dropdown({ label: "options-label" });
    it("label prop set successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const labelEl = el.querySelector(".kuc-dropdown__label__text");
        expect(labelEl.innerText).to.have.equal("options-label");
    }));
});
describe("label prop replace successfully", () => {
    const container = new Dropdown({
        label: "options-label"
    });
    container.label = "replace-label";
    it("label prop replace successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const labelEl = el.querySelector(".kuc-dropdown__label__text");
        expect(labelEl.textContent).to.have.equal("replace-label");
    }));
});
describe("label default prop set to null", () => {
    const container = new Dropdown({
        // @ts-ignore
        label: null
    });
    it("label default prop set to null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const labelEl = el.querySelector(".kuc-dropdown__label");
        // eslint-disable-next-line no-unused-expressions
        expect(labelEl).to.be.visible;
    }));
});
describe("label prop set to null", () => {
    const container = new Dropdown({
        label: "options-label"
    });
    // @ts-ignore
    container.label = null;
    it("label prop set to null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const labelEl = el.querySelector(".kuc-dropdown__label");
        // eslint-disable-next-line no-unused-expressions
        expect(labelEl).to.be.visible;
    }));
});
