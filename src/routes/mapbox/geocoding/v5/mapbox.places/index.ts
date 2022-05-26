import { Router } from "express";
import { forwardGeocoding, reverseGeocoding } from "../../../../../api/mapbox";

const router = Router()

router.get("/", async (request, response) => {
    const { query } = request
    const { location, latitude, longitude } = query

    if (!location && (!latitude && !longitude)) {
        response.status(400)

        response.json({
            message: `Missing ${!latitude || !longitude ? "latitude/longitude" : "location"} query parameter`
        })
    }

    try {
        let data

        if(location) {
            delete query["location"]

            data = await forwardGeocoding(location as string, query)
        } else {
            delete query["latitude"]
            delete query["longitude"]

            data = await reverseGeocoding(latitude as string, longitude as string, query)
        }

        response.json(data)
    } catch (e) {
        //@ts-ignore
        response.statusCode = e?.response?.status || 500

        //@ts-ignore
        console.log(e?.message, e?.response?.status)

        response.json(e)
    }
})

export default router