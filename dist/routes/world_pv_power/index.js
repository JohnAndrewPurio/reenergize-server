"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const forecasts_1 = __importDefault(require("./forecasts"));
const estimated_actuals_1 = __importDefault(require("./estimated_actuals"));
const router = (0, express_1.Router)();
router.use("/forecasts", forecasts_1.default);
router.use("/estimated_actuals", estimated_actuals_1.default);
exports.default = router;
