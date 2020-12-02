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
import { MultiChoice } from "../index";
describe("items default prop is null", () => {
    const container = new MultiChoice();
    it("items default prop is null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const itemsEl = container.querySelector(".kuc-multi-choice__menu").children;
        if (!container.children || itemsEl.length !== 3) {
            expect(true);
        }
    }));
});
describe("items prop set successfully without optional props", () => {
    const expectedValues = ["item-1", "item-2", "item-3"];
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
    const container = new MultiChoice({ items: newitems });
    it("items prop set successfully without optional props", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const el = yield fixture(container);
        const itemsEl = container.querySelector(".kuc-multi-choice__menu").children;
        if (!container.children || itemsEl.length !== 3) {
            expect(false);
        }
        for (let i = 0; i < itemsEl.length; i++) {
            const itemEl = itemsEl[i];
            const label = (_a = itemEl.textContent) === null || _a === void 0 ? void 0 : _a.trim();
            expect(label).to.have.equal(expectedValues[i]);
        }
    }));
});
describe("items prop set successfully without optional props", () => {
    const expectedValues = ["item-1", "item-2", "item-3"];
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
    const container = new MultiChoice();
    container.items = newitems;
    it("items prop set successfully without optional props", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const el = yield fixture(container);
        const itemsEl = container.querySelector(".kuc-multi-choice__menu").children;
        if (!container.children || itemsEl.length !== 3) {
            expect(false);
        }
        for (let i = 0; i < itemsEl.length; i++) {
            const itemEl = itemsEl[i];
            const label = (_a = itemEl.textContent) === null || _a === void 0 ? void 0 : _a.trim();
            expect(label).to.have.equal(expectedValues[i]);
        }
    }));
});
describe("items prop set successfully with full optional props", () => {
    const expectedLabels = ["Item 1", "Item 2", "Item 3"];
    const expectedValues = ["item-1", "item-2", "item-3"];
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
    const container = new MultiChoice();
    container.items = newitems;
    it("items prop set successfully with full optional props", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const el = yield fixture(container);
        const itemsEl = container.querySelector(".kuc-multi-choice__menu").children;
        if (!container.children || itemsEl.length !== 3) {
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
    const expectedLabels = ["Item 1", "Item 2", "Item 3"];
    const expectedValues = ["item-1", "item-2", "item-3"];
    const container = new MultiChoice({
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
        const itemsEl = container.querySelector(".kuc-multi-choice__menu").children;
        if (!container.children || itemsEl.length !== 2) {
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
    const expectedLabels = ["Item 1", "Item 2", "Item 3"];
    const expectedValues = ["item-1", "item-2", "item-3"];
    it("item default property is not array", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(() => {
            new MultiChoice({
                // @ts-ignore
                items: null,
                value: [expectedValues[1]]
            });
            // eslint-disable-next-line no-useless-escape
        }).to.throw(Error, /^\'items\' property is not array$/);
    }));
    it("default value is duplicated", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(() => {
            new MultiChoice({
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
                value: [expectedValues[1]]
            });
        }).to.throw(Error, "'items[1].value' property is duplicated");
    }));
});
describe("throw error when item set by props", () => {
    const expectedLabels = ["Item 1", "Item 2", "Item 3"];
    const expectedValues = ["item-1", "item-2", "item-3"];
    it("item property is not array", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(() => {
            const container = new MultiChoice({});
            // @ts-ignore
            container.items = null;
            // eslint-disable-next-line no-useless-escape
        }).to.throw(Error, /^\'items\' property is not array$/);
    }));
    it("duplicated value", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(() => {
            const container = new MultiChoice({});
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
