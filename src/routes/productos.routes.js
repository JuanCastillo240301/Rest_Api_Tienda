import { Router } from "express";
import {getProductos, createProducto, updateProductos, deleteProductos, getProducto} from '../controllers//productos.controller.js'
const router = Router();

router.get("/productos",getProductos);
router.post("/productos",createProducto);
router.put("/productos/:id",updateProductos);
router.delete("/productos/:id",deleteProductos);
router.get("/productos/:id",getProducto);

export default router;