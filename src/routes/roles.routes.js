import { Router } from "express";
import {getRoles, createRol, updateRoles, deleteRoles, getRol, getRolUsuario} from '../controllers/roles.controller.js'
const router = Router();

router.get("/roles",getRoles);
router.post("/roles",createRol);
router.put("/roles/:id",updateRoles);
router.delete("/roles/:id",deleteRoles);
router.get("/roles/:id",getRol);

router.get("/roles/:id/usuarios",getRolUsuario);

export default router;