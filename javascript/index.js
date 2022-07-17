
const body = `
            <img src="img/portadas/local.jpg" class=imagenPortada>
            <img src="img/portadas/portada1.jpg" height=500px>
            <img src="img/portadas/portada2.jpg" height=500px>

            `

const portada = document.getElementById("portada")
portada.innerHTML += body

/* Falta darle formato */

setTimeout(() => {
    Swal.fire({
        title: '¡Envío gratis!',
        text: 'Superando los $10.000 en tu compra.',
      })
}, 3000)