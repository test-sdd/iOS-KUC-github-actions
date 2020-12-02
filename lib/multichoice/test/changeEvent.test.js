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
describe("Function Change event run successfully when mousedown", () => {
    const expectedLabels = ["Item 1", "Item 2", "Item 3"];
    const expectedValues = ["item-1", "item-2", "item-3"];
    const container = new MultiChoice({
        label: "Multi-Choice",
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
        value: [expectedValues[1]],
        disabled: false,
        visible: false
    });
    container.addEventListener("change", (event) => {
        expect(event.detail.value)
            .to.be.an("array")
            .that.include.members([expectedValues[1], expectedValues[2]]);
        expect(event.detail.oldValue)
            .to.be.an("array")
            .that.include.members([expectedValues[1]]);
    });
    it("Function Change event run successfully when mousedown", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const itemsEl = el.querySelectorAll(".kuc-multi-choice__menu__item");
        if (itemsEl.length > 0) {
            itemsEl[2].dispatchEvent(new Event("mousedown"));
        }
    }));
});
