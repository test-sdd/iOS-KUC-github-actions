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
describe("confirm columns default value is not set", () => {
    const container = new ReadOnlyTable();
    it("confirm columns default value is not set", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const columnsEl = el.querySelector(".kuc-readonly-table__table__header")
            .children;
        yield expect(columnsEl[0].children.length).to.be.equal(0);
    }));
});
describe("columns constructor set successfully without header prop", () => {
    const container = new ReadOnlyTable({
        columns: [
            {
                visible: true
            },
            {
                visible: true
            },
            {
                visible: false
            }
        ]
    });
    it("columns constructor set successfully without header prop", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const el = yield fixture(container);
        const columnsEl = el.querySelector(".kuc-readonly-table__table__header")
            .children;
        for (let i = 0; i < columnsEl[0].children.length; i++) {
            const columnEl = columnsEl[0].children[i];
            if (i === 2) {
                yield expect(columnEl.hasAttribute("hidden")).to.have.equal(true);
            }
            else {
                yield expect(columnEl.hasAttribute("hidden")).to.have.equal(false);
            }
            const value = (_a = columnEl.textContent) === null || _a === void 0 ? void 0 : _a.trim();
            yield expect(value).to.have.equal("");
        }
    }));
});
describe("columns constructor set successfully without visible prop", () => {
    const expectedHeaderTexts = ["fruit", "Producing area", "Price"];
    const container = new ReadOnlyTable({
        columns: [
            {
                header: {
                    text: expectedHeaderTexts[0]
                }
            },
            {
                header: {
                    text: expectedHeaderTexts[1]
                }
            },
            {
                header: {
                    text: expectedHeaderTexts[2]
                }
            }
        ]
    });
    it("columns constructor set successfully without visible prop", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const el = yield fixture(container);
        const columnsEl = el.querySelector(".kuc-readonly-table__table__header")
            .children;
        for (let i = 0; i < columnsEl[0].children.length; i++) {
            const columnEl = columnsEl[0].children[i];
            const value = (_a = columnEl.textContent) === null || _a === void 0 ? void 0 : _a.trim();
            yield expect(value).to.have.equal(expectedHeaderTexts[i]);
        }
    }));
});
describe("columns prop set successfully without header prop", () => {
    const newColums = [
        {
            visible: true
        },
        {
            visible: true
        },
        {
            visible: false
        }
    ];
    const container = new ReadOnlyTable({});
    container.columns = newColums;
    it("columns prop set successfully without header prop", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const el = yield fixture(container);
        const columnsEl = el.querySelector(".kuc-readonly-table__table__header")
            .children;
        for (let i = 0; i < columnsEl[0].children.length; i++) {
            const columnEl = columnsEl[0].children[i];
            if (i === 2) {
                yield expect(columnEl.hasAttribute("hidden")).to.have.equal(true);
            }
            else {
                yield expect(columnEl.hasAttribute("hidden")).to.have.equal(false);
            }
            const value = (_a = columnEl.textContent) === null || _a === void 0 ? void 0 : _a.trim();
            yield expect(value).to.have.equal("");
        }
    }));
});
describe("columns prop set successfully without visible prop", () => {
    const expectedHeaderTexts = ["fruit", "Producing area", "Price"];
    const newColums = [
        {
            header: {
                text: expectedHeaderTexts[0]
            }
        },
        {
            header: {
                text: expectedHeaderTexts[1]
            }
        },
        {
            header: {
                text: expectedHeaderTexts[2]
            }
        }
    ];
    const container = new ReadOnlyTable({});
    container.columns = newColums;
    it("columns prop set successfully without visible prop", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const el = yield fixture(container);
        const columnsEl = el.querySelector(".kuc-readonly-table__table__header")
            .children;
        for (let i = 0; i < columnsEl[0].children.length; i++) {
            const columnEl = columnsEl[0].children[i];
            const value = (_a = columnEl.textContent) === null || _a === void 0 ? void 0 : _a.trim();
            yield expect(value).to.have.equal(expectedHeaderTexts[i]);
        }
    }));
});
describe("columns constructor set successfully with full optional props", () => {
    const expectedHeaderTexts = ["fruit", "Producing area", "Price"];
    const container = new ReadOnlyTable({
        columns: [
            {
                header: {
                    text: expectedHeaderTexts[0]
                },
                visible: true
            },
            {
                header: {
                    text: expectedHeaderTexts[1]
                },
                visible: true
            },
            {
                header: {
                    text: expectedHeaderTexts[2]
                },
                visible: false
            }
        ]
    });
    it("columns constructor set successfully without header prop", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const el = yield fixture(container);
        const columnsEl = el.querySelector(".kuc-readonly-table__table__header")
            .children;
        for (let i = 0; i < columnsEl[0].children.length; i++) {
            const columnEl = columnsEl[0].children[i];
            if (i === 2) {
                yield expect(columnEl.hasAttribute("hidden")).to.have.equal(true);
            }
            else {
                yield expect(columnEl.hasAttribute("hidden")).to.have.equal(false);
            }
            const value = (_a = columnEl.textContent) === null || _a === void 0 ? void 0 : _a.trim();
            yield expect(value).to.have.equal(expectedHeaderTexts[i]);
        }
    }));
});
describe("columns prop set successfully with full optional props", () => {
    const expectedHeaderTexts = ["fruit", "Producing area", "Price"];
    const newColums = [
        {
            header: {
                text: expectedHeaderTexts[0]
            },
            visible: true
        },
        {
            header: {
                text: expectedHeaderTexts[1]
            },
            visible: true
        },
        {
            header: {
                text: expectedHeaderTexts[2]
            },
            visible: false
        }
    ];
    const container = new ReadOnlyTable({});
    container.columns = newColums;
    it("columns prop set successfully with full optional props", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const el = yield fixture(container);
        const columnsEl = el.querySelector(".kuc-readonly-table__table__header")
            .children;
        for (let i = 0; i < columnsEl[0].children.length; i++) {
            const columnEl = columnsEl[0].children[i];
            if (i === 2) {
                yield expect(columnEl.hasAttribute("hidden")).to.have.equal(true);
            }
            else {
                yield expect(columnEl.hasAttribute("hidden")).to.have.equal(false);
            }
            const value = (_a = columnEl.textContent) === null || _a === void 0 ? void 0 : _a.trim();
            yield expect(value).to.have.equal(expectedHeaderTexts[i]);
        }
        yield expect(container.columns).to.be.equal(newColums);
    }));
});
describe("columns prop replace successfully", () => {
    const expectedHeaderTexts = ["fruit", "Producing area", "Price"];
    const container = new ReadOnlyTable({
        columns: [
            {
                header: {
                    text: expectedHeaderTexts[2]
                },
                visible: false
            }
        ]
    });
    const newColums = [
        {
            header: {
                text: expectedHeaderTexts[0]
            },
            visible: true
        },
        {
            header: {
                text: expectedHeaderTexts[1]
            },
            visible: true
        }
    ];
    container.columns = newColums;
    it("columns prop replace successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const el = yield fixture(container);
        const columnsEl = el.querySelector(".kuc-readonly-table__table__header")
            .children;
        for (let i = 0; i < columnsEl[0].children.length; i++) {
            const columnEl = columnsEl[0].children[i];
            const value = (_a = columnEl.textContent) === null || _a === void 0 ? void 0 : _a.trim();
            yield expect(value).to.have.equal(expectedHeaderTexts[i]);
        }
        yield expect(container.columns).to.be.equal(newColums);
    }));
});
describe("throw error when set by constructor", () => {
    it("have columns which is not array", () => __awaiter(void 0, void 0, void 0, function* () {
        yield expect(() => {
            // @ts-ignore
            const container = new ReadOnlyTable({ columns: null });
        }).to.throw(Error, "'columns' property is invalid");
    }));
});
describe("throw error when set by prop", () => {
    it("have columns which is not array", () => __awaiter(void 0, void 0, void 0, function* () {
        yield expect(() => {
            const container = new ReadOnlyTable();
            // @ts-ignore
            container.columns = null;
        }).to.throw(Error, "'columns' property is invalid");
    }));
});
