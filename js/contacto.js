const formLogin = document.querySelector("#login")
const inputUser = document.querySelector("#input-user")
const inputEmail = document.querySelector("#input-email")
const loginIncorrecto = document.querySelector("#logint")
const contenedorForm = document.querySelector(".container-login")
const contenedorMuro = document.querySelector(".container-muro")

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

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const datosUsuario = {
    user: "carlos",
    email: "ce.ruiz2203@gmail.com"
}

const subirAlLs = ( clave, valor ) => {
    localStorage.setItem(clave, JSON.stringify(valor))
}

const obtenerDelLs = ( clave ) => {
    return JSON.parse(localStorage.getItem(clave))
}

formLogin.onsubmit = ( event ) => {
    event.preventDefault()
    if ( inputUser.value === datosUsuario.user && inputEmail.value === datosUsuario.email ) {
        subirAlLs("login", true)
        contenedorForm.style.display = "none"  
        logout.style.display = "block"      
        contenedorMuro.style.display = "flex"        
    } else {        
        loginIncorrecto.style.display = "block"
        inputEmail.style.border = "1px solid red"
        inputUser.style.border = "1px solid red"
        contenedorMuro.style.display = "none"
    }
}

function validarLogin ( clave ) {
    if ( clave !== true ) {
        contenedorForm.style.display = "flex"
        logout.style.display = "none"
        contenedorMuro.style.display = "none"        
    } else {
        contenedorForm.style.display = "none"
        logout.style.display = "block"
        contenedorMuro.style.display = "flex"        
    }
}

validarLogin(obtenerDelLs("login"))

logout.onclick = () => {
    localStorage.removeItem( "login" )
    console.log("me hacen click")
    validarLogin(obtenerDelLs("login"))
    formLogin.reset()
}