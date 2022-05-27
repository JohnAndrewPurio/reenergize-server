import axios from "axios"
import { WEATHER_BASE_URL } from "./source"

const appid = process.env.OPENWEATHERMAP_API_KEY || ""

interface OptionalParameters {
    mode?: "json" | "xml" | "html"
    units?: "standard" | "metric" | "imperial"
}

export const getCurrentWeather = async (lat: string, lon: string, parameters?: OptionalParameters) => {
    const url = new URL("/data/2.5/weather", WEATHER_BASE_URL)
    const url_search_params = new URLSearchParams({
        lat, lon, appid
    })

    if(parameters) {
        for(let key in parameters) {
            if(!parameters[key as keyof typeof parameters])
                continue

            url_search_params.append(key, parameters[key as keyof typeof parameters] as string)
        }
    }

    url.search = url_search_params.toString()

    try {
        const { data } = await axios.get(url.toString())

        return data
    } catch (error) {
        throw error
    }
}