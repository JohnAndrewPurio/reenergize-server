import axios from "axios"
import { WEATHER_BASE_URL } from "./source"

const appid = process.env.OPENWEATHERMAP_API_KEY || ""

export const getCurrentWeather = async (lat: string, lon: string) => {
    const url = new URL("/data/2.5/weather", WEATHER_BASE_URL)
    const url_search_params = new URLSearchParams({
        lat, lon, appid
    })

    url.search = url_search_params.toString()

    try {
        const { data } = await axios.get(url.toString())

        return data
    } catch (error) {
        throw error
    }
}