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
describe("visible default prop is true", () => {
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
    it("visible default prop is true", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        // eslint-disable-next-line no-unused-expressions
        expect(el).to.be.displayed;
    }));
});
describe("visible prop set to false successfully", () => {
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
        visible: false
    });
    it("visible prop set to false successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        // eslint-disable-next-line no-unused-expressions
        expect(el).not.to.be.displayed;
    }));
});
describe("visible prop set to true successfully", () => {
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
        visible: false
    });
    container.visible = true;
    it("visible prop set to true successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        // eslint-disable-next-line no-unused-expressions
        expect(el).to.be.displayed;
    }));
});
describe("visible prop set to false successfully", () => {
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
        visible: true,
        className: "visible_test"
    });
    container.visible = false;
    it("visible prop set to false successfully'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        // eslint-disable-next-line no-unused-expressions
        expect(el).not.to.be.displayed;
    }));
});
describe("visible default prop set to null", () => {
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
        visible: null
    });
    it("visible default prop set to null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        // eslint-disable-next-line no-unused-expressions
        expect(el).not.to.be.displayed;
    }));
});
describe("visible prop set to null", () => {
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
        ]
    });
    // @ts-ignore
    container.visible = null;
    it("visible prop set to null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        // eslint-disable-next-line no-unused-expressions
        expect(el).not.to.be.displayed;
    }));
});
