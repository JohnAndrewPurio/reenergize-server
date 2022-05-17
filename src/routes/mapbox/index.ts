import { Router } from "express";

import geocoding from "./geocoding"

const router = Router()

router.use("/geocoding", geocoding)

export default router