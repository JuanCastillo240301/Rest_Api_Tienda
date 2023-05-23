import { Router } from "express";
import {getordenes_de_compra, createordenes_de_compra, updateordenes_de_compra, deleteordenes_de_compra, getorden_de_compra} from '../controllers/ordenes_de_compra.controller.js'
const router = Router();

router.get("/ordenes_de_compra",getordenes_de_compra);
router.post("/ordenes_de_compra",createordenes_de_compra);
router.put("/ordenes_de_compra/:id",updateordenes_de_compra);
router.delete("/ordenes_de_compra/:id",deleteordenes_de_compra);
router.get("/ordenes_de_compra/:id",getorden_de_compra);

export default router;