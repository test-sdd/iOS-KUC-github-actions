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
describe("visible default prop is true", () => {
    const container = new Button({});
    it("visible default prop is true", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el).to.be.displayed;
    }));
});
describe("visible default prop set to true successfully", () => {
    const container = new Button({ visible: false });
    it("visible default prop set to true successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el).not.to.be.displayed;
    }));
});
describe("visible prop set to true successfully", () => {
    const container = new Button({ visible: false });
    container.visible = true;
    it("visible prop set to true successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el).to.be.displayed;
    }));
});
describe("visible prop set to false successfully", () => {
    const container = new Button({ visible: true });
    container.visible = false;
    it("visible prop set to false successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el).not.to.be.displayed;
    }));
});
describe("visible default prop set to null", () => {
    // @ts-ignore
    const container = new Button({ visible: null });
    it("visible default prop set to null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el).not.to.be.displayed;
    }));
});
describe("visible prop set to null", () => {
    const container = new Button({});
    // @ts-ignore
    container.visible = null;
    it("visible prop set to null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el).not.to.be.displayed;
    }));
});
