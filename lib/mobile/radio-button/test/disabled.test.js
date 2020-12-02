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
import { MobileRadioButton } from "../index";
describe("confirm disabled default value is false", () => {
    const expectedLabels = ["-----", "Orange", "Apple"];
    const expectedValues = ["-----", "orange", "Apple"];
    const container = new MobileRadioButton({
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
        value: expectedValues[1]
    });
    it("confirm disabled default value is false", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const itemsEl = el.querySelector(".kuc-mobile-radio-button__group__select-menu").children;
        for (let i = 0; i < itemsEl.length; i++) {
            const itemEl = itemsEl[i];
            const inputEl = itemEl.children[0];
            yield expect(inputEl.hasAttribute("disabled")).to.be.equal(false);
        }
    }));
});
describe("disabled constructor set successfully", () => {
    const expectedLabels = ["-----", "Orange", "Apple"];
    const expectedValues = ["-----", "orange", "Apple"];
    const container = new MobileRadioButton({
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
        value: expectedValues[1],
        disabled: true
    });
    it("disabled constructor set successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const itemsEl = el.querySelector(".kuc-mobile-radio-button__group__select-menu").children;
        for (let i = 0; i < itemsEl.length; i++) {
            const itemEl = itemsEl[i];
            const inputEl = itemEl.children[0];
            yield expect(inputEl.hasAttribute("disabled")).to.be.equal(true);
        }
    }));
});
describe("disabled prop set to true successfully", () => {
    const expectedLabels = ["-----", "Orange", "Apple"];
    const expectedValues = ["-----", "orange", "Apple"];
    const container = new MobileRadioButton({
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
        value: expectedValues[1],
        disabled: false
    });
    container.disabled = true;
    it("disabled prop set to true successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const itemsEl = el.querySelector(".kuc-mobile-radio-button__group__select-menu").children;
        for (let i = 0; i < itemsEl.length; i++) {
            const itemEl = itemsEl[i];
            const inputEl = itemEl.children[0];
            yield expect(inputEl.hasAttribute("disabled")).to.be.equal(true);
        }
    }));
});
describe("disabled prop set to false successfully", () => {
    const expectedLabels = ["-----", "Orange", "Apple"];
    const expectedValues = ["-----", "orange", "Apple"];
    const container = new MobileRadioButton({
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
        value: expectedValues[1],
        disabled: true
    });
    container.disabled = false;
    it("disabled prop set to false successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const itemsEl = el.querySelector(".kuc-mobile-radio-button__group__select-menu").children;
        for (let i = 0; i < itemsEl.length; i++) {
            const itemEl = itemsEl[i];
            const inputEl = itemEl.children[0];
            yield expect(inputEl.hasAttribute("disabled")).to.be.equal(false);
        }
    }));
});
describe("disabled constructor set to null successfully", () => {
    const expectedLabels = ["-----", "Orange", "Apple"];
    const expectedValues = ["-----", "orange", "Apple"];
    const container = new MobileRadioButton({
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
        value: expectedValues[1],
        // @ts-expect-error
        disabled: null
    });
    it("disabled constructor set to null successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const itemsEl = el.querySelector(".kuc-mobile-radio-button__group__select-menu").children;
        for (let i = 0; i < itemsEl.length; i++) {
            const itemEl = itemsEl[i];
            const inputEl = itemEl.children[0];
            yield expect(inputEl.hasAttribute("disabled")).to.be.equal(false);
        }
    }));
});
describe("disabled prop set to null successfully", () => {
    const expectedLabels = ["-----", "Orange", "Apple"];
    const expectedValues = ["-----", "orange", "Apple"];
    const container = new MobileRadioButton({
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
        value: expectedValues[1],
        disabled: true
    });
    // @ts-expect-error
    container.disabled = null;
    it("disabled prop set to null successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const itemsEl = el.querySelector(".kuc-mobile-radio-button__group__select-menu").children;
        for (let i = 0; i < itemsEl.length; i++) {
            const itemEl = itemsEl[i];
            const inputEl = itemEl.children[0];
            yield expect(inputEl.hasAttribute("disabled")).to.be.equal(false);
        }
    }));
});
