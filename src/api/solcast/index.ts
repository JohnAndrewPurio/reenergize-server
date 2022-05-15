import axios from "axios"
import { SOLCAST_BASE_URL } from "./source"
import { config } from "dotenv"

config()
const api_key = process.env.SOLCAST_API_KEY as string

export const getWorldRadiationForecast = async (latitude: string, longitude: string, hours?: string) => {
    const url = new URL("/world_radiation/forecasts", SOLCAST_BASE_URL)
    const url_search_params = new URLSearchParams({
        latitude,
        longitude,
        format: "json",
        api_key
    })

    if(hours)
        url_search_params.append("hours", hours)

    url.search = url_search_params.toString()

    try {
        const { data } = await axios.get(url.toString())

        return data
    } catch (error) {
        throw error
    }
}

export const getWorldRadiationForecastGhi = async (latitude: string, longitude: string, hours?: string) => {
    const url = new URL("/world_radiation/forecasts/ghi", SOLCAST_BASE_URL)
    const url_search_params = new URLSearchParams({
        latitude,
        longitude,
        format: "json",
        api_key
    })

    if(hours)
        url_search_params.append("hours", hours)

    url.search = url_search_params.toString()

    try {
        const { data } = await axios.get(url.toString())

        return data
    } catch (error) {
        throw error
    }
}

export const getWorldRadiationEstimatedActuals = async (latitude: string, longitude: string, hours?: string) => {
    const url = new URL("/world_radiation/estimated_actuals", SOLCAST_BASE_URL)
    const url_search_params = new URLSearchParams({
        latitude, 
        longitude, 
        format: "json", 
        api_key
    })

    if(hours)
        url_search_params.append("hours", hours)

    url.search = url_search_params.toString()

    try {
        const { data } = await axios.get(url.toString())

        return data
    } catch (error) {
        throw error
    }
}

export const getWorldRadiationEstimatedActualsGhi = async (latitude: string, longitude: string, hours?: string) => {
    const url = new URL("/world_radiation/estimated_actuals/ghi", SOLCAST_BASE_URL)
    const url_search_params = new URLSearchParams({
        latitude, 
        longitude, 
        format: "json", 
        api_key
    })

    if(hours)
        url_search_params.append("hours", hours)

    url.search = url_search_params.toString()

    try {
        const { data } = await axios.get(url.toString())

        return data
    } catch (error) {
        throw error
    }
}


export async function getMonthlyAverages(latitude: string, longitude: string) {
    const url = new URL("/monthly_averages", SOLCAST_BASE_URL)
    const url_search_params = new URLSearchParams({
        latitude: latitude,
        longitude: longitude,
        format: "json",
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