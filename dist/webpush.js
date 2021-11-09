"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web_push_1 = __importDefault(require("web-push"));
web_push_1.default.setVapidDetails("mailto:test@gmail.com", String(process.env.PUBLIC_WEB_PUSH), String(process.env.PRIVATE_WEB_PUSH));
exports.default = web_push_1.default;
//# sourceMappingURL=webpush.js.map