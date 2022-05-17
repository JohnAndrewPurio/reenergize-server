"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mapbox_places_1 = __importDefault(require("./mapbox.places"));
const router = (0, express_1.Router)();
router.use("/mapbox.places", mapbox_places_1.default);
exports.default = router;
