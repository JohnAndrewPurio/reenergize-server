"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const solcast_1 = require("../../../api/solcast");
const router = (0, express_1.Router)();
router.get("/", async (request, response) => {
    const { latitude, longitude, hours } = request.query;
    if (!latitude || !longitude) {
        response.status(400);
        response.json({
            message: "Missing latitude/longitude query parameter"
        });
        return;
    }
    const data = await (0, solcast_1.getWorldRadiationEstimatedActuals)(latitude, longitude, hours);
    response.json(data);
});
router.get("/ghi", async (request, response) => {
    const { latitude, longitude, hours } = request.query;
    if (!latitude || !longitude) {
        response.status(400);
        response.json({
            message: "Missing latitude/longitude query parameter"
        });
        return;
    }
    const data = await (0, solcast_1.getWorldRadiationEstimatedActualsGhi)(latitude, longitude, hours);
    response.json(data);
});
exports.default = router;
