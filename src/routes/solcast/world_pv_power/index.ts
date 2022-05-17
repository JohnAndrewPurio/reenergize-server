import { Router } from "express";

import forecasts from "./forecasts"
import estimated_actuals from "./estimated_actuals"

const router = Router()

router.use("/forecasts", forecasts)
router.use("/estimated_actuals", estimated_actuals)

export default router