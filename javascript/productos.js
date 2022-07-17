// SIMULADOR //

/* let precio;
let cantidad = 0;
let precioTotal = 0;
let cantidadTotal = 0;

function ingresarPrecio(){
    precio = Number(prompt("Ingrese el precio del producto"));
    while((isNaN(precio)) || (precio === 0)){
        precio = Number(prompt("Por favor ingrese un valor numérico mayor a cero"));
    }
}

function ingresarCantidad(){
    cantidad = parseInt(prompt("Ingrese la cantidad a comprar del producto"));
    while((isNaN(cantidad)) || (cantidad === 0)){
        cantidad = parseInt(prompt("Por favor ingrese la cantidad"));
    }
    return cantidad;
}

function calcularCantidad(){
    cantidadTotal += cantidad
}

function calcularTotal(precio, cantidad){
    precioTotal += precio * cantidad;
}

for (let i = 0; i < 5; i++){
    ingresarPrecio();
    ingresarCantidad(); 
    calcularCantidad();
    calcularTotal(precio, cantidad);
}  */


// OBJETO + ARRAYS //

/* class Producto{
    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

const producto1 = new Producto("Ultra Facial Oil-Free Cleanser", 6390, cantidad)
const producto2 = new Producto("Cucumber Herbal Conditioning Cleanser", 6390, cantidad)
const producto3 = new Producto("Rare Earth Deep Pore Daily Cleanser", 6390, cantidad)

const listado = []
listado.push(producto1);
listado.push(producto2);
listado.push(producto3);

let detalleCompra = "Cantidad de productos seleccionados: " + cantidadTotal + "\nTotal a abonar: " + "$ " + precioTotal

alert(detalleCompra) */


// DOM + EVENTOS //

/* let titulo = document.getElementById("titulo");
titulo.innerText = "Productos Skincare Kiehl's";

document.getElementById("nombre").value = "Liza Yao"

const productos = [{nombre: "Ultra Facial Oil-Free Cleanser", descripcion: "Limpiador facial sin aceite", precio: 6390},
                   {nombre: "Cucumber Herbal Conditioning Cleanser", descripcion: "Limpiador facial con esencia de pepino", precio: 6390},
                   {nombre: "Rare Earth Deep Pore Daily Cleanser", descripcion: "Limpiador facial para poros", precio: 6390},];
for (const producto of productos){
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> Producto: ${producto.nombre}</h3>
                            <p> Descripción: ${producto.descripcion}</p>
                            <b> Precio: $ ${producto.precio}</b>`;
    document.body.appendChild(contenedor);
}

let descuentos = document.getElementById("descuentos")
descuentos.onclick = () => {alert("Si comprás más de 4 productos, te damos un 30% de descuento en el total!")}

let formularioRegistro = document.getElementById("formulario");
formularioRegistro.addEventListener("submit", validarFormulario);

function validarFormulario (e){
    e.preventDefault();
    alert("Datos registrados")
} */


// STORAGE + JSON //

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

let bolsa

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
        const detalle = `
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
        const contenedor = document.getElementById("contenedor")
        contenedor.innerHTML += detalle
    }
}

detalleProductos()

const btnAgregar = document.getElementsByClassName("btnAgregar");

for (let i = 0; i < btnAgregar.length; i++){
    const element = btnAgregar[i];
    element.addEventListener("click", agregarBolsa)
}

/* function conteo(){ 
    const contador = document.getElementById('seleccion')
    contador.innerHTML = bolsa.reduce((acc, prod) => acc + prod.cantidad, 0)
} */ 

function agregarBolsa(e){
    const btn = e.target;
    const idBoton = btn.getAttribute('id');
    const prodEncontrado = productos.find((item) => item.id == idBoton);
    const enBolsa = bolsa.find((prod) => prod.id == prodEncontrado.id)
    if (!enBolsa) {
        bolsa.push({ ...prodEncontrado, cantidad: 1 })
        /* conteo() */
    } else {
        let bolsaFiltrada = bolsa.filter((prod) => prod.id != enBolsa.id)
        bolsa = [...bolsaFiltrada, { ...enBolsa, cantidad: enBolsa.cantidad + 1 }]
    }
    localStorage.setItem('bolsa', JSON.stringify(bolsa))
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Producto agregado a la bolsa',
        showConfirmButton: false,
        timer: 1500
    })
  }
