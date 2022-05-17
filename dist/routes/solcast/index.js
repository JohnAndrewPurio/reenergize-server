"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const world_radiation_1 = __importDefault(require("./world_radiation"));
const world_pv_power_1 = __importDefault(require("./world_pv_power"));
const router = (0, express_1.Router)();
router.use("/world_radiation", world_radiation_1.default);
router.use("/world_pv_power", world_pv_power_1.default);
exports.default = router;
