import { Router } from "express";
import { getCurrentWeather } from "../../../../../api/openweathermap";

const router = Router()

router.get("/", async (request, response) => {
    const { query } = request
    const { lat, lon, mode, units } = query

    if(!lat || !lon) {
        response.json({
            message: "Missing 'lat' and 'lon' query parameter"
        })
    }

    try {
        const data = await getCurrentWeather(lat as string, lon as string, {
            // @ts-ignore
            mode: mode as string, 
            // @ts-ignore
            units: units as string
        })

        response.json(data)
    } catch (e) {
        const { message } = e as Error

        response.statusCode = 500
        response.json({
            message
        })
    }
})

export default router