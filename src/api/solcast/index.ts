import axios, { Axios } from "axios"
import { SOLCAST_BASE_URL } from "./source"
import { config } from "dotenv"

config()
const api_key = process.env.SOLCAST_API_KEY as string

export type ResponseFormat = "csv" | "json" | "xml"

export const getWorldRadiationForecast = async (latitude: string, longitude: string, hours?: string, format: ResponseFormat = "json") => {
    const url = new URL("/world_radiation/forecasts", SOLCAST_BASE_URL)
    const url_search_params = new URLSearchParams({
        latitude,
        longitude,
        format,
        api_key
    })

    if (hours)
        url_search_params.append("hours", hours)

    url.search = url_search_params.toString()

    try {
        const { data } = await axios.get(url.toString())

        return data
    } catch (error) {
        throw error
    }
}

export const getWorldRadiationForecastGhi = async (latitude: string, longitude: string, hours?: string, format: ResponseFormat = "json") => {
    const url = new URL("/world_radiation/forecasts/ghi", SOLCAST_BASE_URL)
    const url_search_params = new URLSearchParams({
        latitude,
        longitude,
        format,
        api_key
    })

    if (hours)
        url_search_params.append("hours", hours)

    url.search = url_search_params.toString()

    try {
        const { data } = await axios.get(url.toString())

        return data
    } catch (error) {
        throw error
    }
}

export const getWorldRadiationEstimatedActuals = async (latitude: string, longitude: string, hours?: string, format: ResponseFormat = "json") => {
    const url = new URL("/world_radiation/estimated_actuals", SOLCAST_BASE_URL)
    const url_search_params = new URLSearchParams({
        latitude,
        longitude,
        format,
        api_key
    })

    if (hours)
        url_search_params.append("hours", hours)

    url.search = url_search_params.toString()

    try {
        const { data } = await axios.get(url.toString())

        return data
    } catch (error) {
        throw error
    }
}

export const getWorldRadiationEstimatedActualsGhi = async (latitude: string, longitude: string, hours?: string, format: ResponseFormat = "json") => {
    const url = new URL("/world_radiation/estimated_actuals/ghi", SOLCAST_BASE_URL)
    const url_search_params = new URLSearchParams({
        latitude,
        longitude,
        format,
        api_key
    })

    if (hours)
        url_search_params.append("hours", hours)

    url.search = url_search_params.toString()

    try {
        const { data } = await axios.get(url.toString())

        return data
    } catch (error) {
        throw error
    }
}

/**
 * Takes a location along with PV system capacity and other optional parameters to produce a PV power forecast based on satellite derived radiation. The time window is by default 48 hours but can be extended up to 7 days.
 * 
 * @param latitude The latitude of the location
 * @param longitude The longitude of the location
 * @param capacity The capacity of the inverter (AC) or the modules (DC), whichever is greater. Units in kilowatts. Must be greater than zero.
 * @param tilt The angle (degrees) that the PV system is tilted off the horizontal. Must be between 0 and 90. A tilt of 0 means the system is facing directly upwards, and 90 means the system is vertical and facing the horizon. The default value is 23.
 * @param azimuth The angle (degrees) from true north that the PV system is facing, if titled. Must be between -180 and 180. An azimuth of 0 means the system is facing true north. Positive values are anticlockwise, so azimuth is -90 for an east-facing system and 135 for a southwest-facing system. The default value is 0 (north facing) in the southern hemisphere, 180 (south-facing) in the northern hemisphere.
 * @param install_date 	The date (yyyy-MM-dd) of installation of the PV system. We use this to estimate your loss_factor based on the ageing of your system. If you provide us with a loss_factor directly, we will ignore this date.
 * @param loss_factor A factor by which to reduce your output forecast from the full capacity based on characteristics of the PV array or inverter. This is effectively the non-temperature loss effects on the nameplate rating of the PV system, including inefficiency and soiling. For a 1kW PV system anything that reduces 1000W/m2 solar radiation from producing 1000W of power output (assuming temperature is 25C). Valid values are between 0 and 1 (i.e 0.6 equals 60%). If you specify 0.6 your returned power will be a maximum of 60% of AC capacity.
 * @param hours Time window of the response in hours (default 48, max 168)
 */
