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
describe("confirm visible default prop is true", () => {
    const container = new MobileTextArea();
    it("confirm visible default prop is true", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el.hasAttribute("hidden")).to.have.equal(false);
        yield expect(window.getComputedStyle(el).display).to.be.equal("block");
    }));
});
describe("visible constructor set to true successfully", () => {
    const container = new MobileTextArea({ visible: false });
    it("visible constructor set to true successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el.hasAttribute("hidden")).to.have.equal(true);
        yield expect(window.getComputedStyle(el).display).to.be.equal("none");
    }));
});
describe("visible prop set to true successfully", () => {
    const container = new MobileTextArea({ visible: false });
    container.visible = true;
    it("visible prop set to true successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el.hasAttribute("hidden")).to.have.equal(false);
        yield expect(window.getComputedStyle(el).display).to.be.equal("block");
    }));
});
describe("visible prop set to false successfully", () => {
    const container = new MobileTextArea({ visible: true });
    container.visible = false;
    it("visible prop set to false successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el.hasAttribute("hidden")).to.have.equal(true);
        yield expect(window.getComputedStyle(el).display).to.be.equal("none");
    }));
});
describe("visible default prop set to null successfully", () => {
    // @ts-expect-error
    const container = new MobileTextArea({ visible: null });
    it("visible default prop set to true successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el.hasAttribute("hidden")).to.have.equal(true);
        yield expect(window.getComputedStyle(el).display).to.be.equal("none");
    }));
});
describe("visible prop set to null successfully", () => {
    const container = new MobileTextArea();
    // @ts-expect-error
    container.visible = null;
    it("visible prop set to null successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el.hasAttribute("hidden")).to.have.equal(true);
        yield expect(window.getComputedStyle(el).display).to.be.equal("none");
    }));
});
