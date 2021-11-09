"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const webpush_1 = __importDefault(require("./webpush"));
const router = (0, express_1.Router)();
router.post("/subscription", async (request, response) => {
    try {
        const { subscription, form } = request.body;
        await webpush_1.default.sendNotification(subscription, JSON.stringify(form));
    }
    catch (error) {
        console.error(error);
    }
    return response.status(200).json();
});
exports.default = router;
//# sourceMappingURL=router.js.map