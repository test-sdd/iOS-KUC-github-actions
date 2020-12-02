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
import { MultiChoice } from "../index";
describe("error default prop is null", () => {
    const container = new MultiChoice({});
    it("error default prop is null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const errorEl = (yield el.querySelector(".kuc-multi-choice__error"));
        yield expect(errorEl).to.be.visible;
    }));
});
describe("error default prop set successfully", () => {
    const container = new MultiChoice({ error: "error-message" });
    it("error default prop set successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const errorEl = (yield el.querySelector(".kuc-multi-choice__error"));
        yield expect(errorEl.innerText).to.have.equals("error-message");
    }));
});
describe("error prop replace successfully", () => {
    const container = new MultiChoice({
        error: "error-message"
    });
    container.error = "replace-error";
    it("error prop replace successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const errorEl = (yield el.querySelector(".kuc-multi-choice__error"));
        yield expect(errorEl.innerText).to.have.equals("replace-error");
    }));
});
describe("error default prop set to null", () => {
    const container = new MultiChoice({
        // @ts-ignore
        error: null
    });
    it("error default prop set to null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const errorEl = (yield el.querySelector(".kuc-multi-choice__error"));
        yield expect(errorEl).to.be.visible;
    }));
});
describe("error prop set to null", () => {
    const container = new MultiChoice({
        error: "error-message"
    });
    // @ts-ignore
    container.error = null;
    it("error prop set to null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const errorEl = (yield el.querySelector(".kuc-multi-choice__error"));
        yield expect(errorEl).to.be.visible;
    }));
});
