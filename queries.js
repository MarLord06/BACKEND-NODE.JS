const { request } = require('express');
const pool = require('./bbdd/credenciales');



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

const postProductos = (requests, response) => {
    const {nombre, precio, stock, tipo } = request.body
    pool.query('SELECT * FROM agregarProducto($1, $2, $3, $4, $5, $6)', [nombre, precio, stock,tipo],
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
    postProductos,
}