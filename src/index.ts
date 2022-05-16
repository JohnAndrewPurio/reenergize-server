import { config } from "dotenv"
import cors from "cors";
import express from "express"
import { getMonthlyAverages } from "./api/solcast";

import worldRadiation from "./routes/world_radiation"
import worldPvPower from "./routes/world_pv_power"

config()

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use("/world_radiation", worldRadiation)
app.use("/world_pv_power", worldPvPower)

app.get("/monthly_averages", async (request, response) => {
    const { latitude, longitude } = request.query

    if (!latitude || !longitude) {
        response.status(400)

        response.json({
            message: "Missing latitude/longitude query parameter"
        })

        return
    }

    const data = await getMonthlyAverages(latitude as string, longitude as string)

    response.json(data)
})

app.get("/", (request, response) => {
    response.json("Hello World")
})

app.listen(PORT, () => console.log(`listening on ${PORT}`));