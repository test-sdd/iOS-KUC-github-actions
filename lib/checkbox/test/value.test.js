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
import { Checkbox } from "../index";
describe("confirm value default value is not set", () => {
    const container = new Checkbox();
    it("confirm value default value is not set", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const itemsEl = el.querySelector(".kuc-checkbox__group__select-menu")
            .children;
        if (!el.children || itemsEl.length !== 3) {
            yield expect(true);
        }
    }));
});
describe("value constructor set successfully", () => {
    const expectedValues = ["-----", "orange", "apple"];
    const expectedLabels = ["-----", "Orange", "Apple"];
    const container = new Checkbox({
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
    it("value constructor set successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const itemsEl = el.querySelector(".kuc-checkbox__group__select-menu")
            .children;
        if (!el.children || itemsEl.length !== 3) {
            yield expect(false);
        }
        for (let i = 0; i < itemsEl.length; i++) {
            const itemEl = itemsEl[i];
            const inputEl = itemEl.children[0];
            const labelEl = itemEl.children[1];
            yield expect(labelEl.textContent).to.be.equal(expectedLabels[i]);
            if (i === 1) {
                yield expect(inputEl.checked).to.be.equal(true);
            }
            else {
                yield expect(inputEl.checked).to.be.equal(false);
            }
        }
    }));
});
describe("value prop replace successfully", () => {
    const expectedLabels = ["-----", "Orange", "Apple"];
    const expectedValues = ["-----", "orange", "apple"];
    const container = new Checkbox({
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
    const newValue = [expectedValues[2]];
    container.value = newValue;
    it("value prop replace successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const itemsEl = el.querySelector(".kuc-checkbox__group__select-menu")
            .children;
        if (!el.children || itemsEl.length !== 3) {
            yield expect(false);
        }
        for (let i = 0; i < itemsEl.length; i++) {
            const itemEl = itemsEl[i];
            const inputEl = itemEl.children[0];
            const labelEl = itemEl.children[1];
            yield expect(labelEl.textContent).to.be.equal(expectedLabels[i]);
            if (i === 2) {
                yield expect(inputEl.checked).to.be.equal(true);
            }
            else {
                yield expect(inputEl.checked).to.be.equal(false);
            }
        }
        expect(container.value).to.be.equal(newValue);
    }));
});
describe("throw error when set by constructor", () => {
    const expectedLabels = ["-----", "Orange", "Apple"];
    const expectedValues = ["-----", "orange", "apple"];
    it("have value which is not array", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(() => {
            const container = new Checkbox({
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
            const container = new Checkbox({
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
        }).to.throw(Error, "'value[1]' is duplicated! You can specify unique one.");
    }));
});
describe("throw error when set by prop", () => {
    const expectedLabels = ["-----", "Orange", "Apple"];
    const expectedValues = ["-----", "orange", "apple"];
    it("have value which is not array", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(() => {
            const container = new Checkbox({
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
            const container = new Checkbox({
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
        }).to.throw(Error, "'value[1]' is duplicated! You can specify unique one.");
    }));
});
