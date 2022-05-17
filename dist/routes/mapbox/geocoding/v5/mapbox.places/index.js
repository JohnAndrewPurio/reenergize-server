"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mapbox_1 = require("../../../../../api/mapbox");
const router = (0, express_1.Router)();
router.get("/", async (request, response) => {
    const { query } = request;
    const { location, latitude, longitude } = query;
    if (!location || (!latitude && !longitude)) {
        response.status(400);
        response.json({
            message: `Missing ${!latitude || !longitude ? "latitude/longitude" : "location"} query parameter`
        });
    }
    try {
        const data = await (0, mapbox_1.forwardGeocoding)(location);
        response.json(data);
    }
    catch (e) {
        //@ts-ignore
        response.statusCode = e?.response?.status || 500;
        //@ts-ignore
        console.log(e?.message, e?.response?.status);
        response.json(e);
    }
});
exports.default = router;
