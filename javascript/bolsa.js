let bolsa

if(JSON.parse(localStorage.getItem("bolsa"))){
    bolsa = JSON.parse(localStorage.getItem("bolsa"))
}else{
    localStorage.setItem("bolsa", JSON.stringify([]))
    bolsa = JSON.parse(localStorage.getItem("bolsa"))
}

const totalBolsa = () => {
    return bolsa.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
}

const body = document.getElementById('bolsa');
if(bolsa.length == 0){
    const texto = `
        <div class='contenedorBolsa'>
            <h1 class='textoBolsa'>No ha seleccionado ningún producto</h1>
            <a class='btnVolver' href='productos.html'>
                <button>Volver</button>
            </a>
        </div>`;    
    body.innerHTML += texto;
} else {
    const titulo = `
        <div class='contenedorBolsa'>
            <h1 class='textoBolsa'>Bolsa de compras</h1>
            <a class='btnVolver' href='productos.html'>
                <button>Seguir eligiendo</button>
            </a>
        </div>`;
    body.innerHTML += titulo;
    const tabla = `
        <div class='contenedorTabla'>
            <table>
                <thead>
                    <tr>
                        <th class='txtTabla'>Producto</th>
                        <th class='txtTabla'>Nombre</th>
                        <th class='txtTabla'>Cantidad</th>
                        <th class='txtTabla'>Precio</th>
                        <th class='txtTabla'></th>
                    </tr>
                </thead>
                <tbody id='tbody'>
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th></th>
                        <th class='txtTotal'>Total:</th>
                        <th id='total'>$${totalBolsa().toLocaleString()}</th>
                    </tr>
                </tfoot>
            </table>
        </div>
        <div class='btnContenedor'>
            <button class='btnComprar'><a href="compra.html">Comprar</a></button>
        </div>
        <button class='btnBorrar'>Limpiar bolsa de compra</button>`;
    body.innerHTML += tabla;
    const tbody = document.getElementById('tbody')
    for (let i = 0; i < bolsa.length; i++) {
        const element = bolsa[i];
        const {id, nombre, img, precio, cantidad} = element
        const resumen = `
            <tr id=${id}>
                <th class='detallesTabla'><img class='imgProducto' src=${img} alt='foto del producto'></th>
                <th class='tituloProd'>${nombre}</th>
                <th>${cantidad}</th>
                <th>$${(cantidad * precio).toLocaleString()}</th>
                <th>
                    <button class="btn btn-danger btn-small">
                        <img id="eliminarProducto" src='../img/eliminar.png' alt='eliminar producto' height=25px onclick="eliminarProducto()">
                    </button>
                </th>    
            </tr>`
            tbody.innerHTML += resumen 

            const eliminar = document.getElementById("eliminarProducto");
            /* console.log(eliminar) */
            eliminar.addEventListener("onclick", eliminarProducto)
    }  
}

function eliminarProducto(e){
    Swal.fire({
        title: '¿Desea eliminar este producto?',
        text: "Podrá volver a agregarlo luego",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
            'Producto eliminado',
            'Recuerde que puede volver a agregarlo',
            'success'
            )  
            
        }
    })
}

/* function agregarBolsa(e){
    const btn = e.target;
    const idBoton = btn.getAttribute('id');
    const prodEncontrado = productos.find((item) => item.id == idBoton);
    const enBolsa = bolsa.find((prod) => prod.id == prodEncontrado.id)
    if (!enBolsa) {
        bolsa.push({ ...prodEncontrado, cantidad: 1 })
        /* conteo() */
 /*    } else {
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
  } */




// VACIAR BOLSA //

let deleteCart = document.createElement("button")
deleteCart.innerText = ("Vaciar carrito")
div.append(deleteCart)

deleteCart.onclick = () => {
 
    cart = []
    div.innerHTML = ``
    console.log(cart)
}

buttonCart.onclick = () => {
div.innerHTML = ``    
showCart()
}
