import cors from "cors";
import { Router } from "express";
import { getWorldPvPowerEstimatedActuals, getWorldPvPowerForecasts } from "../../../api/solcast";

const router = Router()

router.use(cors())

router.get("/", async (request, response) => {
    const { query } = request

    const { latitude, longitude, capacity, tilt, azimuth, install_date, loss_factor, hours } = request.query

    if (!latitude || !longitude) {
        response.status(400)

        response.json({
            message: "Missing latitude/longitude query parameter"
        })

        return
    }

    if (!capacity) {
        response.status(400)

        response.json({
            message: "Missing capacity query parameter"
        })

        return
    }

    try {
        const data = await getWorldPvPowerEstimatedActuals(
            latitude as string,
            longitude as string,
            capacity as string,
            tilt ? tilt as string: "",
            azimuth ? azimuth as string: "",
            install_date ? install_date as string: "",
            loss_factor ? loss_factor as string: "",
            hours ? hours as string: ""
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