
// ///// Filtrados ///////////

// export function filtradoDeFarmacia(objetos, paginas) {
//     let productos = [];
//     for (let objeto of objetos) {
//         if (objeto.categoria === "farmacia") {
//             productos.push(objeto);
//         }
//     }
//     return productos;
// }

// export function filtradoDeJugueteria(objetos, pagina) {
//     let productos = [];
//     for (let objeto of objetos) {
//         if (objeto.categoria === "jugueteria") {
//             productos.push(objeto);
//         }

//     }
//     return productos;

// }

// ////// Productos  ////////////////////

// export function agregarProductos(events, cards) {
//     let boxCards = "";
//     for (let event of events) {
//         boxCards += productos(event);
//     }
//     cards.innerHTML = boxCards;
// }


// export function productos(objeto) {
//     return `<div class="card p-2 cover" >
//     <img src=${objeto.imagen} alt="${objeto.producto}" class="card-img-top">
//     <div class="card-body ">
//       <h5 class="card-title h-50 title">${objeto.producto}</h5>
//       <p class="m=0">Disponibles: ${objeto.disponibles}</p>
//       <div class="d-flex justify-content-evenly align-items-center">         
//         <p class="m-0">$${objeto.precio}</p>
//         <a " class="btn btn-outline-primary align-self-end" id="data-id" >Agregar al carrito</a>
//       </div>
//     </div>
//     </div>`
// }


// ////// Busqueda ///////////

// export function busquedaDeProductos(lista, busqueda) {
//     let buscador = lista.filter(objeto => objeto.producto.toLowerCase().includes(busqueda));

//     return buscador;

// }

// ////// Mensaje de Error ///////////////////

// export function mensajeDeError() {
//     return `<div class="error m-auto"> <p class="text-center fs-3"> No encontramos su Producto! </p> 
//       <img src="../assets/img/perritotriste.jpg" alt="error"> </div>`;
// }

// export function mostrarError(producto, error) {
//     if (producto.length === 0) {
//         error.innerHTML = mensajeDeError();
//     } else {
//         return agregarProductos(producto, error);
//     }
// }


// //// Carrito /////////

export async function getData() {
  try {
    const response = await fetch("https://mindhub-xj03.onrender.com/api/petshop")
    const data = await response.json()
    return data
  }
  catch (error) {
    console.log(`Error: ${error}`)
  }
}

export function createCards(list, container, formulario) {
  container.innerHTML = ""
  let aux = ""
  if (list.length === 0) {
    noEncontrado(container, formulario)
  } else {
    for (let element of list) {
      aux += writeCard(element)
    }
    container.innerHTML += aux
  }
}

function writeCard(element) {
  let color = element.disponibles < 5 ? "red" : "green";
  return `
      <div class="card producto" id="card" style="width: 18rem;" data-bs-toggle="modal" data-bs-target="#${element._id}">
      <div class="car p-2 cover" >
      <img src=${element.imagen} alt="${element.producto}" class="card-img-top">
      <div class="card-body ">
      <button type= "" class="btn-heart">
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="black" id="${element.producto}" d="M12.39 20.87a.696.696 0 0 1-.78 0C9.764 19.637 2 14.15 2 8.973c0-6.68 7.85-7.75 10-3.25 2.15-4.5 10-3.43 10 3.25 0 5.178-7.764 10.664-9.61 11.895z" fill="#000000"/></svg>
      </button>
        <h5 class="card-title h-50 title">${element.producto}</h5>
        <p class="m=0">Disponibles: ${element.disponibles}</p>
        <div class="d-flex justify-content-evenly align-items-center">         
          <p class="m-0">$${element.precio}</p>
          <a  class="btn btn-outline-primary align-self-end" id="data-id"  > <img class="icon-btn" id="carrito-img" src="../assets/img/carritoo.png" alt="mano-patita"></a>
        </div>
      </div>
      </div>
      </div>
  
      <div class="modal fade modal-container" id="${element._id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content w-100 mx-auto">
            <div class="modal-body d-flex justify-content-center gap-3">
              <div class="descripcion-total">
                <div>
                  <img src="${element.imagen}"class="card-img-tope tam_img_card" alt="${element.producto}">
                </div>
                <div class="card-bod">
                  <div class="cont-stock d-flex flex-column">
                    <p class="card-text"><b>Precio: $${element.precio}</b></p>
                    <p class=" ${color} text-center stock"><b>Stock</b></p>
                    <h5 >${element.producto}</h5>
                  </div>
                  <div class="cont-unidad d-flex justify-content-end align-items-end">
                    <p id="unidades-${element._id}">${element.disponibles} Unidades</p>
                  </div>
                </div>
              </div>
              <div class="d-flex descripcion flex-column justify-content-center" >
                <p>${element.descripcion}</p>
                <button type="button" class="btn btn-primary" id="${element._id}">Agregar Al Carrito</button>
              </div>      
            </div>
          </div>
        </div>
      </div>
    `
}

