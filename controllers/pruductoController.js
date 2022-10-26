//CONTROLADORES o mejor dicho funciones 

const Producto = require('../models/Producto')


//Mostrar
//le asigno una funcion flecha para que me devuelva todos los productos que tengo en la base 
module.exports.mostrar = (req, res)=>{
     Producto.find({}, (error, productos)=>{
       //ESCRIBIR BIEN EL REPORTE DE ERROR
        return res.render('index', {productos: productos})
     })
}

// Crear
// lo que hacemos aca es capturar los valores que vienen en los imputs
module.exports.crear = (req, res) => {
     // console.log(req.body)
     const producto = new Producto({
          nombre_p: req.body.productoname, //aca vinculo el nombre del campo en la base, con el nombre del innput
          precio_p: req.body.productoprec,   //aca lo mismo
          cantidad_p: req.body.productocant
     })
     producto.save(function(error,producto){
          if(error){
              return res.status(500).json({
                  message: 'Error al crear el Producto'
              })
          }
          res.redirect('/')
      })
}

//Editar
//Aca captura los valores de la base de dato los muestra y en los innputs los permite editar
module.exports.editar = (req,res)=>{
     const id = req.body.id_editar
     const nombre_p = req.body.producto_editar  //pasar los nombre igual que en la base de datos
     const precio_p = req.body.precio_editar
     Producto.findByIdAndUpdate(id,{nombre_p,precio_p},(error,producto)=>{
     if(error){
          return res.status(500).json({
              message: 'Error al editar el Producto'
          })
      }
      res.redirect('/')
     
     })
}

//Borrar
//en este caso captura el ID
module.exports.borrar = (req,res)=>{
     const id = req.params.id
     Producto.findByIdAndRemove(id,(error,producto)=>{
          if(error){
               return res.status(500).json({
                   message: 'Error al remover el Producto'
               })
           }
           res.redirect('/')
     })
}