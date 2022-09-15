//inicializacion de la aplicacion 
const express = require('express'); // import express
const app = express ();// creando una instancia de express 
const path = require ("path"); //importando path
require('dotenv').config({path:__dirname+'/config/.env'});

// configuracion de la aplicacion
app.set('views', path.join(__dirname, 'views'));//configurando la carpeta 
app.set('view engine','pug');// configurando el motor de pantillas
app.set('port', process.env.PORT || 3000);

 //static files
 app.use (express.static(path.join(__dirname, 'public'))); //configurando 
 console.log(path.join(__dirname, 'public'));

//middlewares

//routes
qpp.use(require('./router/indexRouter'));//configurando las rutas de la aplicacion















module.exports = app; // exportando la instancia de express