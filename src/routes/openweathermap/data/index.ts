import { Router } from "express";

import v2_5 from "./2.5"

const router = Router()

router.use("/2.5", v2_5)

export default router