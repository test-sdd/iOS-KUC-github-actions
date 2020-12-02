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
describe("confirm error default value is null", () => {
    const container = new MobileRadioButton();
    it("confirm error default value is null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const errorEl = el.querySelector(".kuc-mobile-radio-button__error");
        const errorMessage = errorEl.textContent;
        yield expect(errorEl.hasAttribute("hidden")).to.be.equal(true);
        yield expect(errorMessage.trim()).to.be.equal("");
    }));
});
describe("error constructor set successfully", () => {
    const container = new MobileRadioButton({ error: "Error occurred!" });
    it("error constructor set successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const errorEl = el.querySelector(".kuc-mobile-radio-button__error");
        const errorMessage = errorEl.textContent;
        yield expect(errorEl.hasAttribute("hidden")).to.be.equal(false);
        yield expect(errorMessage.trim()).to.be.equal("Error occurred!");
    }));
});
describe("error prop replace successfully", () => {
    const container = new MobileRadioButton({ error: "options-error" });
    container.error = "Error occurred!";
    it("error prop replace successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const errorEl = el.querySelector(".kuc-mobile-radio-button__error");
        const errorMessage = errorEl.textContent;
        yield expect(errorEl.hasAttribute("hidden")).to.be.equal(false);
        yield expect(errorMessage.trim()).to.be.equal("Error occurred!");
    }));
});
describe("error constructor set to null successfully", () => {
    // @ts-expect-error
    const container = new MobileRadioButton({ error: null });
    it("error constructor set to null successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const errorEl = el.querySelector(".kuc-mobile-radio-button__error");
        const errorMessage = errorEl.textContent;
        yield expect(errorEl.hasAttribute("hidden")).to.be.equal(true);
        yield expect(errorMessage.trim()).to.be.equal("");
    }));
});
describe("error prop set to null successfully", () => {
    const container = new MobileRadioButton({ error: "Error occurred!" });
    // @ts-expect-error
    container.error = null;
    it("error prop set to null successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const errorEl = el.querySelector(".kuc-mobile-radio-button__error");
        const errorMessage = errorEl.textContent;
        yield expect(errorEl.hasAttribute("hidden")).to.be.equal(true);
        yield expect(errorMessage.trim()).to.be.equal("");
    }));
});
