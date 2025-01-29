const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'CAFETERIA',
    password: 'admin',
    port: 5432,
})



const getUsuarios = (requests, response) => {
    pool.query('SELECT * FROM getClientes()', 
        (error, results) =>{
            if(error){
                throw error;
            }
            response.status(200).json(results.rows);
        })
}

const getUsuariobyID = (requests, response) => {
    pool.query('SELECT * FROM getClientebyID($1)', [requests.params.id], 
        (error, results) =>{
            if(error){
                throw error;
            }
            response.status(200).json(results.rows);
        })
}

const calcularTotal = (requests, response) => {
    pool.query('SELECT * FROM calcular_total_orden($1)', [requests.params.id], 
        (error, results) =>{
            if(error){
                throw error;
            }
            response.status(200).json(results.rows);
        })
}



module.exports = {
    getUsuarios,
    getUsuariobyID,
    calcularTotal,
}