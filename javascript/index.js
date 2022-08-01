const body = `
    <div id="portada">
      <img src="img/beneficios.jpg" height= 85px>
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

// FETCH (ruta relativa) //

const contenedorProductos = document.getElementById("contenedorProductos")
fetch("../json/local.json")
    .then((result) => result.json())
    .then((data) => {
        console.log(data)
        data.forEach((producto) => {
            let card = document.createElement("div")
            card.className = "tarjeta"
            let name = document.createElement("h3")
            name.innerText = producto.nombre
            name.className = "tituloProd"
            let descrip = document.createElement("p")
            descrip.innerText = producto.descrip
            descrip.className = "descripProd"
            let img = document.createElement("img")
            img.setAttribute("src", producto.img)
            img.className = "imgProducto"
            let price = document.createElement("p")
            price.innerText = "$" + (producto.precio.toLocaleString())
            price.className = "precioProd"
            let btnAgregar = document.createElement("button")
            btnAgregar.innerText = "Agregar a la bolsa"
            btnAgregar.className = "btnAgregar"
            btnAgregar.id = `${producto.id}`;
            card.append(name, descrip, img, price, btnAgregar)
            contenedorProductos.append(card)
            btnAgregar.addEventListener("click", function() {
                agregarBolsa(btnAgregar.id, data);
            })
        })
    })

// AGREGAR A LA BOLSA //

function agregarBolsa(id, productos){
    const prodEncontrado = productos.find((item) => item.id == id);
    const enBolsa = bolsa.find((prod) => prod.id == prodEncontrado.id)
    if (!enBolsa) {
        bolsa.push({ ...prodEncontrado, cantidad: 1 })
    } else {
        let bolsaFiltrada = bolsa.filter((prod) => prod.id != enBolsa.id)
        bolsa = [...bolsaFiltrada, { ...enBolsa, cantidad: enBolsa.cantidad + 1 }]
    }
    localStorage.setItem('bolsa', JSON.stringify(bolsa))
    contador();
    Toastify({
        text: "Producto agregado a la bolsa",
        duration: 3000,
        gravity: "bottom",
        position: "right",
        style:{
            background: "goldenrod",
        }
        }).showToast();
  }