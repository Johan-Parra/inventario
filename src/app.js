 /* Importamos al framework express */
import express from "express";
import categoriaRoutes from "./routes/categorias.routes.js"

/* Asignamos a app toda funcionalidad para mi server web */
const app = express()

/* Setear un puerto a mi web server */
app.set("port", 5000)

/* routes */
app.use("/api/categorias",categoriaRoutes)

/* Haemos disponible a mi server app apra toda la aplicacion */
export default app;