import { Router } from "express";
import {getvendedores, createvendedores, updatevendedores, deletevendedores, getvendedor,getVendedoresProducto} from '../controllers/vendedores.controller.js'
const router = Router();

router.get("/vendedores",getvendedores);
router.post("/vendedores",createvendedores);
router.put("/vendedores/:id",updatevendedores);
router.delete("/vendedores/:id",deletevendedores);
router.get("/vendedores/:id",getvendedor);

router.get("/vendedores/:id/productos",getVendedoresProducto);

export default router;