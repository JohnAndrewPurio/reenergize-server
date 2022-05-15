"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMonthlyAverages = exports.getWorldRadiationEstimatedActualsGhi = exports.getWorldRadiationEstimatedActuals = exports.getWorldRadiationForecastGhi = exports.getWorldRadiationForecast = void 0;
const axios_1 = __importDefault(require("axios"));
const source_1 = require("./source");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const api_key = process.env.SOLCAST_API_KEY;
const getWorldRadiationForecast = async (latitude, longitude, hours) => {
    const url = new URL("/world_radiation/forecasts", source_1.SOLCAST_BASE_URL);
    const url_search_params = new URLSearchParams({
        latitude,
        longitude,
        format: "json",
        api_key
    });
    if (hours)
        url_search_params.append("hours", hours);
    url.search = url_search_params.toString();
    try {
        const { data } = await axios_1.default.get(url.toString());
        return data;
    }
    catch (error) {
        throw error;
    }
};
exports.getWorldRadiationForecast = getWorldRadiationForecast;
const getWorldRadiationForecastGhi = async (latitude, longitude, hours) => {
    const url = new URL("/world_radiation/forecasts/ghi", source_1.SOLCAST_BASE_URL);
    const url_search_params = new URLSearchParams({
        latitude,
        longitude,
        format: "json",
        api_key
    });
    if (hours)
        url_search_params.append("hours", hours);
    url.search = url_search_params.toString();
    try {
        const { data } = await axios_1.default.get(url.toString());
        return data;
    }
    catch (error) {
        throw error;
    }
};
exports.getWorldRadiationForecastGhi = getWorldRadiationForecastGhi;
const getWorldRadiationEstimatedActuals = async (latitude, longitude, hours) => {
    const url = new URL("/world_radiation/estimated_actuals", source_1.SOLCAST_BASE_URL);
    const url_search_params = new URLSearchParams({
        latitude,
        longitude,
        format: "json",
        api_key
    });
    if (hours)
        url_search_params.append("hours", hours);
    url.search = url_search_params.toString();
    try {
        const { data } = await axios_1.default.get(url.toString());
        return data;
    }
    catch (error) {
        throw error;
    }
};
exports.getWorldRadiationEstimatedActuals = getWorldRadiationEstimatedActuals;
const getWorldRadiationEstimatedActualsGhi = async (latitude, longitude, hours) => {
    const url = new URL("/world_radiation/estimated_actuals/ghi", source_1.SOLCAST_BASE_URL);
    const url_search_params = new URLSearchParams({
        latitude,
        longitude,
        format: "json",
        api_key
    });
    if (hours)
        url_search_params.append("hours", hours);
    url.search = url_search_params.toString();
    try {
        const { data } = await axios_1.default.get(url.toString());
        return data;
    }
    catch (error) {
        throw error;
    }
};
exports.getWorldRadiationEstimatedActualsGhi = getWorldRadiationEstimatedActualsGhi;
async function getMonthlyAverages(latitude, longitude) {
    const url = new URL("/monthly_averages", source_1.SOLCAST_BASE_URL);
    const url_search_params = new URLSearchParams({
        latitude: latitude,
        longitude: longitude,
        format: "json",
        api_key
    });
    url.search = url_search_params.toString();
    try {
        const fetchedData = await axios_1.default.get(url.toString());
        return fetchedData.data;
    }
    catch (error) {
        throw error;
    }
}
exports.getMonthlyAverages = getMonthlyAverages;
