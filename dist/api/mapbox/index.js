"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseGeocoding = exports.forwardGeocoding = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = require("dotenv");
const source_1 = require("./source");
(0, dotenv_1.config)();
const access_token = process.env.MAPBOX_API_KEY;
/**
 * The forward geocoding query type allows you to look up a single location by name and returns its geographic coordinates.
 * More info: https://docs.mapbox.com/api/search/geocoding/#forward-geocoding
 *
 * @param location The location to search to
 * @param options Options to filter or expand the search results
 * @returns
 */
const forwardGeocoding = async (location, options) => {
    const url = new URL(`/geocoding/v5/mapbox.places/${location}.json`, source_1.MAPBOX_BASE_URL);
    const url_params = new URLSearchParams({
        access_token
    });
    if (options) {
        for (let key in options) {
            //@ts-ignore
            if (options[key] !== undefined)
                continue;
            //@ts-ignore
            url_params.append(key, options[key]);
        }
        url.search = url_params.toString();
    }
    try {
        const { data } = await axios_1.default.get(url.toString());
        return data;
    }
    catch (error) {
        throw error;
    }
};
exports.forwardGeocoding = forwardGeocoding;
const reverseGeocoding = async (latitude, longitude, options) => {
    const url = new URL(`/geocoding/v5/mapbox.places/${latitude},${longitude}.json`, source_1.MAPBOX_BASE_URL);
    const url_params = new URLSearchParams({
        access_token
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
exports.reverseGeocoding = reverseGeocoding;
