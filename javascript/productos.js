// PRODUCTOS //

let productos = [
    {
        id: "01",
        categoria: "Limpiadores y exfoliantes",
        nombre: "Ultra Facial Oil-Free Cleanser",
        precio: 6950,
        descrip: "Un limpiador facial suave y espumoso para pieles normales a oleosas.",
        img: "../img/kiehls/ultrafacial.JPG"
    },
    {
        id: "02",
        categoria: "Limpiadores y exfoliantes",
        nombre: "Cucumber Herbal Conditioning Cleanser",
        descrip: "Un limpiador facial en gel espumoso con Pepino efectivo y suave para pieles secas y sensibles.",
        precio: 7130,
        img: "../img/kiehls/cucumber.JPG"
    },
    {
        id: "03",
        categoria: "Limpiadores y exfoliantes",
        nombre: "Rare Earth Deep Pore Daily Cleanser",
        descrip: "Un limpiador facial profundo, que desintoxica los poros y exfolia suavemente la piel.",
        precio: 6420,
        img: "../img/kiehls/rareEarth.jpg"
    },
    {
        id: "04",
        categoria: "Limpiadores y exfoliantes",
        nombre: "Ultrafacial Cleanser",
        descrip: "Un limpiador espumoso suave para todo tipo de pieles. Es muy eficiente y recomendado.",
        precio: 6390,
        img: "../img/kiehls/facialcleanser.jpg"
    },
    {
        id: "05",
        categoria: "Tónicos faciales",
        nombre: "Calendula Herbal Extract-Toner Alcohol-Free",
        descrip: "Un tónico sin alcohol con pétalos de Caléndula, que ayuda a calmar la piel.",
        precio: 6880,
        img: "../img/kiehls/calendulatoner.jpg"
    },
    {
        id: "06",
        categoria: "Tónicos faciales",
        nombre: "Cucumber Herbal Alcohol-Free Toner",
        descrip: "Tónico facial ligero y sin alcohol para pieles secas y sensibles. Apta para todo tipo de pieles.",
        precio: 6360,
        img: "../img/kiehls/cucumbertoner.jpg"
    },
    {
        id: "07",
        categoria: "Tónicos faciales",
        nombre: "Ultra Facial Oil-Free Toner",
        descrip: "Un tónico suave para pieles grasas y oleosas. Es utilizado luego de la limpieza facial.",
        precio: 6390,
        img: "../img/kiehls/ultrafacialtoner.jpg"
    },
    {
        id: "08",
        categoria: "Tónicos faciales",
        nombre: "Rare Earth Pore Refining Tonic",
        descrip: "Este tónico bifásico minimiza los poros y ayuda a eliminar las toxinas de la superficie de la piel.",
        precio: 6000,
        img: "../img/kiehls/raretoner.jpg"
    },
    {
        id: "09",
        categoria: "Sueros y aceites faciales",
        nombre: "Vital Skin-Strengthening Super Serum",
        descrip: "Ayuda a proteger la piel contra los factores estresores internos y externos y corrige los signos de la edad.",
        precio: 5960,
        img: "../img/kiehls/vitalaceite.jpg"
    },
    {
        id: "10",
        categoria: "Sueros y aceites faciales",
        nombre: "Midnight Recovery Concentrate",
        descrip: "Un aceite facial nocturno que restaura visiblemente la piel. Elaborado con ingredientes derivados de origen natural.",
        precio: 6390,
        img: "../img/kiehls/midnightsuero.jpg"
    },
    {
        id: "11",
        categoria: "Sueros y aceites faciales",
        nombre: "Daily Reviving Concentrate Yellow",
        descrip: "Un aceite facial ligero que mantiene la piel radiante durante todo el día mientras la protege contra los agresores externos.",
        precio: 5740,
        img: "../img/kiehls/daily.jpg"
    },
    {
        id: "12",
        categoria: "Sueros y aceites faciales",
        nombre: "Precision Lifting & Pore-Tightening Concentrate Exclusive",
        descrip: "Un suero minimizador de poros que tensa visiblemente la piel. Apto para todo tipo de pieles.",
        precio: 6990,
        img: "../img/kiehls/pore.jpg"
    },
]

