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
describe("confirm requiredIcon default prop is false", () => {
    const container = new TextArea();
    it("confirm requiredIcon default prop is false", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const requiredEl = (yield el.querySelector(".kuc-textarea__label__required-icon"));
        yield expect(requiredEl.hasAttribute("hidden")).to.be.equal(true);
        yield expect(window.getComputedStyle(requiredEl).display).to.be.equal("none");
    }));
});
describe("requiredIcon constructor set to true successfully", () => {
    const container = new TextArea({ requiredIcon: true });
    it("requiredIcon constructor set to true successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const requiredIconEl = (yield el.querySelector(".kuc-textarea__label__required-icon"));
        yield expect(requiredIconEl.hasAttribute("hidden")).to.be.equal(false);
        yield expect(window.getComputedStyle(requiredIconEl).display).to.be.equal("inline");
    }));
});
describe("requiredIcon prop set to false successfully", () => {
    const container = new TextArea({ requiredIcon: true });
    container.requiredIcon = false;
    it("requiredIcon prop set to false successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const requiredIconEl = (yield el.querySelector(".kuc-textarea__label__required-icon"));
        yield expect(requiredIconEl.hasAttribute("hidden")).to.be.equal(true);
        yield expect(window.getComputedStyle(requiredIconEl).display).to.be.equal("none");
    }));
});
describe("requiredIcon default prop set to null successfully", () => {
    // @ts-ignore
    const container = new TextArea({ requiredIcon: null });
    it("requiredIcon default prop set to null successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const requiredEl = (yield el.querySelector(".kuc-textarea__label__required-icon"));
        yield expect(requiredEl.hasAttribute("hidden")).to.be.equal(true);
        yield expect(window.getComputedStyle(requiredEl).display).to.be.equal("none");
    }));
});
describe("requiredIcon prop set to null successfully", () => {
    const container = new TextArea();
    // @ts-ignore
    container.requiredIcon = null;
    it("requiredIcon prop set to null successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const requiredEl = (yield el.querySelector(".kuc-textarea__label__required-icon"));
        yield expect(requiredEl.hasAttribute("hidden")).to.be.equal(true);
        yield expect(window.getComputedStyle(requiredEl).display).to.be.equal("none");
    }));
});
