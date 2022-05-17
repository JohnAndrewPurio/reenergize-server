import { Router } from "express";

import mapboxPlaces from "./mapbox.places"

const router = Router()

router.use("/mapbox.places", mapboxPlaces)

export default router