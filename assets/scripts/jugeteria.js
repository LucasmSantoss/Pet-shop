import { filtradoDeJugueteria, agregarProductos, busquedaDeProductos, mostrarError } from "../module/functions.js";

const productos = document.getElementById("productos")

const buscador = document.getElementById("search")

fetch("https://mindhub-xj03.onrender.com/api/petshop")
    .then(response => response.json())
    .then((data) => {

        const dataCategoria = data.filter(producto => producto.categoria === "jugueteria");

        agregarProductos(filtradoDeJugueteria(data, dataCategoria), productos)

        buscador.addEventListener("keyup", () => {
            let buscadorValue = buscador[0].value.toLowerCase();
            console.log(buscadorValue)
            let filtroDeBusqueda = busquedaDeProductos(filtradoDeJugueteria(data, dataCategoria), buscadorValue);
            filtradoDeJugueteria(filtroDeBusqueda, productos);
            mostrarError(filtroDeBusqueda, productos);
        });

        buscador.addEventListener("submit", (e) => {
            e.preventDefault();
        });

    }).catch((err) => {
        console.log(err)
    })
