
// import {
//     filtradoDeFarmacia,
//     busquedaDeProductos,
//     mostrarError,
// } from "../module/functions.js";

// const buscador = document.getElementById("search");

// fetch("https://mindhub-xj03.onrender.com/api/petshop")
//     .then((response) => response.json())
//     .then((data) => {

//         const dataCategoria = data.filter(producto => producto.categoria === "farmacia");
//         const contenedorProductos = document.getElementById('productos')


//         const contenedorCarrito = document.getElementById('carrito-contenedor')

//         const botonVaciar = document.getElementById('vaciar-carrito')

//         const contadorCarrito = document.getElementById('contadorCarrito')


//         const cantidad = document.getElementById('cantidad')
//         const precioTotal = document.getElementById('precioTotal')
//         const cantidadTotal = document.getElementById('cantidadTotal')

//         let carrito = []

//         document.addEventListener('DOMContentLoaded', () => {
//             if (localStorage.getItem('carrito')) {
//                 carrito = JSON.parse(localStorage.getItem('carrito'))
//                 actualizarCarrito()
//             }
//         })

//         botonVaciar.addEventListener('click', () => {
//             carrito.length = 0
//             actualizarCarrito()
//         })

//             /
//             dataCategoria.forEach((producto) => {
//                 const div = document.createElement('div')
//                 div.classList.add('producto')
//                 div.innerHTML = `<div class="card p-2 cover" >
//         <img src=${producto.imagen} alt="${producto.producto}" class="card-img-top">
//         <div class="card-body ">
//           <h5 class="card-title h-50 title">${producto.producto}</h5>
//           <p class="m=0" id="stock">Disponibles: ${producto.disponibles}</p>
//           <div class="d-flex justify-content-evenly align-items-center">
//             <p class="m-0">$${producto.precio}</p>
//             <button id="agregar${producto._id}" class="btn btn-outline-primary align-self-end">Agregar <i class="fas fa-shopping-cart"></i></button>
//           </div>
//         </div>
//         </div>`
//                 contenedorProductos.appendChild(div)


//                 const boton = document.getElementById(`agregar${producto._id}`)


//                 boton.addEventListener('click', () => {

//                     agregarAlCarrito(producto._id)

//                 })
//             })



//         const agregarAlCarrito = (prodId) => {
//             const producto = dataCategoria.find((prod) => prod._id === prodId)

//             if (!producto) {
//                 return
//             }

//             if (producto.disponibles === 0) {
//                 alert("El producto no está disponible")
//                 return
//             }

//             const existe = carrito.some(prod => prod._id === prodId)

//             if (existe) {
//                 carrito = carrito.map(prod => {
//                     if (prod._id === prodId) {
//                         prod.disponibles++
//                         producto.disponibles--
//                     }
//                     return prod
//                 })
//             } else {
//                 carrito.push({
//                     ...producto,
//                     disponibles: 1
//                 })
//                 producto.disponibles--
//             }

//             actualizarCarrito()

//             // Actualizar contenido del producto en la página
//             const divProducto = document.getElementById(`producto${prodId}`)
//             if (divProducto) {
//                 const disponibles = divProducto.querySelector(".disponibles")
//                 disponibles.textContent = `Disponibles: ${producto.disponibles}`
//                 if (producto.disponibles < 5) {
//                     disponibles.classList.add("ultimas-unidades")
//                 }
//             }
//         }



//         // 5 - QUINTO PASO
//         const eliminarDelCarrito = (prodId) => {
//             const item = carrito.find((prod) => prod._id === prodId)

//             const indice = carrito.indexOf(item)

//             carrito.splice(indice, 1)

//             actualizarCarrito()

//             console.log(carrito)
//         }

//         const actualizarCarrito = () => {

//             contenedorCarrito.innerHTML = "";


//             carrito.forEach((prod) => {
//                 const div = document.createElement('div')
//                 div.className = ('productoEnCarrito')
//                 div.innerHTML = `
//             <p>${prod.producto}</p>
//             <p>Precio:$${prod.precio}</p>
//             <p>descripcion: <span id="cantidad">${prod.disponibles}</span></p>
//             <button onclick="eliminarDelCarrito(${prod._id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
//             `

