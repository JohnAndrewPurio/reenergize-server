"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const solcast_1 = __importDefault(require("./routes/solcast"));
const mapbox_1 = __importDefault(require("./routes/mapbox"));
(0, dotenv_1.config)();
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use("/solcast", solcast_1.default);
app.use("/mapbox", mapbox_1.default);
app.get("/", (request, response) => {
    response.json("Hello World");
});
app.listen(PORT, () => console.log(`listening on ${PORT}`));
