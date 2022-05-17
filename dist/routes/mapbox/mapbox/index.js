"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.forwardGeocoding = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const api_key = process.env.MAPBOX_API_KEY;
const forwardGeocoding = async (location) => {
    const url = new URL(`/v5/mapbox.places/${location}.json`);
    const url_params = new URLSearchParams({
        api_key
    });
    url.search = url_params.toString();
    try {
        const { data } = await axios_1.default.get(url.toString());
        return data;
    }
    catch (error) {
        throw error;
    }
};
exports.forwardGeocoding = forwardGeocoding;
