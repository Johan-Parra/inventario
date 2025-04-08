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

export const methodHTTP = {
    getCategorias
}