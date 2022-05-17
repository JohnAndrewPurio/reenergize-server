import { Router } from "express";
import { forwardGeocoding } from "../../../../../api/mapbox";

const router = Router()

router.get("/", async (request, response) => {
    const { query } = request
    const { location, latitude, longitude } = query

    if(!location || (!latitude && !longitude)) {
        response.status(400)

        response.json({
            message: `Missing ${!latitude || !longitude ? "latitude/longitude": "location"} query parameter`
        })
    }

    try {
        const data = await forwardGeocoding(location as string)

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