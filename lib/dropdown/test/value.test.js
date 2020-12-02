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
describe("value default prop is not set", () => {
    const expectedLabels = ["-----", "Orange", "Apple"];
    const expectedValues = ["-----", "orange", "Apple"];
    const container = new Dropdown({
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
    it("value default prop is not set", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const el = yield fixture(container);
        const itemsEl = container.querySelector(".kuc-dropdown__select-menu")
            .children;
        if (!itemsEl.children || itemsEl.length !== 3) {
            expect(false);
        }
        for (let i = 0; i < itemsEl.length; i++) {
            const itemEl = itemsEl[i];
            const label = (_a = itemEl.textContent) === null || _a === void 0 ? void 0 : _a.trim();
            expect(label).to.have.equal(expectedLabels[i]);
        }
        expect(container.value).to.be.equal("");
    }));
});
describe("value prop set successfully", () => {
    const expectedLabels = ["-----", "Orange", "Apple"];
    const expectedValues = ["-----", "orange", "Apple"];
    const container = new Dropdown({
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
    it("value prop set successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const el = yield fixture(container);
        const itemsEl = container.querySelector(".kuc-dropdown__select-menu")
            .children;
        if (!container.children || itemsEl.length !== 3) {
            expect(false);
        }
        for (let i = 0; i < itemsEl.length; i++) {
            const itemEl = itemsEl[i];
            const label = (_a = itemEl.textContent) === null || _a === void 0 ? void 0 : _a.trim();
            expect(label).to.have.equal(expectedLabels[i]);
        }
        expect(container.value).to.be.equal(expectedValues[1]);
    }));
});
describe("value prop replace successfully", () => {
    const expectedLabels = ["-----", "Orange", "Apple"];
    const expectedValues = ["-----", "orange", "Apple"];
    const container = new Dropdown({
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
        value: expectedValues[0]
    });
    container.value = expectedValues[1];
    it("value prop replace successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const el = yield fixture(container);
        const itemsEl = container.querySelector(".kuc-dropdown__select-menu")
            .children;
        if (!itemsEl.children || itemsEl.length !== 3) {
            expect(false);
        }
        for (let i = 0; i < itemsEl.length; i++) {
            const itemEl = itemsEl[i];
            const label = (_a = itemEl.textContent) === null || _a === void 0 ? void 0 : _a.trim();
            expect(label).to.have.equal(expectedLabels[i]);
        }
        expect(container.value).to.be.equal(expectedValues[1]);
    }));
});
describe("value default prop set to null", () => {
    const expectedLabels = ["-----", "Orange", "Apple"];
    const expectedValues = ["-----", "orange", "Apple"];
    const container = new Dropdown({
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
        // @ts-ignore
        value: null
    });
    it("value default prop set to null", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const el = yield fixture(container);
        const selectedTextEl = el.querySelector(".kuc-dropdown__toggle__selected-item-label");
        expect(selectedTextEl.textContent).to.be.equal("");
        const itemsEl = container.querySelector(".kuc-dropdown__select-menu")
            .children;
        if (!itemsEl.children || itemsEl.length !== 3) {
            expect(false);
        }
        for (let i = 0; i < itemsEl.length; i++) {
            const itemEl = itemsEl[i];
            const label = (_a = itemEl.textContent) === null || _a === void 0 ? void 0 : _a.trim();
            expect(label).to.have.equal(expectedLabels[i]);
            expect(itemEl.getAttribute("aria-checked")).to.be.equal("false");
        }
        expect(container.value).to.be.equal(null);
    }));
});
describe("set to null value", () => {
    const expectedLabels = ["-----", "Orange", "Apple"];
    const expectedValues = ["-----", "orange", "Apple"];
    const container = new Dropdown({
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
        value: expectedValues[0]
    });
    // @ts-ignore
    container.value = null;
    it("set to null value", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const el = yield fixture(container);
        const selectedTextEl = el.querySelector(".kuc-dropdown__toggle__selected-item-label");
        expect(selectedTextEl.textContent).to.be.equal("");
        const itemsEl = container.querySelector(".kuc-dropdown__select-menu")
            .children;
        if (!itemsEl.children || itemsEl.length !== 3) {
            expect(false);
        }
        for (let i = 0; i < itemsEl.length; i++) {
            const itemEl = itemsEl[i];
            const label = (_a = itemEl.textContent) === null || _a === void 0 ? void 0 : _a.trim();
            expect(label).to.have.equal(expectedLabels[i]);
            expect(itemEl.getAttribute("aria-checked")).to.be.equal("false");
        }
        expect(container.value).to.be.equal(null);
    }));
});
describe("set nonexistent value", () => {
    const expectedValues = ["-----", "orange", "Apple"];
    const container = new Dropdown({});
    container.value = expectedValues[2];
    const getval = container.value;
    it("set nonexistent value", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(getval).to.be.equal(expectedValues[2]);
    }));
});
describe("set number value", () => {
    const container = new Dropdown({});
    // @ts-ignore
    container.value = 1;
    const getval = container.value;
    it("set number value", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(getval).to.be.equal(1);
    }));
});
