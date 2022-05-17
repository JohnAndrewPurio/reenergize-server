import { Router } from "express"

import worldRadiation from "./world_radiation"
import worldPvPower from "./world_pv_power"

const router = Router()

router.use("/world_radiation", worldRadiation)
router.use("/world_pv_power", worldPvPower)

export default router