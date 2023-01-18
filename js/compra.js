let infoCarrito = JSON.parse(localStorage.getItem("carrito"))

function cardsHTML_compra ( array )
{
    const contenedor = document.querySelector(".container_compra")

    array.map (( productos ) =>
    {
        const card = document.createElement ("div")
        card.className = "card"
        card.innerHTML = `
            <h2> 
                ${productos.nombreProducto}
            </h2>
            <h2> 
               $ ${productos.precio}
            </h2>
            <p>
                Presentacion: ${productos.presentacion} \n
                Descripcion: ${productos.precio}
            </p>
            <button id="boton-${productos.id}" class="botonEliminar">
                Eliminar del carrito
            </button>
        `
        contenedor.appendChild(card)
    })
}

cardsHTML_compra(infoCarrito || [])

function borrarDelCarrito (array) {
    const botonElmiminar = document.querySelectorAll(".botonEliminar")    
    botonElmiminar.forEach( boton => {
        boton.onclick = () => {
            const id = boton.id            
            const listaProductos = array.filter((elemento, i) => {
                return elemento.id != Number(id)
            })
            infoCarrito = listaProductos
            localStorage.setItem("carrito", JSON.stringify(infoCarrito))
            console.log(infoCarrito)    
            cardsHTML_compra(infoCarrito)
            borrarDelCarrito(infoCarrito)       
        }
        
    })
}

borrarDelCarrito(infoCarrito)

const botonBorrarCarrito = document.querySelector("#vaciarCarro")

botonBorrarCarrito.onclick = () => {
    localStorage.removeItem("carrito")
    document.querySelector(".container_compra").innerHTML = "no hay productos"
}