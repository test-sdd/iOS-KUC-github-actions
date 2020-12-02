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
import { TextArea } from "../index";
describe("confirm label default prop is null", () => {
    const container = new TextArea();
    it("confirm label default prop is null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const labelEl = (yield el.querySelector(".kuc-textarea__label"));
        yield expect(labelEl.hasAttribute("hidden")).to.be.equal(true);
    }));
});
describe("label constructor set successfully", () => {
    const container = new TextArea({ label: "options-label" });
    it("label constructor set successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const labelEl = (yield el.querySelector(".kuc-textarea__label"));
        const labelTextEl = (yield el.querySelector(".kuc-textarea__label__text"));
        yield expect(labelEl.hasAttribute("hidden")).to.be.equal(false);
        yield expect(labelTextEl.textContent).to.be.equal("options-label");
    }));
});
describe("label prop set successfully", () => {
    const container = new TextArea();
    container.label = "options-label";
    it("label prop set successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const labelEl = (yield el.querySelector(".kuc-textarea__label"));
        const labelTextEl = (yield el.querySelector(".kuc-textarea__label__text"));
        yield expect(labelEl.hasAttribute("hidden")).to.be.equal(false);
        yield expect(labelTextEl.textContent).to.be.equal("options-label");
    }));
});
describe("label prop replace successfully", () => {
    const container = new TextArea({ label: "options-label" });
    container.label = "replace-label";
    it("label prop replace successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const labelEl = (yield el.querySelector(".kuc-textarea__label"));
        const labelTextEl = (yield el.querySelector(".kuc-textarea__label__text"));
        yield expect(labelEl.hasAttribute("hidden")).to.be.equal(false);
        yield expect(labelTextEl.textContent).to.be.equal("replace-label");
    }));
});
describe("label default prop set to null successfully", () => {
    // @ts-ignore
    const container = new TextArea({ label: null });
    it("label prop set to null successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const labelEl = (yield el.querySelector(".kuc-textarea__label"));
        yield expect(labelEl.hasAttribute("hidden")).to.be.equal(true);
    }));
});
describe("label prop set to null successfully", () => {
    const container = new TextArea({
        label: "options-label"
    });
    // @ts-ignore
    container.label = null;
    it("label prop set to null successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const labelEl = (yield el.querySelector(".kuc-textarea__label"));
        yield expect(labelEl.hasAttribute("hidden")).to.be.equal(true);
    }));
});
