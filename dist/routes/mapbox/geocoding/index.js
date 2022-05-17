"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const v5_1 = __importDefault(require("./v5"));
const router = (0, express_1.Router)();
router.use("/v5", v5_1.default);
exports.default = router;
