
///// Filtrados ///////////

export function filtradoDeFarmacia(objetos, paginas) {
    let productos = [];
    for (let objeto of objetos) {
        if (objeto.categoria === "farmacia") {
            productos.push(objeto);
        }
    }
    return productos;
}

export function filtradoDeJugueteria(objetos, pagina) {
    let productos = [];
    for (let objeto of objetos) {
        if (objeto.categoria === "jugueteria") {
            productos.push(objeto);
        }

    }
    return productos;

}

////// Productos  ////////////////////

export function agregarProductos(events, cards) {
    let boxCards = "";
    for (let event of events) {
        boxCards += productos(event);
    }
    cards.innerHTML = boxCards;
}


export function productos(objeto) {
    return `<div class="card p-2 cover" >
    <img src=${objeto.imagen} alt="${objeto.producto}" class="card-img-top">
    <div class="card-body ">
      <h5 class="card-title h-50 title">${objeto.producto}</h5>
      <p class="m=0">Disponibles: ${objeto.disponibles}</p>
      <div class="d-flex justify-content-evenly align-items-center">         
        <p class="m-0">$${objeto.precio}</p>
        <a href="./details.html?_id=${objeto._id}&name=${objeto.name}" class="btn btn-outline-primary align-self-end">Agregar al carrito</a>
      </div>
    </div>
    </div>`
}


////// Busqueda ///////////

export function busquedaDeProductos(lista, busqueda) {
    let buscador = lista.filter(objeto => objeto.producto.toLowerCase().includes(busqueda));

    return buscador;

}

////// Mensaje de Error ///////////////////

export function mensajeDeError() {
    return `<div class="error m-auto"> <p class="text-center fs-3"> No encontramos su Producto! </p> 
      <img src="../assets/img/perritotriste.jpg" alt="error"> </div>`;
}

export function mostrarError(producto, error) {
    if (producto.length === 0) {
        error.innerHTML = mensajeDeError();
    } else {
        return agregarProductos(producto, error);
    }
}
