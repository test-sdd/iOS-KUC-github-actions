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
describe("text default prop is null", () => {
    const container = new Button({});
    it("text default prop is null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const buttonEl = (yield el.querySelector(".kuc-button__button"));
        yield expect(buttonEl.innerText).to.have.equals("");
    }));
});
describe("text default prop set successfully", () => {
    const container = new Button({ text: "Alert" });
    it("text default prop set successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const buttonEl = (yield el.querySelector(".kuc-button__button"));
        yield expect(buttonEl.innerText).to.have.equals("Alert");
    }));
});
describe("text prop replace successfully", () => {
    const container = new Button({ text: "Alert" });
    container.text = "update";
    it("text prop replace successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const buttonEl = (yield el.querySelector(".kuc-button__button"));
        yield expect(buttonEl.innerText).to.have.equals("update");
    }));
});
describe("text default prop set to null", () => {
    // @ts-ignore
    const container = new Button({ text: null });
    it("text default prop set to null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const buttonEl = (yield el.querySelector(".kuc-button__button"));
        yield expect(buttonEl.innerText).to.have.equals("");
    }));
});
describe("text prop set to null", () => {
    const container = new Button({});
    // @ts-ignore
    container.text = null;
    it("text prop set to null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const buttonEl = (yield el.querySelector(".kuc-button__button"));
        yield expect(buttonEl.innerText).to.have.equals("");
    }));
});
