const formLogin = document.querySelector("#login")
const inputUser = document.querySelector("#input-user")
const inputPass = document.querySelector("#input-pass")
const loginIncorrecto = document.querySelector("#logint")
const contenedorForm = document.querySelector(".container-login")
const logout = document.querySelector("#logout")
const organizarAZ = document.querySelector("#organizarUno")
const organizarZA = document.querySelector("#organizarDos")
const ofertas = document.querySelector("#ofertas")
const contenedorProductos = document.querySelector(".container-productos")
const tabla = document.querySelector("table")
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

const datosUsuario = {
    user: "carlos",
    password: "ceruizc123"
}

const subirAlLs = ( clave, valor ) => {
    localStorage.setItem(clave, JSON.stringify(valor))
}

const obtenerDelLs = ( clave ) => {
    return JSON.parse(localStorage.getItem(clave))
}

formLogin.onsubmit = ( event ) => {
    event.preventDefault()
    if ( inputUser.value === datosUsuario.user && inputPass.value === datosUsuario.password ) {
        subirAlLs("login", true)
        contenedorForm.style.display = "none"  
        logout.style.display = "block"      
        contenedorProductos.style.display = "flex"        
    } else {        
        loginIncorrecto.style.display = "block"
        inputPass.style.border = "1px solid red"
        inputUser.style.border = "1px solid red"
        contenedorProductos.style.display = "none"
    }
}

function validarLogin ( clave ) {
    if ( clave !== true ) {
        contenedorForm.style.display = "flex"
        logout.style.display = "none"
        contenedorProductos.style.display = "none"        
    } else {
        contenedorForm.style.display = "none"
        logout.style.display = "block"
        contenedorProductos.style.display = "flex"        
    }
}

validarLogin(obtenerDelLs("login"))

organizarAZ.onclick = () => {
    const productosAZ = [...productos].sort((a,b) =>
    {
        if (a.nombreProducto < b.nombreProducto)
            {
                return -1
            }
        else if (a.nombreProducto > b.nombreProducto)
            {
                return 1
            }
        else return 0
    })
    productosAHtml(productosAZ)
}

organizarZA.onclick = () => {
    const productosZA = [...productos].sort((a,b) =>
    {
        if (a.nombreProducto < b.nombreProducto)
            {
                return 1
            }
        else if (a.nombreProducto > b.nombreProducto)
            {
                return -1
            }
        else return 0
    })
    productosAHtml(productosZA)
}

ofertas.onclick = () => {
    const productosOferta = [...productos].filter((elemento) => 
    {
        return elemento.oferta === true
    })
    console.log(productosOferta)
    productosAHtml(productosOferta)
}



logout.onclick = () => {
    localStorage.removeItem( "login" )
    console.log("me hacen click")
    validarLogin(obtenerDelLs("login"))
    formLogin.reset()
}

function productosAHtml ( array ) {
    const arrayProductos = array.reduce( ( acc, elemento ) => {
        return  acc + `
        <tbody>
            <tr>
                <td>
                    ${elemento.id}
                </td>
                <td>
                    ${elemento.nombreProducto}
                </td>
                <td>
                    ${elemento.precio}
                </td>
                <td>
                    ${elemento.presentacion}
                </td>
                <td>
                    ${elemento.categoria}
                </td>
            </tr>
        </tbody>       
        `
    },`
    <thead>
    <tr>
        <th>
            ID
        </th>
        <th>
            Nombre
        </th>
        <th>
            Precio
        </th>
        <th>
            Presentacion
        </th>
        <th>
            Categoria
        </th>
        <tr>
    </thead>
    `)
    tabla.innerHTML = arrayProductos
}

productosAHtml(productos)

ofertas.onclick = () => {
    const productosOferta = [...productos].filter((elemento) => 
    {
        return elemento.oferta === true
    })
    console.log(productosOferta)
    productosAHtml(productosOferta)
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
        `
        contenedor.appendChild(card)
    })
}

const productosOferta = [...productos].filter((elemento) => 
{
    return elemento.oferta === true
})
console.log(productosOferta)

cardsHTML(productosOferta)