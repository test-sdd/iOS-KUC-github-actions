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
import { Button } from "../index";
describe("className default prop is null", () => {
    const container = new Button();
    it("className default prop is null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el.classList.length).to.be.equal(0);
    }));
});
describe("className default prop set successfully", () => {
    const container = new Button({
        className: "options-class"
    });
    it("className default prop set successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el.classList.length).to.be.equal(1);
        yield expect(el.className).to.have.equals("options-class");
    }));
});
describe("className prop replace successfully", () => {
    const container = new Button({
        className: "options-class"
    });
    container.className = "replace-class";
    it("className prop replace successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el.classList.length).to.be.equal(1);
        yield expect(el.className).to.have.equals("replace-class");
    }));
});
describe("className default prop set to null", () => {
    // @ts-ignore
    const container = new Button({ className: null });
    it("className default prop set to null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el.classList.length).to.be.equal(1);
        yield expect(el.className).to.have.equals("null");
    }));
});
describe("className prop set to null", () => {
    const container = new Button();
    // @ts-ignore
    container.className = null;
    it("className prop set to null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el.classList.length).to.be.equal(1);
        yield expect(el.className).to.have.equals("null");
    }));
});
