import axios from "axios"
import { config } from "dotenv"
import { MAPBOX_BASE_URL } from "./source"

config()

const access_token = process.env.MAPBOX_API_KEY as string

interface GeocodingOptions {
    country?: string
    language?: string
    limit?: number
    routing?: boolean
    types?: "country" | "region" | "postcode" | "district" | "place" | "locality" | "neighborhood" | "address" | "poi"
    worldview?: string
    proximity?: string
}

interface ForwardGeocodingOptions extends GeocodingOptions {
    autocomplete?: boolean
    bbox?: string
    fuzzyMatch?: boolean
}

interface ReverseGeocodingOptions extends GeocodingOptions {
    reverseMode?: string
    autocomplete?: boolean
    fuzzyMatch?: boolean
}

/**
 * The forward geocoding query type allows you to look up a single location by name and returns its geographic coordinates.
 * More info: https://docs.mapbox.com/api/search/geocoding/#forward-geocoding
 * 
 * @param location The location to search to
 * @param options Options to filter or expand the search results
 * @returns 
 */
export const forwardGeocoding = async (location: string, options?: ForwardGeocodingOptions) => {
    const url = new URL(`/geocoding/v5/mapbox.places/${location}.json`, MAPBOX_BASE_URL)
    const url_params = new URLSearchParams({
        access_token
    })

    if (options) {
        for (let key in options) {
            //@ts-ignore
            if (options[key] !== undefined)
                continue

            //@ts-ignore
            url_params.append(key, options[key])
        }

        url.search = url_params.toString()
    }

    try {
        const { data } = await axios.get(url.toString())

        return data
    } catch (error) {
        throw error
    }
}

export const reverseGeocoding = async (latitude: string, longitude: string, options?: ReverseGeocodingOptions) => {
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