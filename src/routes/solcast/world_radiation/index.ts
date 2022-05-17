import { Router } from "express";
import forecasts from "./forecasts"
import estimatedActuals from "./estimated_actuals"
import cors from "cors";

const router = Router()

router.use(cors())

router.use("/forecasts", forecasts)
router.use("/estimated_actuals", estimatedActuals)

export default router