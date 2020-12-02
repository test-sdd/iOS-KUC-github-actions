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
import { MobileCheckbox } from "../index";
describe("render successfully without props", () => {
    const container = new MobileCheckbox();
    it("have 'kuc-mobile-checkbox'", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const tagname = el.tagName;
        yield expect(tagname.toLowerCase()).to.be.equal("kuc-mobile-checkbox");
    }));
});
