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

function cardsHTML ( array )
{
    const contenedor = document.querySelector(".container-prod")

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
                Descripcion: ${productos.detalle}
            </p>
            <button class="tarjetaProd" id="${productos.id}" >
                Añadir al carrito
            </button>
        `
        contenedor.appendChild(card)
    })
}


cardsHTML(productos)

let carrito = []

function agregarCarrito (array)
{
    const cardAgregada = document.querySelectorAll(".tarjetaProd")
    cardAgregada.forEach ( boton =>
        {
            boton.onclick = () =>
            {
                const id = boton.id
                const filtrarProducto = productos.find((elemento) =>
                {
                    return elemento.id === Number(id)
                })
                carrito.push(filtrarProducto)
                console.log(carrito)
                localStorage.setItem("carrito", JSON.stringify(carrito))
            }
        })
}

agregarCarrito(productos)

const productosAgregados = JSON.parse(localStorage.getItem("carrito"))
carrito = productosAgregados || []



