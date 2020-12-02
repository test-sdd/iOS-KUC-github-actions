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
describe("confirm placeholder default prop is null", () => {
    const container = new TextArea();
    it("confirm placeholder default prop is null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const textAreaEl = el.querySelector(".kuc-textarea__textarea");
        expect(textAreaEl.getAttribute("placeholder")).to.be.equal("");
    }));
});
describe("placeholder constructor set successfully", () => {
    const container = new TextArea({ placeholder: "Fruit" });
    it("placeholder constructor set successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const textAreaEl = el.querySelector(".kuc-textarea__textarea");
        expect(textAreaEl.getAttribute("placeholder")).to.be.equal("Fruit");
    }));
});
describe("placeholder prop set successfully", () => {
    const container = new TextArea();
    container.placeholder = "Fruit";
    it("placeholder prop set successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const textAreaEl = el.querySelector(".kuc-textarea__textarea");
        expect(textAreaEl.getAttribute("placeholder")).to.be.equal("Fruit");
    }));
});
describe("placeholder prop replace successfully", () => {
    const container = new TextArea({ placeholder: "Fruit" });
    container.placeholder = "Food";
    it("placeholder prop replace successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const textAreaEl = el.querySelector(".kuc-textarea__textarea");
        expect(textAreaEl.getAttribute("placeholder")).to.be.equal("Food");
    }));
});
describe("placeholder default prop set to null successfully", () => {
    // @ts-ignore
    const container = new TextArea({ placeholder: null });
    it("placeholder default prop set to null successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const textAreaEl = el.querySelector(".kuc-textarea__textarea");
        expect(textAreaEl.getAttribute("placeholder")).to.be.equal("null");
    }));
});
describe("placeholder prop set to null successfully", () => {
    const container = new TextArea();
    // @ts-ignore
    container.placeholder = null;
    it("placeholder prop set to null successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const textAreaEl = el.querySelector(".kuc-textarea__textarea");
        expect(textAreaEl.getAttribute("placeholder")).to.be.equal("null");
    }));
});
