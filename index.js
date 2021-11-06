/* Ejercicio de prueba*/
const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Esta es información obtenidad desde tu API')
})

app.listen(3000, () => {
    console.log('Aplicación escuchando en puerto 3000');
})