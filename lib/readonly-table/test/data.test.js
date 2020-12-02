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
import { ReadOnlyTable } from "../index";
describe("confirm data default value is not set", () => {
    const container = new ReadOnlyTable();
    it("confirm data default value is not set", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const dataEl = el.querySelector(".kuc-readonly-table__table__body")
            .children;
        yield expect(dataEl.length).to.be.equal(0);
    }));
});
describe("data constructor set successfully", () => {
    const expectedData = [
        ["Orange", "Ehime"],
        ["Apple", "Aomori"]
    ];
    const container = new ReadOnlyTable({ data: expectedData });
    it("data constructor set successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const el = yield fixture(container);
        const dataEl = el.querySelector(".kuc-readonly-table__table__body")
            .children;
        for (let i = 0; i < dataEl.length; i++) {
            for (let j = 0; j < dataEl[i].children.length; j++) {
                const datumEl = dataEl[i].children[j];
                const value = (_a = datumEl.textContent) === null || _a === void 0 ? void 0 : _a.trim();
                yield expect(value).to.have.equal(expectedData[i][j]);
            }
        }
    }));
});
describe("data prop set successfully", () => {
    const expectedData = [
        ["Orange", "Ehime"],
        ["Apple", "Aomori"]
    ];
    const container = new ReadOnlyTable({});
    container.data = expectedData;
    it("data prop set successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const el = yield fixture(container);
        const dataEl = el.querySelector(".kuc-readonly-table__table__body")
            .children;
        for (let i = 0; i < dataEl.length; i++) {
            for (let j = 0; j < dataEl[i].children.length; j++) {
                const datumEl = dataEl[i].children[j];
                const value = (_a = datumEl.textContent) === null || _a === void 0 ? void 0 : _a.trim();
                yield expect(value).to.have.equal(expectedData[i][j]);
            }
        }
    }));
});
describe("data prop replace successfully", () => {
    const expectedData = [
        ["Orange", "Ehime"],
        ["Apple", "Aomori"]
    ];
    const container = new ReadOnlyTable({ data: expectedData });
    const newData = [
        ["Orange", "Ehime"],
        ["Banana", "Tokyo"]
    ];
    container.data = newData;
    it("data prop replace successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const el = yield fixture(container);
        const dataEl = el.querySelector(".kuc-readonly-table__table__body")
            .children;
        for (let i = 0; i < dataEl.length; i++) {
            for (let j = 0; j < dataEl[i].children.length; j++) {
                const datumEl = dataEl[i].children[j];
                const value = (_a = datumEl.textContent) === null || _a === void 0 ? void 0 : _a.trim();
                yield expect(value).to.have.equal(newData[i][j]);
            }
        }
    }));
});
describe("throw error when set by constructor", () => {
    it("have data which is not array", () => __awaiter(void 0, void 0, void 0, function* () {
        yield expect(() => {
            const container = new ReadOnlyTable({
                // @ts-ignore
                data: null
            });
        }).to.throw(Error, "'data' property is invalid");
    }));
});
describe("throw error when set by prop", () => {
    it("have data which is not array", () => __awaiter(void 0, void 0, void 0, function* () {
        yield expect(() => {
            const container = new ReadOnlyTable({});
            // @ts-ignore
            container.data = null;
        }).to.throw(Error, "'data' property is invalid");
    }));
});
