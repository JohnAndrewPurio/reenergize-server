"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mapbox_1 = require("../../../../api/mapbox");
const router = (0, express_1.Router)();
router.get("/", async (request, response) => {
    const { query } = request;
    const { location } = query;
    if (!location) {
        response.status(400);
        response.json({
            message: "Missing location query parameter"
        });
    }
    try {
        const data = await (0, mapbox_1.forwardGeocoding)(location);
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
