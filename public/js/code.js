
const modalProducto = new bootstrap.Modal(document.getElementById('modalProducto'))

const on = (element, event, selector, handler) => {
    element.addEventListener(event,e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

on(document, 'click', '.btnEditar', e => {
    const fila = e.target.parentElement.parentElement
    id_editar.value = fila.children[0].innerHTML
    producto_editar.value = fila.children[1].innerHTML
    precio_editar.value = fila.children[2].innerHTML
    modalProducto.show()


})

const inputBuscar = document.getElementById('buscar')
const celdas = document.getElementsByTagName('td')

inputBuscar.addEventListener('keyup',(e)=>{
    let texto = e.target.value
    console.log(texto)
    let er = new RegExp(texto, "i")
    for (let i=0; i<celdas.length; i++){
        let valor = celdas[i]

        if(er.test(valor.innerText)){
            valor.classList.remove("ocultar")
        }else{
            console.log(valor)
            valor.classList.add("ocultar")
        }

    }
})

