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
describe("error default prop is null", () => {
    const container = new Dropdown({});
    it("error default prop is null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const errorEl = el.querySelector(".kuc-dropdown__error");
        // eslint-disable-next-line no-unused-expressions
        expect(errorEl).not.to.be.displayed;
    }));
});
describe("error default prop set successfully", () => {
    const container = new Dropdown({ error: "error-message" });
    it("error default prop set successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const errorEl = el.querySelector(".kuc-dropdown__error");
        expect(errorEl.innerText).to.have.equal("error-message");
        // eslint-disable-next-line no-unused-expressions
        expect(errorEl).to.be.displayed;
    }));
});
describe("error prop replace successfully", () => {
    const container = new Dropdown({
        error: "error-message"
    });
    container.error = "replace-error";
    it("error prop replace successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const errorEl = el.querySelector(".kuc-dropdown__error");
        expect(errorEl.innerText).to.have.equal("replace-error");
        // eslint-disable-next-line no-unused-expressions
        expect(errorEl).to.be.displayed;
    }));
});
describe("error defaoult prop set to null", () => {
    const container = new Dropdown({
        // @ts-ignore
        error: null
    });
    it("error default prop set to null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const errorEl = el.querySelector(".kuc-dropdown__error");
        // eslint-disable-next-line no-unused-expressions
        expect(errorEl).not.to.be.displayed;
    }));
});
describe("error prop set to null", () => {
    const container = new Dropdown({
        error: "error-message"
    });
    // @ts-ignore
    container.error = null;
    it("error prop set to null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const errorEl = el.querySelector(".kuc-dropdown__error");
        // eslint-disable-next-line no-unused-expressions
        expect(errorEl).not.to.be.displayed;
    }));
});
