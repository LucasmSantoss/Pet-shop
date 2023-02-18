let enviar = document.getElementById("enviar");
let dato = document.getElementById('in01')
let dato2 = document.getElementById('in02')
let dato3 = document.getElementById('in03')
let dato4 = document.getElementById('in04')
let dato5 = document.getElementById('in05')
let dato6 = document.getElementById('in06')

let cliente = []

enviar.addEventListener("submit", (e) => {
    e.preventDefault();
    let persona = new Cliente(in01.value, in02.value, in03.value, in04.value, in05.value, in06.value);
    cliente.push(persona);
    console.log(cliente)
    localStorage.setItem('cliente', (JSON.stringify(cliente)));
    let descarga = JSON.parse(localStorage.getItem('cliente'));
    Swal.fire({
        title: `Muchas Gracias ${cliente[0].nombre}`,
        text: `Pronto te enviaremos una respuesta a tu consulta`,
        icon: 'success',
        footer: 'PUPPIS PET-SHOP'
    })
    enviar.reset()
});
