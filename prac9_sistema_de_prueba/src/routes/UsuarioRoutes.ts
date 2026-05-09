import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController";
const router = Router();
router.post("/", UsuarioController.crear);
router.get("/", UsuarioController.listar);
router.delete("/:id", UsuarioController.eliminar);
export default router;