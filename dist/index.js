"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./dotenv");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const router_1 = __importDefault(require("./router"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, "..", "frontend")));
app.use(router_1.default);
const PORT = 7000;
app.listen(PORT);
console.info(`\n\n\n\n\tServidor rodando em http://localhost:${PORT}\n\n\n`);
//# sourceMappingURL=index.js.map