import {Router} from "express";
import { methodHTTP as categoriaController } from "../controllers/categoria.controllers.js";

/* Creamos el enrutador */
const router = Router();

/* Configuramos respuesta desde server metodo get, ,post, delete */
router.get("/", categoriaController.getCategorias); // CRUD - Read
router.post("/", categoriaController.postCategorias); // CRUD - Create

/* Ruta que recibe un parametro*/
router.get("/:id", categoriaController.getCategory); // CRUD - Read 1 row
router.delete("/:id", categoriaController.deleteCategory); // CRUD - Delete 1 row

/* Hacemos disponibles a router en toda la app */
export default router;
