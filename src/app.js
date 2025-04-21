 /* Importamos al framework express */
import express from "express";
import cors from "cors";
import categoriaRoutes from "./routes/categorias.routes.js"

/* Asignamos a app toda funcionalidad para mi server web */
const app = express()

/* Setear un puerto a mi web server */
app.set("port", 5000)

/* Middleware */ // Elementos entre la request y la response
app.use(express.json()); // Hace la traduccion de json a un formato legible para el Post de la base de datos
app.use(cors());

/* routes */
app.use("/api/categorias",categoriaRoutes)

/* Haemos disponible a mi server app apra toda la aplicacion */
export default app;