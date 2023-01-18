


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
                Descripcion: ${productos.precio}
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

const tarjetas = document.querySelectorAll(".tarjetaProd")
tarjetas.forEach( boton => {
    boton.onclick = () => {
        const id = boton.id
        const filtrarProducto = productos.find((elemento) => {
            return elemento.id === Number(id)
        })
        carrito.push(filtrarProducto)   
        console.log(carrito)
        localStorage.setItem("carrito", JSON.stringify(carrito))   
    }
    
})

const productosElegidos = JSON.parse(localStorage.getItem("carrito"))
carrito = productosElegidos || []