var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { expect, fixture, elementUpdated } from "@open-wc/testing";
import { Spinner } from "../index";
describe("Render successfully with close method", () => {
    const container = new Spinner({
        text: "close-spinner"
    });
    container.open();
    it('have "kuc-spinner"', () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const beforeEl = el.querySelector(".kuc-spinner__spinner__text");
        expect(beforeEl.innerText).to.be.equal("close-spinner");
        container.close();
        yield elementUpdated(el);
        const bodyEl = document.querySelector("body");
        const afterEl = bodyEl.querySelectorAll(".kuc-spinner__spinner__text");
        afterEl.forEach(elem => {
            expect(elem.textContent.trim()).not.to.be.equal("close-spinner");
        });
    }));
});
