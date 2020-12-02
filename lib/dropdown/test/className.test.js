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
describe("className default prop is null", () => {
    const container = new Dropdown();
    it("className default prop is null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        expect(el.classList.length).to.be.equal(0);
    }));
});
describe("className default prop set successfully", () => {
    const container = new Dropdown({ className: "options-class" });
    it("className default prop set successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        expect(el.classList.length).to.be.equal(1);
        expect(el.className).to.have.equal("options-class");
    }));
});
describe("className prop replace successfully", () => {
    const container = new Dropdown({
        className: "options-class"
    });
    container.className = "replace-class";
    it("className prop replace successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        expect(el.classList.length).to.be.equal(1);
        expect(el.className).to.have.equal("replace-class");
    }));
});
describe("className default prop set to null", () => {
    // @ts-ignore
    const container = new Dropdown({ className: null });
    it("className default prop set to null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        expect(el.classList.length).to.be.equal(1);
        expect(el.className).to.have.equal("null");
    }));
});
describe("className prop set to null", () => {
    const container = new Dropdown();
    // @ts-ignore
    container.className = null;
    it("className prop set to null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        expect(el.classList.length).to.be.equal(1);
        expect(el.className).to.have.equal("null");
    }));
});
