import { Router } from "express";

import v5 from "./v5"

const router = Router()

router.use("/v5", v5)

export default router
