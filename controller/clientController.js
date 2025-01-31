const {request} = require('express');
const pool = require('../bbdd/credenciales');

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

module.exports = {
    getUsuarios,
    getUsuariobyID,
}