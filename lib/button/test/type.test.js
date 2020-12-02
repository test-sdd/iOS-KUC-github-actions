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
describe("type default prop is normal", () => {
    const container = new Button({});
    it("type default prop is normal", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const buttonEl = (yield el.querySelector(".kuc-button__button"));
        yield expect(["kuc-button__button", "kuc-button__button--normal"].every(c => buttonEl.classList.contains(c))).to.be.true;
    }));
});
describe("type prop set to normal successfully", () => {
    const container = new Button({
        type: "submit"
    });
    container.type = "normal";
    it("type prop set to normal successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const buttonEl = (yield el.querySelector(".kuc-button__button"));
        yield expect(["kuc-button__button", "kuc-button__button--normal"].every(c => buttonEl.classList.contains(c))).to.be.true;
    }));
});
describe("type prop set to alert successfully", () => {
    const container = new Button({
        type: "normal"
    });
    container.type = "alert";
    it("type prop set to alert successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const buttonEl = (yield el.querySelector(".kuc-button__button"));
        yield expect(["kuc-button__button", "kuc-button__button--alert"].every(c => buttonEl.classList.contains(c))).to.be.true;
    }));
});
describe("type prop set to submit successfully", () => {
    const container = new Button({
        type: "normal"
    });
    container.type = "submit";
    it("type prop set to submit successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const buttonEl = (yield el.querySelector(".kuc-button__button"));
        yield expect(["kuc-button__button", "kuc-button__button--submit"].every(c => buttonEl.classList.contains(c))).to.be.true;
    }));
});
describe("type default prop set to null", () => {
    // @ts-ignore
    const container = new Button({ type: null });
    it("type default prop set to null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const buttonEl = (yield el.querySelector(".kuc-button__button"));
        yield expect(["kuc-button__button", "kuc-button__button--normal"].every(c => buttonEl.classList.contains(c))).to.be.true;
    }));
});
describe("type prop set to null", () => {
    const container = new Button({ type: "normal" });
    // @ts-ignore
    container.type = null;
    it("type prop set to null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const buttonEl = (yield el.querySelector(".kuc-button__button"));
        yield expect(["kuc-button__button", "kuc-button__button--normal"].every(c => buttonEl.classList.contains(c))).to.be.true;
    }));
});
