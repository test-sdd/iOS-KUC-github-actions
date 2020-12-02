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
import { Spinner } from "../index";
describe("when text prop is nothing, text is displayed 'now loading…'", () => {
    const container = new Spinner();
    container.open();
    it("when text prop is nothing, text is displayed 'now loading…'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const inputTextEl = (yield el.querySelector(".kuc-spinner__spinner__text"));
        yield expect(inputTextEl.innerText).to.have.equal("now loading…");
    }));
});
describe("text prop set to constructor successfully", () => {
    const container = new Spinner({
        text: "display spinner"
    });
    container.open();
    it("text prop set to constructor successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const inputTextEl = (yield el.querySelector(".kuc-spinner__spinner__text"));
        yield expect(inputTextEl.innerText).to.have.equal("display spinner");
    }));
});
describe("text prop replace successfully", () => {
    const container = new Spinner({
        text: "display spinner"
    });
    container.text = "replace-text";
    it("text prop replace successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const replaceTextEl = (yield el.querySelector(".kuc-spinner__spinner__text"));
        yield expect(replaceTextEl.innerText).to.have.equal("replace-text");
    }));
});
describe("text prop set null at constructor successfully", () => {
    const container = new Spinner({
        // @ts-ignore
        text: null
    });
    it("text prop set null at constructor successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const replaceTextEl = (yield el.querySelector(".kuc-spinner__spinner__text"));
        yield expect(replaceTextEl.innerText).to.have.equal("now loading…");
    }));
});
describe("text prop set null successfully", () => {
    const container = new Spinner({
        text: "display spinner"
    });
    // @ts-ignore
    container.text = null;
    it("text prop set null successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const replaceTextEl = (yield el.querySelector(".kuc-spinner__spinner__text"));
        yield expect(replaceTextEl.innerText).to.have.equal("now loading…");
    }));
});
