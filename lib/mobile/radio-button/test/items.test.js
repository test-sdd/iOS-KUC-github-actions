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
describe("confirm items default value is not set", () => {
    const container = new MobileRadioButton();
    it("confirm items default value is not set", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const itemsEl = el.querySelector(".kuc-mobile-radio-button__group__select-menu").children;
        if (!itemsEl.children || itemsEl.length !== 3) {
            yield expect(true);
        }
    }));
});
describe("items constructor set successfully without label prop", () => {
    const expectedValues = ["-----", "orange", "apple"];
    const container = new MobileRadioButton({
        items: [
            {
                value: expectedValues[0]
            },
            {
                value: expectedValues[1]
            },
            {
                value: expectedValues[2]
            }
        ]
    });
    it("items constructor set successfully without label prop", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const itemsEl = el.querySelector(".kuc-mobile-radio-button__group__select-menu").children;
        if (!itemsEl.children || itemsEl.length !== 3) {
            yield expect(false);
        }
        for (let i = 0; i < itemsEl.length; i++) {
            const itemEl = itemsEl[i];
            const labelEl = itemEl.children[1];
            const svgEl = labelEl.children[0];
            const isChecked = svgEl.children.length === 3;
            yield expect(labelEl.innerText).to.be.equal(expectedValues[i]);
            yield expect(isChecked).to.be.equal(false);
        }
    }));
});
describe("items prop set successfully without label prop", () => {
    const expectedValues = ["-----", "orange", "apple"];
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
    const container = new MobileRadioButton();
    container.items = newitems;
    it("items prop set successfully without label props", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const itemsEl = el.querySelector(".kuc-mobile-radio-button__group__select-menu").children;
        if (!itemsEl.children || itemsEl.length !== 3) {
            yield expect(false);
        }
        for (let i = 0; i < itemsEl.length; i++) {
            const itemEl = itemsEl[i];
            const labelEl = itemEl.children[1];
            const svgEl = labelEl.children[0];
            const isChecked = svgEl.children.length === 3;
            yield expect(labelEl.innerText).to.be.equal(expectedValues[i]);
            yield expect(isChecked).to.be.equal(false);
        }
    }));
});
describe("items constructor set successfully with full optional props", () => {
    const expectedValues = ["-----", "orange", "apple"];
    const expectedLabels = ["-----", "Orange", "Apple"];
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
        ]
    });
    it("items constructor set successfully with full optional props", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const itemsEl = el.querySelector(".kuc-mobile-radio-button__group__select-menu").children;
        if (!itemsEl.children || itemsEl.length !== 3) {
            yield expect(false);
        }
        for (let i = 0; i < itemsEl.length; i++) {
            const itemEl = itemsEl[i];
            const labelEl = itemEl.children[1];
            const svgEl = labelEl.children[0];
            const isChecked = svgEl.children.length === 3;
            yield expect(labelEl.innerText).to.be.equal(expectedLabels[i]);
            yield expect(isChecked).to.be.equal(false);
        }
    }));
});
describe("items prop set successfully with full optional props", () => {
    const expectedLabels = ["-----", "Orange", "Apple"];
    const expectedValues = ["-----", "orange", "apple"];
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
    const container = new MobileRadioButton();
    container.items = newitems;
    it("items prop set successfully with full optional props", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const itemsEl = el.querySelector(".kuc-mobile-radio-button__group__select-menu").children;
        if (!itemsEl.children || itemsEl.length !== 3) {
            yield expect(false);
        }
        for (let i = 0; i < itemsEl.length; i++) {
            const itemEl = itemsEl[i];
            const labelEl = itemEl.children[1];
            const svgEl = labelEl.children[0];
            const isChecked = svgEl.children.length === 3;
            yield expect(labelEl.innerText).to.be.equal(expectedLabels[i]);
            yield expect(isChecked).to.be.equal(false);
        }
    }));
    expect(container.items).to.be.equal(newitems);
});
describe("items prop replace successfully", () => {
    const expectedLabels = ["-----", "Orange", "Apple"];
    const expectedValues = ["-----", "orange", "apple"];
    const container = new MobileRadioButton({
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
        const el = yield fixture(container);
        const itemsEl = el.querySelector(".kuc-mobile-radio-button__group__select-menu").children;
        if (!itemsEl.children || itemsEl.length !== 3) {
            yield expect(false);
        }
        for (let i = 0; i < itemsEl.length; i++) {
            const itemEl = itemsEl[i];
            const labelEl = itemEl.children[1];
            const svgEl = labelEl.children[0];
            const isChecked = svgEl.children.length === 3;
            yield expect(labelEl.innerText).to.be.equal(expectedLabels[i]);
            yield expect(isChecked).to.be.equal(false);
        }
    }));
    expect(container.items).to.be.equal(newitems);
});
describe("throw error when set by constructor", () => {
    const expectedValues = ["-----", "orange", "apple"];
    it("have items which is not array", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(() => {
            // @ts-expect-error
            const container = new MobileRadioButton({ items: null });
        }).to.throw(Error, "'items' property is not array");
    }));
    it("have duplicated value", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(() => {
            const container = new MobileRadioButton({
                items: [
                    {
                        value: expectedValues[0]
                    },
                    {
                        value: expectedValues[0]
                    }
                ]
            });
        }).to.throw(Error, "'items[1].value' is duplicated! You can specify unique one.");
    }));
});
describe("throw error when set by prop", () => {
    const expectedValues = ["-----", "orange", "apple"];
    it("have items which is not array", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(() => {
            const container = new MobileRadioButton();
            // @ts-expect-error
            container.items = null;
        }).to.throw(Error, "'items' property is not array");
    }));
    it("have duplicated value", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(() => {
            const container = new MobileRadioButton();
            container.items = [
                {
                    value: expectedValues[0]
                },
                {
                    value: expectedValues[0]
                }
            ];
        }).to.throw(Error, "'items[1].value' is duplicated! You can specify unique one.");
    }));
});
