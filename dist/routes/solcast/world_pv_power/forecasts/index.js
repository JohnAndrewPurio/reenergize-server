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
    const { latitude, longitude, capacity, tilt, azimuth, install_date, loss_factor, hours } = query;
    if (!latitude || !longitude) {
        response.status(400);
        response.json({
            message: "Missing latitude/longitude query parameter"
        });
        return;
    }
    if (!capacity) {
        response.status(400);
        response.json({
            message: "Missing capacity query parameter"
        });
        return;
    }
    try {
        const data = await (0, solcast_1.getWorldPvPowerForecasts)(latitude, longitude, capacity, tilt ? tilt : "", azimuth ? azimuth : "", install_date ? install_date : "", loss_factor ? loss_factor : "", hours ? hours : "");
        response.json(data);
    }
    catch (e) {
        //@ts-ignore
        response.statusCode = e?.response.status;
        //@ts-ignore
        console.log(e?.message);
        response.json(e);
    }
});
exports.default = router;
