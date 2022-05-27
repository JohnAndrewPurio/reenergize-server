import cors from "cors";
import { Router } from "express";
import { getWorldPvPowerForecasts, ResponseFormat } from "../../../../api/solcast";

const router = Router()

router.use(cors())

router.get("/", async (request, response) => {
    const { query } = request
    const { latitude, longitude, capacity, tilt, azimuth, install_date, loss_factor, hours, format } = query

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
        const data = await getWorldPvPowerForecasts(
            latitude as string,
            longitude as string,
            capacity as string,
            tilt ? tilt as string: "",
            azimuth ? azimuth as string: "",
            install_date ? install_date as string: "",
            loss_factor ? loss_factor as string: "",
            hours ? hours as string: "",
            format as (ResponseFormat | undefined)
        )

        response.json(data)
    } catch (e) {
        //@ts-ignore
        response.statusCode = e?.response.status

        //@ts-ignore
        console.log(e?.message)

        response.json(e)
    }
})

export default router