const mongoose = require('mongoose')
const url = 'mongodb://localhost/producto_db'

mongoose.connect(url);


const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error al conectar MongoDB'))
db.once('open', function callback(){
        console.log("conectado a la base de datos de MongoDB!")
})

module.exports = db