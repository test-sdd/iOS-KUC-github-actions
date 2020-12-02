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
import { Notification } from "../index";
describe("text default prop is null", () => {
    const container = new Notification({});
    it("text default prop is null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const textEl = (yield el.querySelector(".kuc-notification__notification__title"));
        yield expect(textEl.innerText).to.have.equals("");
    }));
});
describe("text constructor set successfully", () => {
    const container = new Notification({ text: "Error occurred!" });
    it("text constructor set successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const textEl = (yield el.querySelector(".kuc-notification__notification__title"));
        yield expect(textEl.innerText).to.have.equals("Error occurred!");
    }));
});
describe("text prop replace successfully", () => {
    const container = new Notification({ text: "Nothing occurred!" });
    container.text = "Error occurred!";
    it("text prop replace successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const textEl = (yield el.querySelector(".kuc-notification__notification__title"));
        yield expect(textEl.innerText).to.have.equals("Error occurred!");
    }));
});
describe("text constructor set successfully with null", () => {
    // @ts-ignore
    const container = new Notification({ text: null });
    it("text constructor set successfully with null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const textEl = (yield el.querySelector(".kuc-notification__notification__title"));
        yield expect(textEl.innerText).to.have.equals("");
    }));
});
describe("text prop set successfully with null", () => {
    const container = new Notification({});
    // @ts-ignore
    container.text = null;
    it("text prop set successfully with null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const textEl = (yield el.querySelector(".kuc-notification__notification__title"));
        yield expect(textEl.innerText).to.have.equals("");
    }));
});
