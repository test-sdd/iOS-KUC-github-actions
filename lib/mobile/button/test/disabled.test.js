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
import { MobileButton } from "../index";
describe("disabled default prop is false", () => {
    const container = new MobileButton({});
    it("disabled default prop is false", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const buttonEl = (yield el.querySelector(".kuc-mobile-button__button"));
        yield expect(buttonEl.hasAttribute("disabled")).to.have.equal(false);
    }));
});
describe("disabled constructor set successfully", () => {
    const container = new MobileButton({ disabled: true });
    it("disabled constructor set successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const buttonEl = (yield el.querySelector(".kuc-mobile-button__button"));
        yield expect(buttonEl.hasAttribute("disabled")).to.have.equal(true);
    }));
});
describe("disabled prop set to true successfully", () => {
    const container = new MobileButton({ disabled: false });
    container.disabled = true;
    it("disabled prop set to true successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el.querySelector(".kuc-mobile-button__button")).to.have.attr("disabled");
    }));
});
describe("disabled prop set to false successfully", () => {
    const container = new MobileButton({ disabled: true });
    container.disabled = false;
    it("disabled prop set to false successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el.querySelector(".kuc-mobile-button__button")).not.to.have.attr("disabled");
    }));
});
describe("disabled default prop set to null", () => {
    // @ts-ignore
    const container = new MobileButton({ disabled: null });
    it("disabled default prop set to null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el.querySelector(".kuc-mobile-button__button")).not.to.have.attr("disabled");
    }));
});
describe("disabled prop set to null", () => {
    const container = new MobileButton({});
    // @ts-ignore
    container.disabled = null;
    it("disabled prop set to null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el.querySelector(".kuc-mobile-button__button")).not.to.have.attr("disabled");
    }));
});
