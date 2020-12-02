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
describe("confirm textAlign default prop is left", () => {
    const container = new Text();
    it("confirm textAlign default prop is left", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const inputEl = el.querySelector(".kuc-text__text__input-form__input");
        yield expect(inputEl.getAttribute("textalign")).to.be.equal("left");
        yield expect(window.getComputedStyle(inputEl).textAlign).to.be.equal("left");
    }));
});
describe("textAlign constructor set successfully", () => {
    const container = new Text({ textAlign: "right" });
    it("textAlign constructor set successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const inputEl = el.querySelector(".kuc-text__text__input-form__input");
        yield expect(inputEl.getAttribute("textalign")).to.be.equal("right");
        yield expect(window.getComputedStyle(inputEl).textAlign).to.be.equal("right");
    }));
});
describe("textAlign prop set successfully", () => {
    const container = new Text();
    container.textAlign = "right";
    it("textAlign prop set successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const inputEl = el.querySelector(".kuc-text__text__input-form__input");
        yield expect(inputEl.getAttribute("textalign")).to.be.equal("right");
        yield expect(window.getComputedStyle(inputEl).textAlign).to.be.equal("right");
    }));
});
describe("textAlign prop replace successfully", () => {
    const container = new Text({ textAlign: "left" });
    container.textAlign = "right";
    it("textAlign prop replace successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const inputEl = el.querySelector(".kuc-text__text__input-form__input");
        yield expect(inputEl.getAttribute("textalign")).to.be.equal("right");
        yield expect(window.getComputedStyle(inputEl).textAlign).to.be.equal("right");
    }));
});
