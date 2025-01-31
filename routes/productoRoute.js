const { postProductos } = require('../controller/productController');
const { getProductos } = require('../controller/productController');    

const router = require('express').Router();

router.route('/postProductos').post(postProductos);

router.route('/getProductos').get(getProductos);

module.exports = router;
