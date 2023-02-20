import {  getData, createShopping } from '../module/functions.js'

<<<<<<< HEAD
const carrito = document.getElementById("btn-car")
const shopping = document.getElementById("cart")
const modalCarrito = document.getElementById("modal-content")

let products = JSON.parse(localStorage.getItem("products")) || [] // trae del local storage los productos que fueron agregados al carrito
let precioTotal = 0
createShopping(products,shopping,false)

let toys = JSON.parse(localStorage.getItem("toys")) || [] // toma el value de la key "toys" en el localStorage y lo guarda en la variable toys
let pharmacyProducts = JSON.parse(localStorage.getItem("pharmacyProducts")) || []
let cartProducts = toys.concat(pharmacyProducts)
=======

import { getData, createCarruHome, writeSponsorsHome } from '../module/functions.js'


>>>>>>> dcdaa6f2453c113c2c848cbd8cbb889b4af51ad7

let data = getData()
data.then((response) => {
    if (!JSON.parse(localStorage.getItem("toys"))) {
        let toys = response.filter((product) => product.categoria === "jugueteria") 
        localStorage.setItem("toys", JSON.stringify(toys))
        let pharmacyProducts = response.filter((product) => product.categoria === "farmacia")
        localStorage.setItem("pharmacyProducts", JSON.stringify(pharmacyProducts))
    }

    
})

<<<<<<< HEAD
carrito.addEventListener("click", (e) => {
    precioTotal = 0
    products.forEach(product => precioTotal += product.precio)
    createShopping(products,shopping,precioTotal,false) // actualiza el modal del carrito

    modalCarrito.addEventListener("click", (e) => {
        if (e.target.className.includes("garbage")) {
            let id = e.target.id
            cartProducts.forEach(cartProduct => {
                if (cartProduct._id == id) {         
                    let finalProduct = products.find( product => product._id == cartProduct._id)           
                    let position = products.findIndex( product => product == finalProduct )         
                    products.splice(position,1)
                    localStorage.setItem("products", JSON.stringify(products))

                    cartProduct.disponibles++
                }
            })
            localStorage.setItem("toys", JSON.stringify(cartProducts.filter(product => product.categoria == "jugueteria")))
            localStorage.setItem("pharmacyProducts", JSON.stringify(cartProducts.filter(product => product.categoria == "farmacia")))

            precioTotal = 0
            products.forEach(product => precioTotal += product.precio)
            createShopping(products,shopping,precioTotal,false) 

        }else if(e.target.id == "eliminar"){
            cartProducts.forEach(cartProduct => {
                products.forEach(product => {
                    if(product._id == cartProduct._id){
                        cartProduct.disponibles++
                    }
                })
            })
            localStorage.setItem("toys", JSON.stringify(cartProducts.filter(product => product.categoria == "jugueteria")))
            localStorage.setItem("pharmacyProducts", JSON.stringify(cartProducts.filter(product => product.categoria == "farmacia")))
            products = []
            localStorage.setItem("products", JSON.stringify(products))
            precioTotal = 0
            createShopping(products,shopping,precioTotal,false)

        }else if(e.target.id == "comprar"){
            products = []
            localStorage.setItem("products", JSON.stringify(products))
            precioTotal = 0
            createShopping(products,shopping,precioTotal,false)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Compra realizada con exito',
                showConfirmButton: false,
                timer: 1500
            })
        }
    })})
=======
let slide = document.getElementById("slide")

let array2 = ["dog.jpg", "pexels-adam-kontor-333083.jpg", "pexels-kat-smith-551628.jpg", "dog-ball.jpg"]

createCarruHome(array2, slide)

let slideTrack = document.getElementById("slide-track")

let array = ["dog-chow.png", "dog-selection.png", "dogui.png", "kongo.jpg", "pedigree.png", "proplan.png", "royal-canin.png", "sabrocitos.png", "whiscas.png", "dog-chow.png", "dog-selection.png", "dogui.png", "kongo.jpg", "pedigree.png", "proplan.png", "royal-canin.png", "sabrocitos.png", "whiscas.png"]

writeSponsorsHome(array, slideTrack)
>>>>>>> dcdaa6f2453c113c2c848cbd8cbb889b4af51ad7
