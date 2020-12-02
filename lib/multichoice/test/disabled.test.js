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
describe("disabled default prop is false", () => {
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
    it("disabled default prop is false", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el.querySelector(".kuc-multi-choice__menu")).not.to.have.attr("disabled");
    }));
});
describe("disabled default prop set to true successfully", () => {
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
        disabled: true
    });
    it("disabled default prop set to true successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el.querySelector(".kuc-multi-choice__menu")).to.have.attr("disabled");
    }));
});
describe("disabled prop set to true successfully", () => {
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
        disabled: false
    });
    container.disabled = true;
    it("disabled prop set to true successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el.querySelector(".kuc-multi-choice__menu")).to.have.attr("disabled");
    }));
});
describe("disabled prop set to false successfully", () => {
    const expectedLabels = ["Item 1", "Item 2", "Item 3"];
    const expectedValues = ["item-1", "item-2", "item-3"];
    const container = new MultiChoice({
        label: "MultiChoice",
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
        disabled: true
    });
    container.disabled = false;
    it("disabled prop set to false successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el.querySelector(".kuc-multi-choice__menu")).not.to.have.attr("disabled");
    }));
});
describe("disabled default prop set to null", () => {
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
        // @ts-ignore
        disabled: null
    });
    it("disabled default prop set to null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el.querySelector(".kuc-multi-choice__menu")).not.to.have.attr("disabled");
    }));
});
describe("disabled prop set to null", () => {
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
    // @ts-ignore
    container.disabled = null;
    it("disabled prop set to null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        yield expect(el.querySelector(".kuc-multi-choice__menu")).not.to.have.attr("disabled");
    }));
});
