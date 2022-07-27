
const body = `
    <div id="portada">
      <img src="img/beneficios.jpg" height= 85px>
    </div>
    <div class="infoInicio">
      <img src="img/portadas/portada1.jpg" height=500px>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit iure laborum, possimus veniam harum magnam numquam blanditiis placeat reiciendis, iste molestias sapiente tenetur assumenda vel vitae excepturi nihil repellendus a.</p>
      <button>Comprar ahora</button>
    </div>
    <div class="infoInicio">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, explicabo! Illo tenetur inventore nostrum velit alias recusandae quisquam iusto facere, perspiciatis nemo, a odit veritatis aut repellendus consequuntur cupiditate ut!</p>
      <img src="img/portadas/portada2.jpg" height=500px>
    </div>
            `
const inicio = document.getElementById("inicio")
inicio.innerHTML += body

setTimeout(() => {
    Swal.fire({
        title: '¡Envío gratis!',
        text: 'Superando los $25.000 en la compra ofrecemos envío gratis a todo el país.',
      })
}, 2000)