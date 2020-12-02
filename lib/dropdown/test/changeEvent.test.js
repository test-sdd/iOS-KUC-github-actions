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
describe("Function change event run successfully", () => {
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
        value: expectedValues[1],
        disabled: false,
        visible: false
    });
    container.addEventListener("change", (event) => {
        expect(event.detail.value).to.be.equal(expectedValues[2]);
        expect(event.detail.oldValue).to.be.equal(expectedValues[1]);
    });
    it("Function change event run successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const toggleEl = el.querySelector(".kuc-dropdown__toggle");
        const itemsEl = el.querySelectorAll(".kuc-dropdown__select-menu__item");
        toggleEl.click();
        if (itemsEl.length > 0) {
            itemsEl[2].dispatchEvent(new Event("mousedown"));
        }
    }));
});