//                 contenedorCarrito.appendChild(div)

//                 localStorage.setItem('carrito', JSON.stringify(carrito))

//             })

//             contadorCarrito.innerText = carrito.length // actualizamos con la longitud del carrito.

//             console.log(carrito)
//             precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.descripcion * prod.precio, 0)

//         }









//         buscador.addEventListener("keyup", () => {
//             let buscadorValue = buscador[0].value.toLowerCase();
//             console.log(buscadorValue);
//             let filtroDeBusqueda = busquedaDeProductos(
//                 filtradoDeFarmacia(data, dataCategoria),
//                 buscadorValue
//             );
//             filtradoDeFarmacia(filtroDeBusqueda, productos);
//             mostrarError(filtroDeBusqueda, productos);
//         });

//         buscador.addEventListener("submit", (e) => {
//             e.preventDefault();
//         });
//     })
//     .catch((err) => {
//         console.log(err);
//     });


import { createCards, filterProducts, writeSponsors, createCarru, createShopping, fillHeart } from "../module/functions.js";

const container = document.getElementById("productos")
const searchBar = document.getElementById("search-bar")
const shopping = document.getElementById("cart")
const carrito = document.getElementById("btn-car")
const modalCarrito = document.getElementById("modal-content")
const btnHeart = document.getElementsByClassName("btn-heart")

let products = JSON.parse(localStorage.getItem("products")) || [] // trae del local storage los productos que fueron agregados al carrito
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || []

localStorage.setItem("products", JSON.stringify(products))

let precioTotal = 0
createShopping(products, shopping)

let toys = JSON.parse(localStorage.getItem("toys")) || [] // toma el value de la key "toys" en el localStorage y lo guarda en la variable toys
let pharmacyProducts = JSON.parse(localStorage.getItem("pharmacyProducts")) || []
let cartProducts = toys.concat(pharmacyProducts)

createCards(pharmacyProducts, container, "")

fillHeart(pharmacyProducts, favoritos, btnHeart)

searchBar.addEventListener("keyup", (e) => {
    let filteredpharmacyProducts = filterProducts(pharmacyProducts, e.target.value.toLowerCase())
    createCards(filteredpharmacyProducts, container, e.target.value.toLowerCase())
})

container.addEventListener("click", (e) => {
    if (e.target.localName === "button") {
        let pressPharmacyProduct = pharmacyProducts.find(pharmacyProduct => pharmacyProduct._id == e.target.id)
        if (pressPharmacyProduct.disponibles > 0) {
            for (let pharmacyProduct of pharmacyProducts) {
                if (pharmacyProduct == pressPharmacyProduct) {
                    let i = pharmacyProducts.indexOf(pharmacyProduct)
                    pressPharmacyProduct.disponibles--

                    pharmacyProducts[i] = pressPharmacyProduct
                    localStorage.setItem("pharmacyProducts", JSON.stringify(pharmacyProducts)) // se actualiza la propiedad del localStorage, para que cuando recargues la pag no se vuelva a la info antigua
                    let unidades = document.getElementById(`unidades-${pressPharmacyProduct._id}`)
                    unidades.textContent = `${pressPharmacyProduct.disponibles} unidades` // toma el id de <p> y le cambia el textContent
                }
            }

            products.push(pressPharmacyProduct)
            localStorage.setItem("products", JSON.stringify(products)) // actualiza el valor de la key "products" en el localStorage
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ya no hay stock disponible',
            })
        }
    }
    else if (e.target.offsetParent && e.target.offsetParent.className == "card producto") { //si existe un parent y ese parent tiene className card y producto
        let modal = e.target.offsetParent.nextElementSibling // el elemento que le sigue al parent, en este caso el modal
        modal.addEventListener("click", (e) => {
            if (e.target.className.includes("modal-container")) {
                createCards(pharmacyProducts, container, "") //cuando se clickee afuera del modal se actualizan las cards

                fillHeart(pharmacyProducts, favoritos, btnHeart)

            }
        })
    }
    else if (e.target.localName == "path") {
        if (favoritos.some(fav => fav.producto == e.target.id)) {
            favoritos = favoritos.filter(fav => fav.producto != e.target.id)
            e.target.classList.replace("redPath", "black")
            localStorage.setItem('favoritos', JSON.stringify(favoritos))
        } else {
            favoritos.push(pharmacyProducts.find(producto => producto.producto == e.target.id))
            e.target.classList.replace("black", "redPath")
            localStorage.setItem('favoritos', JSON.stringify(favoritos))
        }
    }
})

