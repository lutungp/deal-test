"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("config"));
const logger_1 = __importDefault(require("./logger"));
const connect_1 = __importDefault(require("./database/connect"));
const app = (0, express_1.default)();
const port = config_1.default.get("port");
const host = config_1.default.get("host");
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.listen(port, () => {
    logger_1.default.info(`[server]: Server is running attt https://${host}:${port}`);
    (0, connect_1.default)();
});
