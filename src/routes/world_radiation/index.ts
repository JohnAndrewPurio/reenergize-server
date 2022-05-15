import { Router } from "express";
import forecasts from "./forecasts"
import estimatedActuals from "./estimated_actuals"

const router = Router()

router.use("/forecasts", forecasts)
router.use("/estimated_actuals", estimatedActuals)

export default router