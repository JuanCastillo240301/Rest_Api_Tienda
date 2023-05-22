import { Router } from "express";
import {getCategorias, createCategoria, updateCategorias, deleteCategorias, getCategoria,getCategoriaProducto } from '../controllers/categorias_p.controller.js'
const router = Router();

router.get("/categorias",getCategorias);
router.post("/categorias",createCategoria);
router.put("/categorias/:id",updateCategorias);
router.delete("/categorias/:id",deleteCategorias);
router.get("/categorias/:id",getCategoria);

router.get("/categorias/:id/productos",getCategoriaProducto);

export default router;