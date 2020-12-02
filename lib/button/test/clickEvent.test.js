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
describe("Function onClick event run successfully", () => {
    const container = new Button({});
    container.addEventListener("click", (event) => {
        container.text = "on click";
    });
    it("Function onClick event run successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const buttonEl = el.querySelector(".kuc-button__button");
        yield buttonEl.click();
        expect(buttonEl.innerText).to.be.equal("on click");
    }));
});
describe("Function onClick event not run successfully", () => {
    const container = new Button({
        text: "checkOnClick"
    });
    container.disabled = true;
    container.addEventListener("click", (event) => {
        container.text = "on click";
    });
    it("Function onClick event not run successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const buttonEl = el.querySelector(".kuc-button__button");
        yield buttonEl.click();
        expect(buttonEl.innerText).to.be.equal("checkOnClick");
    }));
});
