function productos(objeto) {
    return `<div class="card p-2 cover">
      <img src="${objeto.imagen}" alt="${objeto.producto}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title h-50 title">${objeto.producto}</h5>
        <p class="m=0">Disponibles: ${objeto.disponibles}</p>
        <div class="d-flex justify-content-evenly align-items-center">
          <p class="m-0">$${objeto.precio}</p>
          <button class="btn btn-outline-primary align-self-end agregar-al-carrito">Agregar al carrito</button>
        </div>
      </div>
    </div>`;
}

// Crea una variable "carrito" que contendrá los productos agregados al carrito
let carrito = [];

// Agrega un controlador de eventos a cada botón "Agregar al carrito"
document.querySelectorAll(".agregar-al-carrito").forEach((boton) => {
    boton.addEventListener("click", agregarAlCarrito);
});

function agregarAlCarrito(evento) {
    // Obtén los datos de la card seleccionada y guárdalos en una variable
    const card = evento.target.closest(".card");
    const imagen = card.querySelector("img").src;
    const producto = card.querySelector(".card-title").textContent;
    const precio = card.querySelector("p").textContent.slice(1);
    const cantidad = 1;

    // Agrega los datos de la card seleccionada a la variable "carrito"
    carrito.push({ imagen, producto, precio, cantidad });

    // Actualiza la tabla del carrito en el HTML con los datos de la variable "carrito"
    const listaCarrito = document.querySelector("#lista-carrito tbody");
    listaCarrito.innerHTML = "";
    carrito.forEach((producto) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
        <td>
          <img src="${producto.imagen}" width="100">
        </td>
        <td>${producto.producto}</td>
        <td>$${producto.precio}</td>
        <td>${producto.cantidad}</td>
        <td>
          <button class="borrar-producto">
            Eliminar
          </button>
        </td>
      `;
        listaCarrito.appendChild(fila);
    });
}
