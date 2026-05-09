import { Request, Response } from "express" ;
import Database from "../config/database";
import Usuario from "../models/Usuario";
class UsuarioController {
public async crear(req: Request, res: Response) {
const { nombre, apellido, email, password } = req.body;
const u = new Usuario(nombre, apellido, email, password);
const db = Database.getInstance().getConnection();
await db.query("INSERT INTO usuarios (nombre, apellido, email, password) VALUES (?, ?, ?, ?)",
[u.getNombre(), u.getApellido(), u.getEmail(), u.getPassword()]);
res.json({ mensaje: "Usuario guardado con éxito" });
}
public async listar(req: Request, res: Response) {
const db = Database.getInstance().getConnection();
const [rows] = await db.query("SELECT * FROM usuarios");
res.json(rows);
}
public async eliminar(req: Request, res: Response) {
const { id } = req.params;
const db = Database.getInstance().getConnection();
await db.query("DELETE FROM usuarios WHERE id = ?", [id]);
res.json({ mensaje: "Usuario eliminado correctamente" });
}
}
export default new UsuarioController()