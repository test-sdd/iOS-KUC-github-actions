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
import { Dropdown } from "../index";
describe("items default prop is null", () => {
    const container = new Dropdown();
    it("items default prop is null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const itemsEl = el.querySelector(".kuc-dropdown__select-menu")
            .children;
        if (!itemsEl.children || itemsEl.length !== 3) {
            expect(true);
        }
    }));
});
describe("items prop set successfully without label props", () => {
    const expectedValues = ["-----", "orange", "Apple"];
    const newitems = [
        {
            value: expectedValues[0]
        },
        {
            value: expectedValues[1]
        },
        {
            value: expectedValues[2]
        }
    ];
    const container = new Dropdown({ items: newitems });
    it("items prop set successfully without label props", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const el = yield fixture(container);
        const itemsEl = el.querySelector(".kuc-dropdown__select-menu")
            .children;
        if (!itemsEl.children || itemsEl.length !== 3) {
            expect(false);
        }
        for (let i = 0; i < itemsEl.length; i++) {
            const itemEl = itemsEl[i];
            const label = (_a = itemEl.textContent) === null || _a === void 0 ? void 0 : _a.trim();
            expect(label).to.have.equal(expectedValues[i]);
        }
    }));
});
describe("items prop set successfully without label props", () => {
    const expectedValues = ["-----", "orange", "Apple"];
    const newitems = [
        {
            value: expectedValues[0]
        },
        {
            value: expectedValues[1]
        },
        {
            value: expectedValues[2]
        }
    ];
    const container = new Dropdown();
    container.items = newitems;
    it("items prop set successfully without label props", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const el = yield fixture(container);
        const itemsEl = el.querySelector(".kuc-dropdown__select-menu")
            .children;
        if (!itemsEl.children || itemsEl.length !== 3) {
            expect(false);
        }
        for (let i = 0; i < itemsEl.length; i++) {
            const itemEl = itemsEl[i];
            const label = (_a = itemEl.textContent) === null || _a === void 0 ? void 0 : _a.trim();
            expect(label).to.have.equal(expectedValues[i]);
        }
    }));
});
describe("items default set successfully with full optional props", () => {
    const expectedLabels = ["-----", "Orange", "Apple"];
    const expectedValues = ["-----", "orange", "Apple"];
    const newitems = [
        {
            label: expectedLabels[0],
            value: expectedValues[0]
        },
        {
            label: expectedLabels[1],
            value: expectedValues[1]
        },
        {
            label: expectedLabels[2],
            value: expectedValues[2]
        }
    ];
    const container = new Dropdown({
        items: newitems
    });
    it("items default set successfully with full optional props", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const el = yield fixture(container);
        const itemsEl = el.querySelector(".kuc-dropdown__select-menu")
            .children;
        if (!itemsEl.children || itemsEl.length !== 3) {
            expect(false);
        }
        for (let i = 0; i < itemsEl.length; i++) {
            const itemEl = itemsEl[i];
            const label = (_a = itemEl.textContent) === null || _a === void 0 ? void 0 : _a.trim();
            expect(label).to.have.equal(expectedLabels[i]);
        }
    }));
    expect(container.items).to.be.equal(newitems);
});
describe("items prop set successfully with full optional props", () => {
    const expectedLabels = ["-----", "Orange", "Apple"];
    const expectedValues = ["-----", "orange", "Apple"];
    const newitems = [
        {
            label: expectedLabels[0],
            value: expectedValues[0]
        },
        {
            label: expectedLabels[1],
            value: expectedValues[1]
        },
        {
            label: expectedLabels[2],
            value: expectedValues[2]
        }
    ];
    const container = new Dropdown();
    container.items = newitems;
    it("items prop set successfully with full optional props", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const el = yield fixture(container);
        const itemsEl = el.querySelector(".kuc-dropdown__select-menu")
            .children;
        if (!itemsEl.children || itemsEl.length !== 3) {
            expect(false);
        }
        for (let i = 0; i < itemsEl.length; i++) {
            const itemEl = itemsEl[i];
            const label = (_a = itemEl.textContent) === null || _a === void 0 ? void 0 : _a.trim();
            expect(label).to.have.equal(expectedLabels[i]);
        }
    }));
    expect(container.items).to.be.equal(newitems);
});
describe("items prop replace successfully", () => {
    const expectedLabels = ["-----", "Orange", "Apple"];
    const expectedValues = ["-----", "orange", "Apple"];
    const container = new Dropdown({
        items: [
            {
                label: expectedLabels[2],
                value: expectedValues[2]
            }
        ]
    });
    const newitems = [
        {
            label: expectedLabels[0],
            value: expectedValues[0]
        },
        {
            label: expectedLabels[1],
            value: expectedValues[1]
        }
    ];
    container.items = newitems;
    it("items prop replace successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const el = yield fixture(container);
        const itemsEl = el.querySelector(".kuc-dropdown__select-menu")
            .children;
        if (!itemsEl.children || itemsEl.length !== 2) {
            expect(false);
        }
        for (let i = 0; i < itemsEl.length; i++) {
            const itemEl = itemsEl[i];
            const label = (_a = itemEl.textContent) === null || _a === void 0 ? void 0 : _a.trim();
            expect(label).to.have.equal(expectedLabels[i]);
        }
    }));
    expect(container.items).to.be.equal(newitems);
});
describe("throw error when default props", () => {
    const expectedLabels = ["-----", "Orange", "Apple"];
    const expectedValues = ["-----", "orange", "Apple"];
    it("items default property is not array", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(() => {
            new Dropdown({
                // @ts-ignore
                items: null,
                value: expectedValues[1]
            });
            // eslint-disable-next-line no-useless-escape
        }).to.throw(Error, /^\'items\' property is not array$/);
    }));
    it("default value is duplicated", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(() => {
            new Dropdown({
                items: [
                    {
                        label: expectedLabels[0],
                        value: expectedValues[0]
                    },
                    {
                        label: expectedLabels[1],
                        value: expectedValues[0]
                    }
                ],
                value: expectedValues[1]
            });
        }).to.throw(Error, "'items[1].value' property is duplicated");
    }));
});
describe("throw error when item set by props", () => {
    const expectedLabels = ["-----", "Orange", "Apple"];
    const expectedValues = ["-----", "orange", "Apple"];
    it("items property is not array", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(() => {
            const container = new Dropdown({});
            // @ts-ignore
            container.items = null;
            // eslint-disable-next-line no-useless-escape
        }).to.throw(Error, /^\'items\' property is not array$/);
    }));
    it("duplicated value", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(() => {
            const container = new Dropdown({});
            container.items = [
                {
                    value: expectedValues[0]
                },
                {
                    value: expectedValues[0]
                }
            ];
        }).to.throw(Error, "'items[1].value' property is duplicated");
    }));
});
