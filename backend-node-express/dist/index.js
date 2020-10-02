"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const expressServer = express_1.default();
const corsOptions = {
    origin: "http://localhost:3000",
};
expressServer.use(cors_1.default(corsOptions));
expressServer.use(body_parser_1.default.json());
expressServer.use(body_parser_1.default.urlencoded({ extended: true }));
expressServer.get("/", (req, res) => {
    res.json({ message: "Welcome to my Node server." });
});
const PORT = process.env.PORT || 4000;
expressServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
//# sourceMappingURL=index.js.map