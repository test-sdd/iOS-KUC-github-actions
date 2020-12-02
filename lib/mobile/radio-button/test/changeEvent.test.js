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
describe("Function change event run successfully", () => {
    const expectedLabels = ["Item 1", "Item 2", "Item 3"];
    const expectedValues = ["item-1", "item-2", "item-3"];
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
    container.addEventListener("change", (event) => {
        expect(event.detail.oldValue).to.have.equal(expectedValues[1]);
        expect(event.detail.value).to.have.equal(expectedValues[2]);
    });
    it("Function change event run successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const menuEl = (yield el.querySelector(".kuc-mobile-radio-button__group__select-menu"));
        // eslint-disable-next-line require-atomic-updates
        container.value = expectedValues[2];
        const event = new CustomEvent("change", {
            detail: { oldValue: expectedValues[1], value: expectedValues[2] }
        });
        menuEl.dispatchEvent(event);
    }));
});
