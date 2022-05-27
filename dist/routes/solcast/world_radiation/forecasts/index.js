"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = require("express");
const solcast_1 = require("../../../../api/solcast");
const router = (0, express_1.Router)();
router.use((0, cors_1.default)());
router.get("/", async (request, response) => {
    const { query } = request;
    const { latitude, longitude, hours, format } = request.query;
    if (!latitude || !longitude) {
        response.status(400);
        response.json({
            message: "Missing latitude/longitude query parameter"
        });
        return;
    }
    try {
        const data = await (0, solcast_1.getWorldRadiationForecast)(latitude, longitude, hours, format);
        response.json(data);
    }
    catch (e) {
        response.statusCode = 500;
        //@ts-ignore
        console.log(e?.message);
        response.json(e);
    }
});
router.get("/ghi", async (request, response) => {
    const { latitude, longitude, hours, format } = request.query;
    if (!latitude || !longitude) {
        response.status(400);
        response.json({
            message: "Missing latitude/longitude query parameter"
        });
        return;
    }
    try {
        const data = await (0, solcast_1.getWorldRadiationForecastGhi)(latitude, longitude, hours, format);
        response.json(data);
    }
    catch (e) {
        response.statusCode = 500;
        //@ts-ignore
        console.log(e?.message);
        response.json(e);
    }
});
exports.default = router;
