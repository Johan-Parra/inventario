import {Router} from "express";
import { methodHTTP as categoriaController } from "../controllers/categoria.controllers.js";

/* Creamos el enrutador */
const router = Router();

/* Configuramos respuesta desde server metodo get, ,post */
router.get("/", categoriaController.getCategorias); // Read
router.post("/", categoriaController.postCategorias); // Create

/* Ruta que recibe un parametro*/
router.get("/:id", categoriaController.getCategory); 

/* Hacemos disponibles a router en toda la app */
export default router;
