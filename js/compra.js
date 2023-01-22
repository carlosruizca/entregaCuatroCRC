const botonModos = document.querySelector("#claro-oscuro")
const body = document.querySelector(".modo-claro")

botonModos.onclick = () => {
    body.classList.toggle("modo-oscuro")
    if ( body.className === "modo-claro modo-oscuro"){
        botonModos.textContent = "Modo claro"

    } else {
        botonModos.textContent = "Modo oscuro"
    }
}


let infoDelLs = JSON.parse(localStorage.getItem("carrito"))

const cardHtml = ( array ) => {
    const generarNodos = array.reduce(( acc, element) => {
        return acc + `
            <div class="card" id="productos-${element.id}">
                <h2>
                    ${element.nombreProducto}
                </h2>
                <h3>
                $ ${element.precio}
                </h3>
                <h3>
                ${element.detalle}
                </h3>
                <button id="boton-${element.id}" class="boton-card">
                    Eliminar del carrito
                </button>
            </div>
        `
    }, "")

    document.querySelector(".carrito-contenedor").innerHTML = generarNodos
}

cardHtml(infoDelLs || [])

function borrarDelCarrito (array) {
    const botonAniadir = document.querySelectorAll(".boton-card")    
    botonAniadir.forEach( boton => {
        boton.onclick = () => {
            const id = boton.id.slice(6)            
            const filtrarProducto = array.filter((elemento, i) => {
                return elemento.id != Number(id)
            })
            infoDelLs = filtrarProducto
            localStorage.setItem("carrito", JSON.stringify(infoDelLs))
            console.log(infoDelLs)    
            cardHtml(infoDelLs)
            borrarDelCarrito(infoDelLs)       
        }
        
    })
}

borrarDelCarrito(infoDelLs)

const botonBorrarCarrito = document.querySelector("#vaciarCarro")

botonBorrarCarrito.onclick = () => {
    localStorage.removeItem("carrito")
    document.querySelector(".carrito-contenedor").innerHTML = "no hay productos"
}