carrito.addEventListener("click", (e) => {
    precioTotal = 0
    products.forEach(product => precioTotal += product.precio)
    createShopping(products, shopping, precioTotal) // actualiza el modal del carrito

    modalCarrito.addEventListener("click", (e) => {
        if (e.target.className.includes("garbage")) {
            let id = e.target.id
            cartProducts.forEach(cartProduct => {
                if (cartProduct._id == id) {
                    let finalProduct = products.find(product => product._id == cartProduct._id)
                    let position = products.findIndex(product => product == finalProduct)
                    products.splice(position, 1)
                    localStorage.setItem("products", JSON.stringify(products))

                    cartProduct.disponibles++

                }
            })
            localStorage.setItem("toys", JSON.stringify(cartProducts.filter(product => product.categoria == "jugueteria")))
            localStorage.setItem("pharmacyProducts", JSON.stringify(cartProducts.filter(product => product.categoria == "farmacia")))

            precioTotal = 0
            products.forEach(product => precioTotal += product.precio)
            createShopping(products, shopping, precioTotal)

        } else if (e.target.id == "eliminar") {
            cartProducts.forEach(cartProduct => {
                products.forEach(product => {
                    if (product._id == cartProduct._id) {
                        cartProduct.disponibles++
                    }
                })
            })
            localStorage.setItem("toys", JSON.stringify(cartProducts.filter(product => product.categoria == "jugueteria")))
            localStorage.setItem("pharmacyProducts", JSON.stringify(cartProducts.filter(product => product.categoria == "farmacia")))
            products = []
            localStorage.setItem("products", JSON.stringify(products))
            precioTotal = 0
            createShopping(products, shopping, precioTotal)

        } else if (e.target.id == "comprar") {
            products = []
            localStorage.setItem("products", JSON.stringify(products))
            precioTotal = 0
            createShopping(products, shopping, precioTotal)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Compra realizada con exito',
                showConfirmButton: false,
                timer: 1500
            })
        }
    })

    let modal = document.getElementById("staticBackdrop") // el elemento que le sigue al parent, en este caso el modal
    modal.addEventListener("click", (e) => {
        if (e.target.className.includes("modal-container")) {
            createCards(pharmacyProducts, container, "") //cuando se clickee afuera del modal se actualizan las cards
            fillHeart(pharmacyProducts, favoritos, btnHeart)
        }

    })
})


let slideTrack = document.getElementById("slide-track")

let array = ["dog-chow.png", "dog-selection.png", "dogui.png", "kongo.jpg", "pedigree.png", "proplan.png", "royal-canin.png", "sabrocitos.png", "whiscas.png", "dog-chow.png", "dog-selection.png", "dogui.png", "kongo.jpg", "pedigree.png", "proplan.png", "royal-canin.png", "sabrocitos.png", "whiscas.png"]

writeSponsors(array, slideTrack)

let slide = document.getElementById("slide")

let array2 = ["dog.jpg", "pexels-adam-kontor-333083.jpg", "pexels-kat-smith-551628.jpg", "dog-ball.jpg", "carpincho.jpg"]

createCarru(array2, slide)



// PARA BORRAR ITEMS DEL CARRITO
// if( products.some( product => product._id == e.target.id) ){
//     products = products.filter( (product) => product._id != e.target.id)
//     localStorage.setItem("products", JSON.stringify(products))
// }