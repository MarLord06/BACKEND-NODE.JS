const { request } = require('express');
const pool = require('../bbdd/credenciales');


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
    calcularTotal,
}