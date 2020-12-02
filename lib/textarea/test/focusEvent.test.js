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
import { TextArea } from "../index";
describe("Function focus event run successfully", () => {
    const container = new TextArea({ value: "Orange" });
    container.addEventListener("focus", (event) => {
        expect(event.detail.value).to.have.equal("Orange");
    });
    it("Function focus event run successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const inputEl = el.querySelector(".kuc-textarea__textarea");
        inputEl.focus();
    }));
});
