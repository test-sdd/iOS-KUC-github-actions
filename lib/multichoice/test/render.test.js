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
describe("Render successfully without props", () => {
    const container = new MultiChoice();
    it('have "kuc-multi-choice"', () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const tagname = (yield el).tagName;
        expect(tagname.toLowerCase()).to.be.equal("kuc-multi-choice");
        expect(el).dom.to.equalSnapshot({
            ignoreAttributes: ["aria-describedby", "aria-labelledby", "id"]
        });
    }));
});
describe("Render successfully full props", () => {
    const container = new MultiChoice({
        label: "Mutiple-Choice",
        requiredIcon: true,
        items: [
            {
                label: "Item 1",
                value: "item-1"
            },
            {
                label: "Item 2",
                value: "item-2"
            },
            {
                label: "Item 3",
                value: "item-3"
            },
            {
                label: "Item 4",
                value: "item-4"
            },
            {
                label: "Item 5",
                value: "item-5"
            }
        ],
        value: ["item-1", "item-3"],
        error: "Error occurred!",
        className: "sample-class",
        id: "sample-id",
        visible: true,
        disabled: false
    });
    it('Render successfully full props"', () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        expect(el).dom.to.equalSnapshot({
            ignoreAttributes: ["aria-describedby", "aria-labelledby", "id"]
        });
    }));
});
