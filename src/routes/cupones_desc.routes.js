import { Router } from "express";
import { createcupon_desc, deletecupon_desc, getcupon_desc, getcupones_desc, updatecupon_desc } from '../controllers/cupones_desc.controller.js'
const router = Router();

router.get("/cupones_desc",getcupones_desc);
router.post("/cupones_desc",createcupon_desc);
router.put("/cupones_desc/:id",updatecupon_desc);
router.delete("/cupones_desc/:id",deletecupon_desc);
router.post("/search/cupones_desc",getcupon_desc);


export default router;
