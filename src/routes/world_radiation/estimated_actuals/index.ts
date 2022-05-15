import { Router } from "express";
import { getWorldRadiationEstimatedActuals, getWorldRadiationEstimatedActualsGhi, getWorldRadiationForecast, getWorldRadiationForecastGhi } from "../../../api/solcast";

const router = Router()

router.get("/", async (request, response) => {
    const { latitude, longitude, hours } = request.query

    if (!latitude || !longitude) {
        response.status(400)

        response.json({
            message: "Missing latitude/longitude query parameter"
        })

        return
    }

    const data = await getWorldRadiationEstimatedActuals(
        latitude as string, 
        longitude as string, 
        hours as string | undefined
    )

    response.json(data)
})

router.get("/ghi", async (request, response) => {
    const { latitude, longitude, hours } = request.query

    if (!latitude || !longitude) {
        response.status(400)

        response.json({
            message: "Missing latitude/longitude query parameter"
        })

        return
    }

    const data = await getWorldRadiationEstimatedActualsGhi(
        latitude as string, 
        longitude as string, 
        hours as string | undefined
    )

    response.json(data)
})

export default router