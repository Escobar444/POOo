import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController";
const router = Router();
router.post("/", UsuarioController.crear);
router.get("/", UsuarioController.listar);
export default router;