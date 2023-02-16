import { filtradoDeFarmacia, agregarProductos, busquedaDeProductos, mostrarError } from "../module/functions.js";

const productos = document.getElementById("productos")

const buscador = document.getElementById("search")

fetch("https://mindhub-xj03.onrender.com/api/petshop")
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        const dataCategoria = data.filter(producto => producto.categoria === "farmacia");
        console.log(dataCategoria);
        agregarProductos(filtradoDeFarmacia(data, dataCategoria), productos)


        buscador.addEventListener("keyup", () => {
            let buscadorValue = buscador[0].value.toLowerCase();
            console.log(buscadorValue)
            let filtroDeBusqueda = busquedaDeProductos(filtradoDeFarmacia(data, dataCategoria), buscadorValue);
            filtradoDeFarmacia(filtroDeBusqueda, productos);
            mostrarError(filtroDeBusqueda, productos);
        });


        buscador.addEventListener("submit", (e) => {
            e.preventDefault();
        });
    }).catch((err) => {
        console.log(err)
    })
