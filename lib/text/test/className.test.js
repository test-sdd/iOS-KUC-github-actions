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
import { Text } from "../index";
describe("confirm className default prop is null", () => {
    const container = new Text();
    it("confirm className default prop is null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el.classList.length).to.be.equal(0);
    }));
});
describe("className constructor set successfully", () => {
    const container = new Text({ className: "options-class" });
    it("className constructor set successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el.classList.contains("options-class")).to.be.equal(true);
        yield expect(el.classList.length).to.be.equal(1);
    }));
});
describe("className prop set successfully", () => {
    const container = new Text();
    container.className = "options-class";
    it("className prop set successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el.classList.contains("options-class")).to.be.equal(true);
        yield expect(el.classList.length).to.be.equal(1);
    }));
});
describe("className prop replace successfully", () => {
    const container = new Text({ className: "options-class" });
    container.className = "replace-class";
    it("className prop replace successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el.classList.contains("replace-class")).to.be.equal(true);
        yield expect(el.classList.length).to.be.equal(1);
    }));
});
describe("className default prop set to null", () => {
    // @ts-ignore
    const container = new Text({ className: null });
    it("className default prop set to null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el.classList.length).to.be.equal(1);
        yield expect(el.className).to.have.equals("null");
    }));
});
describe("className prop set to null", () => {
    const container = new Text();
    // @ts-ignore
    container.className = null;
    it("className prop set to null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el.classList.length).to.be.equal(1);
        yield expect(el.className).to.have.equals("null");
    }));
});
