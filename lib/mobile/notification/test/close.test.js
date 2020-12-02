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
describe("close method successfully", () => {
    const container = new MobileNotification();
    container.open();
    it("close method successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        container.close();
        yield elementUpdated(el);
        const bodyEl = document.querySelector("BODY");
        yield expect(bodyEl.querySelector("kuc-mobile-notification")).to.not.be
            .null;
        yield expect(el.classList.contains("kuc-mobile-notification-fadeout")).to.be
            .true;
    }));
});
