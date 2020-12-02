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
import { MobileTextArea } from "../index";
describe("confirm error default prop is null", () => {
    const container = new MobileTextArea();
    it("confirm error default prop is null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const errorEl = (yield el.querySelector(".kuc-mobile-textarea__error"));
        const errorText = errorEl.textContent;
        yield expect(errorEl.hasAttribute("hidden")).to.be.equal(true);
        yield expect(errorText.trim()).to.be.equal("");
    }));
});
describe("error constructor set successfully", () => {
    const container = new MobileTextArea({ error: "Error occurred!" });
    it("error constructor set successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const errorEl = (yield el.querySelector(".kuc-mobile-textarea__error"));
        const errorText = errorEl.textContent;
        yield expect(errorEl.hasAttribute("hidden")).to.be.equal(false);
        yield expect(errorText.trim()).to.be.equal("Error occurred!");
    }));
});
describe("error prop replace successfully", () => {
    const container = new MobileTextArea({ error: "options-error" });
    container.error = "Error occurred!";
    it("error prop replace successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const errorEl = (yield el.querySelector(".kuc-mobile-textarea__error"));
        const errorText = errorEl.textContent;
        yield expect(errorEl.hasAttribute("hidden")).to.be.equal(false);
        yield expect(errorText.trim()).to.be.equal("Error occurred!");
    }));
});
describe("error default prop set to null successfully", () => {
    // @ts-expect-error
    const container = new MobileTextArea({ error: null });
    it("error default prop set to null successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const errorEl = (yield el.querySelector(".kuc-mobile-textarea__error"));
        const errorText = errorEl.innerText;
        yield expect(errorEl.hasAttribute("hidden")).to.be.equal(true);
        yield expect(errorText.trim()).to.be.equal("");
    }));
});
describe("error prop set to null successfully", () => {
    const container = new MobileTextArea({ error: "Error occurred!" });
    // @ts-expect-error
    container.error = null;
    it("error prop set to null successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const errorEl = (yield el.querySelector(".kuc-mobile-textarea__error"));
        const errorText = errorEl.textContent;
        yield expect(errorEl.hasAttribute("hidden")).to.be.equal(true);
        yield expect(errorText.trim()).to.be.equal("");
    }));
});
