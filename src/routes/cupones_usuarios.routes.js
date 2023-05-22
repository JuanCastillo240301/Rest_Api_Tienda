import { Router } from "express";
import { getcupones,createCupon,updateCupon,deleteCupones,getCupon } from '../controllers/cupones_usuarios.controller.js'
const router = Router();

router.get("/cupones_usuario",getcupones);
router.post("/cupones_usuario",createCupon);
router.put("/cupones_usuario/:id",updateCupon);
router.delete("/cupones_usuario/:id",deleteCupones);
router.get("/cupones_usuario/:id",getCupon);


export default router;