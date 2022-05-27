import cors from "cors";
import { Router } from "express";
import { getWorldRadiationForecast, getWorldRadiationForecastGhi, ResponseFormat } from "../../../../api/solcast";

const router = Router()

router.use(cors())

router.get("/", async (request, response) => {
    const { query } = request

    const { latitude, longitude, hours, format } = request.query

    if (!latitude || !longitude) {
        response.status(400)

        response.json({
            message: "Missing latitude/longitude query parameter"
        })

        return
    }

    try {
        const data = await getWorldRadiationForecast(
            latitude as string,
            longitude as string,
            hours as string | undefined,
            format as (ResponseFormat | undefined)
        )

        response.json(data)
    } catch (e) {
        response.statusCode = 500

        //@ts-ignore
        console.log(e?.message)

        response.json(e)
    }
})

router.get("/ghi", async (request, response) => {
    const { latitude, longitude, hours, format } = request.query

    if (!latitude || !longitude) {
        response.status(400)

        response.json({
            message: "Missing latitude/longitude query parameter"
        })

        return
    }

    try {
        const data = await getWorldRadiationForecastGhi(
            latitude as string,
            longitude as string,
            hours as string | undefined,
            format as (ResponseFormat | undefined)
        )

        response.json(data)
    } catch (e) {
        response.statusCode = 500

        //@ts-ignore
        console.log(e?.message)

        response.json(e)
    }
})

export default router