// DETALLE PRODUCTOS //

let bolsa;

if(JSON.parse(localStorage.getItem("bolsa"))){
    bolsa = JSON.parse(localStorage.getItem("bolsa"))
}else{
    localStorage.setItem("bolsa", JSON.stringify([]))
    bolsa = JSON.parse(localStorage.getItem("bolsa"))
}

function detalleProductos(){
    for(let i = 0; i < productos.length; i++){
        const element = productos[i];
        const {id, nombre, descrip, precio, img} = element
        const card = `
                        <div class="tarjeta">
                            <p class="tituloProd">${nombre}</p>
                            <p class="descripProd">${descrip}</p>
                            <div>
                                <img class="imgProducto" src=${img} alt=""/>
                            </div>
                            <div class="precioProd">
                                <p>$${precio.toLocaleString()}</p>
                            </div>
                            <div>
                                <button id=${id} class="btnAgregar"> Agregar a la bolsa </button>
                            </div>
                        </div>`
        const contenedorProductos = document.getElementById("contenedorProductos")
        contenedorProductos.innerHTML += card
    }
}

detalleProductos()

// AGREGAR A LA BOLSA //

const btnAgregar = document.getElementsByClassName("btnAgregar");

for (let i = 0; i < btnAgregar.length; i++){
    const element = btnAgregar[i];
    element.addEventListener("click", agregarBolsa)
}

function contador(){ 
    const contador = document.getElementById('seleccion')
    contador.innerHTML = bolsa.reduce((acc, prod) => acc + prod.cantidad, 0)
} 

contador();

function agregarBolsa(e){
    const btn = e.target;
    const idBoton = btn.getAttribute('id');
    const prodEncontrado = productos.find((item) => item.id == idBoton);

    const enBolsa = bolsa.find((prod) => prod.id == prodEncontrado.id)
    if (!enBolsa) {
        bolsa.push({ ...prodEncontrado, cantidad: 1 })
    } else {
        let bolsaFiltrada = bolsa.filter((prod) => prod.id != enBolsa.id)
        bolsa = [...bolsaFiltrada, { ...enBolsa, cantidad: enBolsa.cantidad + 1 }]
    }
    localStorage.setItem('bolsa', JSON.stringify(bolsa))
    contador();
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Producto agregado a la bolsa',
        showConfirmButton: false,
        timer: 1500
    })
  }

// FILTRAR PRODUCTOS //

/* let buscador = document.getElementById("inputSearch")
let filtrar = document.getElementById("filtrar")

function filtrarPorCat() {
    let verTodo = document.createElement("button")
    verTodo.innerText = ("Ver Todo")
    showProducts.append(verTodo)
    const filteredProducts = products.filter((product) => product.category === buscador.value)
    console.log(filteredProducts)

    filteredProducts.forEach((filter) => {
        let cardFilter = document.createElement("div")
        showAllProducts.append(cardFilter)
        let imgFilter = document.createElement("img")
        imgFilter.setAttribute("src", filter.img)
        let nameFilter = document.createElement("h3")
        nameFilter.innerText = (filter.name)
        let priceFilter = document.createElement("p")
        priceFilter.innerText = (filter.price)
        let buyButtonFilter = document.createElement("button")
        buyButtonFilter.innerText = ("Agregar al carrito")
        cardFilter.append(imgFilter, nameFilter, priceFilter, buyButtonFilter)

    })

    verTodo.onclick = () => {
        showAllProducts.innerHTML = ``
        mostrarProductos()
    }
}

buscador.onchange = () => {
    showAllProducts.innerHTML = ``
    filtrarPorCat()
}

filtrar.onclick = () => {
    showAllProducts.innerHTML = ``
    filtrarPorCat()
} */