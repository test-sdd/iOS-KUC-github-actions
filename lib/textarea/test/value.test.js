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
describe("confirm value default prop is null", () => {
    const container = new TextArea();
    it("confirm value default prop is null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const inputEl = el.querySelector(".kuc-textarea__textarea");
        expect(inputEl.value).to.be.equal("");
    }));
});
describe("value constructor set successfully", () => {
    const container = new TextArea({ value: "Apple" });
    it("value constructor set successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const inputEl = el.querySelector(".kuc-textarea__textarea");
        expect(inputEl.value).to.be.equal("Apple");
    }));
});
describe("value prop set successfully", () => {
    const container = new TextArea();
    container.value = "Apple";
    it("value prop set successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const inputEl = el.querySelector(".kuc-textarea__textarea");
        expect(inputEl.value).to.be.equal("Apple");
    }));
});
describe("value prop replace successfully", () => {
    const container = new TextArea({ value: "Orange" });
    container.value = "Apple";
    it("value prop replace successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const inputEl = el.querySelector(".kuc-textarea__textarea");
        expect(inputEl.value).to.be.equal("Apple");
    }));
});
describe("value default prop set to null successfully", () => {
    // @ts-ignore
    const container = new TextArea({ value: null });
    it("value default prop set successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const inputEl = el.querySelector(".kuc-textarea__textarea");
        expect(inputEl.value).to.be.equal("");
    }));
});
describe("value prop set to null successfully", () => {
    const container = new TextArea();
    // @ts-ignore
    container.value = null;
    it("value prop set to null successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const inputEl = el.querySelector(".kuc-textarea__textarea");
        expect(inputEl.value).to.be.equal("");
    }));
});
