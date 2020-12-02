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
describe("value default prop is not setted", () => {
    const expectedLabels = ["Item 1", "Item 2", "Item 3"];
    const expectedValues = ["item-1", "item-2", "item-3"];
    const container = new MultiChoice({
        items: [
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
        ]
    });
    it("value default prop is not setted", () => __awaiter(void 0, void 0, void 0, function* () {
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
        expect(container.value).to.deep.equal([]);
    }));
});
describe("value prop set successfully", () => {
    const expectedLabels = ["Item 1", "Item 2", "Item 3"];
    const expectedValues = ["item-1", "item-2", "item-3"];
    const container = new MultiChoice({
        items: [
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
        ],
        value: [expectedValues[1]]
    });
    it("value prop set successfully", () => __awaiter(void 0, void 0, void 0, function* () {
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
        expect(container.value).to.deep.equal([expectedValues[1]]);
    }));
});
describe("value prop set successfully", () => {
    const expectedLabels = ["Item 1", "Item 2", "Item 3"];
    const expectedValues = ["item-1", "item-2", "item-3"];
    const container = new MultiChoice({
        label: "Fruit",
        requiredIcon: false,
        items: [
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
        ],
        value: [expectedValues[0]]
    });
    container.value = [expectedValues[1]];
    it("value prop set successfully", () => __awaiter(void 0, void 0, void 0, function* () {
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
        expect(container.value).to.deep.equal([expectedValues[1]]);
    }));
});
describe("throw error when set by constructor", () => {
    const expectedLabels = ["Item 1", "Item 2", "Item 3"];
    const expectedValues = ["item-1", "item-2", "item-3"];
    it("have value which is not array", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(() => {
            const container = new MultiChoice({
                items: [
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
                ],
                // @ts-ignore
                value: null
            });
        }).to.throw(Error, "'value' property is not array");
    }));
    it("have duplicated value", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(() => {
            const container = new MultiChoice({
                items: [
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
                ],
                value: [expectedValues[0], expectedValues[0]]
            });
        }).to.throw(Error, "'value[1]' property is duplicated");
    }));
});
describe("throw error when set by prop", () => {
    const expectedLabels = ["Item 1", "Item 2", "Item 3"];
    const expectedValues = ["item-1", "item-2", "item-3"];
    it("have value which is not array", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(() => {
            const container = new MultiChoice({
                items: [
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
                ]
            });
            // @ts-ignore
            container.value = null;
        }).to.throw(Error, "'value' property is not array");
    }));
    it("have duplicated value", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(() => {
            const container = new MultiChoice({
                items: [
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
                ]
            });
            container.value = [expectedValues[0], expectedValues[0]];
        }).to.throw(Error, "'value[1]' property is duplicated");
    }));
});
