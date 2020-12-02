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
describe("Function change event run successfully by mouse/keyboard event", () => {
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
    container.addEventListener("change", (event) => {
        expect(event.detail.value)
            .to.be.an("array")
            .that.includes(expectedValues[2], expectedValues[1]);
        expect(event.detail.oldValue)
            .to.be.an("array")
            .that.includes(expectedValues[1]);
    });
    it("Function change event run successfully by mouse/keyboard event", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const itemsEl = el.querySelector(".kuc-checkbox__group__select-menu")
            .children;
        if (itemsEl.length > 0) {
            const secondItemEl = itemsEl[2];
            const inputEl = secondItemEl.children[0];
            inputEl.dispatchEvent(new Event("change"));
        }
    }));
});
