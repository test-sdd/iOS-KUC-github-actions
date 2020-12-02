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
describe("id default prop is null", () => {
    const container = new Button({});
    it("id default prop is null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el.id).to.be.equals("");
    }));
});
describe("id default prop set successfully", () => {
    const container = new Button({ id: "options-id" });
    it("id default prop set successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el.id).to.have.equals("options-id");
    }));
});
describe("id prop replace successfully", () => {
    const container = new Button({
        id: "options-id"
    });
    container.id = "replace-id";
    it("id prop replace successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el.id).to.have.equals("replace-id");
    }));
});
describe("id default prop set to null", () => {
    // @ts-ignore
    const container = new Button({ id: null });
    it("id default prop set to null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el.id).to.be.equals("null");
    }));
});
describe("id prop set to null", () => {
    const container = new Button({});
    // @ts-ignore
    container.id = null;
    it("id prop set to null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el.id).to.have.equals("null");
    }));
});
