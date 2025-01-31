const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db = require('./controller/queries');
const clients = require('./controller/clientController');
const productRoute = require('./routes/productoRoute');


app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({ info: 'Probando API con Node.js'})
})

app.get('/usuarios/:id', clients.getUsuariobyID);

app.get('/calcularTotal/:id', db.calcularTotal);

app.get('/usuarios', clients.getUsuarios); // Ruta para obtener todos los usuarios
app.use('/api/v1/productos', productRoute);
app.listen(port, () => {
    console.log('Corriendo en el puerto ' + port);
})