"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const geocoding_1 = __importDefault(require("./geocoding"));
const router = (0, express_1.Router)();
router.use("/geocoding", geocoding_1.default);
exports.default = router;
