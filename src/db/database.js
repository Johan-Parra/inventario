import mysql from "promise-mysql" // Permite conectarse a la base de datos de Mysql

import config from "./../config.js"

const connection = mysql.createConnection({ // Espera el objeto de conexion
    host : config.host,
    database : config.database,
    user : config.user,
    password : config.password
})

const getConnection = () =>{ // Retorna constantemente la conexion
    return connection
}

export default getConnection;