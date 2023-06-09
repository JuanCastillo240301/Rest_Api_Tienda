import { Router } from "express";
import {getUsuarios,createUsuario,login, updateUsuarios, deleteUsuarios, getUsuario} from '../controllers/usuarios.controller.js'
const router = Router();

router.get("/usuarios",getUsuarios);
router.post("/usuarios",createUsuario);
router.post("/login",login);
router.put("/usuarios/:id",updateUsuarios);
router.delete("/usuarios/:id",deleteUsuarios);
router.get("/usuarios/:id",getUsuario);

export default router;
