import { config } from "dotenv"
import cors from "cors";
import express from "express"

import solcast from "./routes/solcast"
import mapbox from "./routes/mapbox"
import openweathermap from "./routes/openweathermap"

config()

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors())

app.use("/solcast", solcast)
app.use("/mapbox", mapbox)
app.use("/openweathermap", openweathermap)

app.use(express.static("public"))

app.get("/", (request, response) => {
    response.json("Hello World")
})

app.listen(PORT, () => console.log(`listening on ${PORT}`));