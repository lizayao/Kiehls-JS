
const body = `
            
            `
const inicio = document.getElementById("inicio")
inicio.innerHTML += body

setTimeout(() => {
    Swal.fire({
        title: '¡Envío gratis!',
        text: 'Superando los $10.000 en la compra ofrecemos envío gratis a todo el país.',
      })
}, 2000)