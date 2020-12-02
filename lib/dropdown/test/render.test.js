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
describe("Render successfully without props", () => {
    const container = new Dropdown();
    it('have "kuc-dropdown"', () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const tagname = (yield el).tagName;
        expect(tagname.toLowerCase()).to.be.equal("kuc-dropdown");
        expect(el).dom.to.equalSnapshot({
            ignoreAttributes: ["aria-describedby", "aria-labelledby", "id"]
        });
    }));
});
describe("Render successfully full props", () => {
    const container = new Dropdown({
        label: "Fruit",
        requiredIcon: false,
        items: [
            {
                label: "orange",
                value: "Orange"
            },
            {
                label: "apple",
                value: "Apple"
            }
        ],
        value: "Orange",
        error: "Error occurred!",
        className: "options-class",
        id: "options-id",
        visible: true,
        disabled: false
    });
    it('Render successfully full props"', () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
    }));
});
describe("Render successfully with showing and hiding selection list", () => {
    const container = new Dropdown();
    it("displaed select item", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const toggle = (yield el.querySelector(".kuc-dropdown__toggle"));
        const itemsEl = (yield el.querySelector(".kuc-dropdown__select-menu"));
        const outer = (yield el.querySelector(".kuc-dropdown__label__text"));
        toggle.click();
        outer.click();
        yield expect(itemsEl).not.to.be.displayed;
        toggle.click();
        yield expect(itemsEl).to.be.displayed;
    }));
});
