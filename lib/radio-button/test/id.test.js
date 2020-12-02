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
import { RadioButton } from "../index";
describe("confirm id default value is null", () => {
    const container = new RadioButton();
    it("confirm id default value is null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el.id).to.be.equal("");
    }));
});
describe("id constructor set successfully", () => {
    const container = new RadioButton({ id: "options-id" });
    it("id constructor set successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el.id).to.be.equal("options-id");
    }));
});
describe("id prop set successfully", () => {
    const container = new RadioButton();
    container.id = "options-id";
    it("id prop set successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el.id).to.be.equal("options-id");
    }));
});
describe("id prop replace successfully", () => {
    const container = new RadioButton({ id: "options-id" });
    container.id = "replace-id";
    it("id prop replace successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el.id).to.be.equal("replace-id");
    }));
});
describe("id constructor set to null successfully", () => {
    // @ts-ignore
    const container = new RadioButton({ id: null });
    it("id constructor set to null successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el.id).to.be.equal("null");
    }));
});
describe("id prop set to null successfully", () => {
    const container = new RadioButton({ id: "options-id" });
    // @ts-ignore
    container.id = null;
    it("id prop set to null successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el.id).to.be.equal("null");
    }));
});
