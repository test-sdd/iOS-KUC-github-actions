var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { expect, fixture, elementUpdated } from "@open-wc/testing";
import { MobileNotification } from "../index";
describe("open method successfully", () => {
    const container = new MobileNotification();
    it("open method successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        container.open();
        yield elementUpdated(el);
        const bodyel = document.querySelector("BODY");
        yield expect(bodyel.querySelector("kuc-mobile-notification")).to.not.be
            .null;
        yield expect([
            "kuc-mobile-notification-fadein",
            "kuc-mobile-notification-fadeout"
        ].every(c => el.classList.contains(c))).to.be.false;
    }));
});
