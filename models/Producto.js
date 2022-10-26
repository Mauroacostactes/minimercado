const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productoSchema = new Schema({
    nombre_p: String,
    precio_p: Number,
    cantidad_p: Number
}, {versionKey:false})

module.exports = mongoose.model('productos', productoSchema)