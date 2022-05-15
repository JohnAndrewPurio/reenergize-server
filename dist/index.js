"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const solcast_1 = require("./api/solcast");
const world_radiation_1 = __importDefault(require("./routes/world_radiation"));
(0, dotenv_1.config)();
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use("/world_radiation", world_radiation_1.default);
app.get("/monthly_averages", async (request, response) => {
    const { latitude, longitude } = request.query;
    if (!latitude || !longitude) {
        response.status(400);
        response.json({
            message: "Missing latitude/longitude query parameter"
        });
        return;
    }
    const data = await (0, solcast_1.getMonthlyAverages)(latitude, longitude);
    response.json(data);
});
app.get("/", (request, response) => {
    response.json("Hello World");
});
app.listen(PORT, () => console.log(`listening on ${PORT}`));
