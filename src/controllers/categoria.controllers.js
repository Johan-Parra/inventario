import getConnection from "./../db/database.js"

const getCategorias = async (req, res) =>{
    // Se usa el trycatch por si se dispara algun error
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias");
        res.json(result);
    } catch (error) {
        console.error("ERROR 500");
    }
}

const postCategorias = async (req, res) =>{
    try {
        const {CategoriaNombre, Descripcion, Imagen} = req.body; // Con el body, debido a que se hace por JSON, directamente en codigo
        const connection = await getConnection(); // El await solo es permitido en funciones asincronas que devuelven una promesa
        const category = {CategoriaNombre, Descripcion, Imagen};
        const result = await connection.query("INSERT INTO Categorias SET ?", category);
        res.json(result)
    } catch (error) {
        console.error("ERROR 500");
    }
}

const getCategory = async (req, res) =>{
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias WHERE CategoriaID = ?", id);
        res.json(result);
    } catch (error) {
        console.error("ERROR 500");
    }
}

export const methodHTTP = {
    getCategorias,
    postCategorias,
    getCategory
}