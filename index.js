const express = require('express');
require('dotenv').config();

//Crear servidor express
const app = express();

// Acceso al directorio publico
app.use(express.static('public'));

//rutas
app.use('/api/auth', require('./routes/auth'));

//Configurarción del puerto
app.listen(process.env.PORT, () => {
    console.log(`Backend corriendo en el puerto ${process.env.PORT}`);
})