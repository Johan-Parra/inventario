import {Router} from "express";
import { methodHTTP as categoriaController } from "../controllers/categoria.controllers.js";

/* Creamos el enrutador */
const router = Router();

/* Configuramos respuesta desde server metodo get */
router.get("/", categoriaController.getCategorias); // Read
router.post("/", categoriaController.postCategorias); // Create

/* Hacemos disponibles a router en toda la app */
export default router;
