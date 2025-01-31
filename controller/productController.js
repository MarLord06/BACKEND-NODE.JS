const { request } = require('express');
const pool = require('../bbdd/credenciales');

const postProductos = (requests, response) => {
    const {nombre, precio, stock, tipo } = requests.body;
    pool.query('SELECT * FROM agregarproducto($1, $2, $3, $4)', [nombre, precio, stock, tipo],
        (error, results) =>{
            if(error){
                throw error;
            }
            response.status(200).json(results.rows);
        })
}

const getProductos = (requests, response)=>{
    pool.query('SELECT * FROM obtenerproductos()', 
        (error, results)=>{
            if(error){
                throw error;
            }
            response.status(200).json(results.rows);
        })
}

module.exports = {
    postProductos,
    getProductos,
}