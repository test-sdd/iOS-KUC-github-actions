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
import { Notification } from "../index";
describe("type default prop is danger", () => {
    const container = new Notification({});
    it("type default prop is danger", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const typeEl = (yield el.querySelector(".kuc-notification__notification"));
        yield expect([
            "kuc-notification__notification",
            "kuc-notification__notification--danger"
        ].every(c => typeEl.classList.contains(c))).to.be.true;
    }));
});
describe("type prop set to danger successfully", () => {
    const container = new Notification({
        type: "info"
    });
    container.type = "danger";
    it("type prop set to danger successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const typeEl = (yield el.querySelector(".kuc-notification__notification"));
        yield expect([
            "kuc-notification__notification",
            "kuc-notification__notification--danger"
        ].every(c => typeEl.classList.contains(c))).to.be.true;
    }));
});
describe("type prop set to info successfully", () => {
    const container = new Notification({
        type: "danger"
    });
    container.type = "info";
    it("type prop set to info successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const typeEl = (yield el.querySelector(".kuc-notification__notification"));
        yield expect([
            "kuc-notification__notification",
            "kuc-notification__notification--info"
        ].every(c => typeEl.classList.contains(c))).to.be.true;
    }));
});
describe("type prop set to success successfully", () => {
    const container = new Notification({
        type: "danger"
    });
    container.type = "success";
    it("type prop set to success successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const typeEl = (yield el.querySelector(".kuc-notification__notification"));
        yield expect([
            "kuc-notification__notification",
            "kuc-notification__notification--success"
        ].every(c => typeEl.classList.contains(c))).to.be.true;
    }));
});
describe("type prop set to null successfully", () => {
    const container = new Notification({
        type: "danger"
    });
    // @ts-ignore
    container.type = null;
    it("type prop set to null successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const typeEl = (yield el.querySelector(".kuc-notification__notification"));
        yield expect([
            "kuc-notification__notification",
            "kuc-notification__notification--null"
        ].every(c => typeEl.classList.contains(c))).to.be.true;
    }));
});