export function filterProducts(products, value) {
  return products.filter((product) => product.producto.toLowerCase().includes(value))
}

export function writeSponsors(list, container) {
  for (let i = 0; i < 18; i++) {
    container.innerHTML += `
          <div class="cont-slide">
            <img src="../img/${list[i]}" alt="">
          </div>
        `
  }
}

export function writeSponsorsHome(list, container) {
  for (let i = 0; i < 18; i++) {
    container.innerHTML += `
        <div class="cont-slide">
          <img src="./Assets/img/${list[i]}" alt="">
        </div>
      `
  }
}

export function createCarru(list, container) {

  container.innerHTML += `
        <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img src="../img/${list[0]}" class="d-block w-100 border1" alt="${list[0]}">
                        </div>
                        <div class="carousel-item">
                          <img src="../img/${list[1]}" class="d-block w-100 border1" alt="${list[1]}">
                        </div>
                        <div class="carousel-item">
                          <img src="../img/${list[2]}" class="d-block w-100 border1" alt="${list[2]}">
                        </div>
                        <div class="carousel-item">
                          <img src="../img/${list[3]}" class="d-block w-100 border1" alt="${list[3]}">
                        </div>
                      </div>
      `

}
export function createCarruHome(list, container) {

  container.innerHTML += `
      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img src="./Assets/img/${list[0]}" class="d-block w-100 m-0 border1" alt="${list[0]}">
                        </div>
                        <div class="carousel-item">
                          <img src="./Assets/img/${list[1]}" class="d-block w-100 m-0 border1" alt="${list[1]}">
                        </div>
                        <div class="carousel-item">
                          <img src="./Assets/img/${list[2]}" class="d-block w-100 m-0 border1" alt="${list[2]}">
                        </div>
                        <div class="carousel-item">
                          <img src="./Assets/img/${list[3]}" class="d-block w-100 m-0 border1" alt="${list[3]}">
                        </div>
                      </div>
    `
}

export function noEncontrado(container, formulario) {
  container.innerHTML = `<div class="style-mens">
    <h5>Ups.. No se encontro ningun resultado ! "${formulario}".</h5>
    <img src="../assets/img/perritotriste.jpg" alt="perro" class="perritotriste">
    </div>`

}

export function createShopping(list, container, precioTotal = 0) {
  let template = ""
  list.forEach((element, i) => {
    template += `
        <div class="d-flex venta my-2" id="${i}">
        <div class="cart-delete">
        <button class="btn-delete"><img src="../assets/img/borrar.webp" class="garbage" alt="garbage" id="${element._id}"></button>
      </div>
          <img class= "img-cart" src="${element.imagen}" alt="ball">
          <div class="shopping-info">
            <div class="cart-info">
              <a>${element.producto}</a>
              <a class="precio">$${element.precio}</a>
            </div>
           
          </div>
        </div>
        <hr>
      `
  })
  template += `
      <div class="d-flex cart-pago my-3" style="width: 25rem;">
        
        <div class="btn-pago">
        <button type="button" class="btn btn-danger" id="eliminar">Vaciar</button>
          <button type="button" class="btn btn-primary" id="comprar">Comprar</button>
        </div>
        <p class="m-0">Total: $${precioTotal}</p>
      </div>
    `
  container.innerHTML = template
}

export function fillHeart(toys, favoritos, btn) {
  toys.forEach(toy => {
    favoritos.forEach(fav => {
      if (toy._id == fav._id) {
        let asd = Array.from(btn).filter(e => e.firstElementChild.children[0].id == toy.producto)
        asd[0].children[0].children[0].classList.replace("black", "redPath")
      }
    })
  })
}
