import axios from "axios"
import { config } from "dotenv"
import { MAPBOX_BASE_URL } from "./source"

config()

const access_token = process.env.MAPBOX_API_KEY as string

export const forwardGeocoding = async (location: string) => {
    const url = new URL(`/geocoding/v5/mapbox.places/${location}.json`, MAPBOX_BASE_URL)
    const url_params = new URLSearchParams({
        access_token
    })

    url.search = url_params.toString()

    try {
        const { data } = await axios.get(url.toString())

        return data
    } catch (error) {
        throw error
    }
}

export const reverseGeocoding = async (latitude: string, longitude: string) => {
    const url = new URL(`/geocoding/v5/mapbox.places/${latitude},${longitude}.json`, MAPBOX_BASE_URL)
    const url_params = new URLSearchParams({
        access_token
    })

    url.search = url_params.toString()

    try {
        const { data } = await axios.get(url.toString())

        return data
    } catch (error) {
        throw error
    }
}