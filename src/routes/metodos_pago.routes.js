import { Router } from "express";
import {getMetodosPago, createMetodoPago, updateMetodoPago, deleteMetodoPago, getMetodoPago} from '../controllers/metodos_pago.controller.js'
const router = Router();

router.get("/metodospago",getMetodosPago);
router.post("/metodospago",createMetodoPago);
router.put("/metodospago/:id",updateMetodoPago);
router.delete("/metodospago/:id",deleteMetodoPago);
router.get("/metodospago/:id",getMetodoPago);



export default router;