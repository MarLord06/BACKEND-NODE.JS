const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db = require('./queries');


app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({ info: 'Probando API con Node.js'})
})

app.get('/usuarios/:id', db.getUsuariobyID);

app.get('/usuarios', db.getUsuarios); // Ruta para obtener todos los usuarios

app.listen(port, () => {
    console.log('Corriendo en el puerto ' + port);
})