export const getWorldPvPowerForecasts = async (
    latitude: string, longitude: string, capacity: string, tilt?: string, azimuth?: string, install_date?: string, loss_factor?: string, hours?: string, format: ResponseFormat = "json"
) => {
    const url = new URL("/world_pv_power/forecasts", SOLCAST_BASE_URL)
    const url_search_params = new URLSearchParams({
        latitude: String(latitude),
        longitude: String(longitude),
        capacity: String(capacity),
        format,
        api_key
    })

    if (tilt)
        url_search_params.append("tilt", String(tilt))

    if (azimuth)
        url_search_params.append("azimuth", String(azimuth))

    if (install_date)
        url_search_params.append("install_date", String(install_date))

    if (loss_factor)
        url_search_params.append("loss_factor", String(loss_factor))

    if (hours)
        url_search_params.append("hours", String(hours))

    url.search = url_search_params.toString()

    try {
        const { data } = await axios.get(url.toString())

        return data
    } catch (error) {
        throw error
    }
}

/**
 * This endpoint takes a location and returns satellite derived observations ("estimated actuals") for a specific location and PV system parameters. The time window is by default 48 hours but can be extended up to 7 days.
 * 
 * @param latitude The latitude of the location
 * @param longitude The longitude of the location
 * @param capacity The capacity of the inverter (AC) or the modules (DC), whichever is greater. Units in kilowatts. Must be greater than zero.
 * @param tilt The angle (degrees) that the PV system is tilted off the horizontal. Must be between 0 and 90. A tilt of 0 means the system is facing directly upwards, and 90 means the system is vertical and facing the horizon. The default value is 23.
 * @param azimuth The angle (degrees) from true north that the PV system is facing, if titled. Must be between -180 and 180. An azimuth of 0 means the system is facing true north. Positive values are anticlockwise, so azimuth is -90 for an east-facing system and 135 for a southwest-facing system. The default value is 0 (north facing) in the southern hemisphere, 180 (south-facing) in the northern hemisphere.
 * @param install_date 	The date (yyyy-MM-dd) of installation of the PV system. We use this to estimate your loss_factor based on the ageing of your system. If you provide us with a loss_factor directly, we will ignore this date.
 * @param loss_factor A factor by which to reduce your output forecast from the full capacity based on characteristics of the PV array or inverter. This is effectively the non-temperature loss effects on the nameplate rating of the PV system, including inefficiency and soiling. For a 1kW PV system anything that reduces 1000W/m2 solar radiation from producing 1000W of power output (assuming temperature is 25C). Valid values are between 0 and 1 (i.e 0.6 equals 60%). If you specify 0.6 your returned power will be a maximum of 60% of AC capacity.
 * @param hours Time window of the response in hours (default 48, max 168)
 */
export const getWorldPvPowerEstimatedActuals = async (
    latitude: string,
    longitude: string,
    capacity: string,
    tilt?: string,
    azimuth?: string,
    install_date?: string,
    loss_factor?: string,
    hours?: string,
    format: ResponseFormat = "json"
) => {
    const url = new URL("/world_pv_power/estimated_actuals", SOLCAST_BASE_URL)
    const url_search_params = new URLSearchParams({
        latitude: String(latitude),
        longitude: String(longitude),
        capacity: String(capacity),
        format,
        api_key
    })

    if (tilt)
        url_search_params.append("tilt", String(tilt))

    if (azimuth)
        url_search_params.append("azimuth", String(azimuth))

    if (install_date)
        url_search_params.append("install_date", String(install_date))

    if (loss_factor)
        url_search_params.append("loss_factor", String(loss_factor))

    if (hours)
        url_search_params.append("hours", String(hours))

    url.search = url_search_params.toString()

    try {
        const { data } = await axios.get(url.toString())

        return data
    } catch (error) {
        throw error
    }
}

export async function getMonthlyAverages(latitude: string, longitude: string, format: ResponseFormat = "json") {
    const url = new URL("/monthly_averages", SOLCAST_BASE_URL)
    const url_search_params = new URLSearchParams({
        latitude: latitude,
        longitude: longitude,
        format,
        api_key
    })

    url.search = url_search_params.toString()

    try {
        const fetchedData = await axios.get(url.toString())

        return fetchedData.data
    } catch (error) {
        throw error
    }
}