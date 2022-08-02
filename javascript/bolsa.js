var bolsa

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

function actualizarBolsa(){
    if(bolsa.length == 0){
        const texto = `
            <div class='contenedorBolsa'>
                <h1 class='textoBolsa'>No ha seleccionado ningún producto</h1>
                <a class='btnVolver' href='../index.html'>
                    <button>Volver</button>
                </a>
            </div>`;    
        body.innerHTML += texto;
    } else {
        const titulo = `
            <div class='contenedorBolsa'>
                <h1 class='textoBolsa'>Bolsa de compras</h1>
                <a class='btnVolver' href='../index.html'>
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
                            <th class='txtTabla'>Cantidad</th>
                            <th class='txtTabla'>Precio</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody id='tbody'>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
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
            </div>`;
        body.innerHTML += tabla;
        const tbody = document.getElementById('tbody')

        for (let i = 0; i < bolsa.length; i++) {
            const producto = bolsa[i];
            const {id, nombre, img, precio, cantidad} = producto

            let resumen = document.createElement("tr")

            let detallesTabla = document.createElement("th")
            detallesTabla.className = "detallesTabla"
            
            let imagenTabla = document.createElement("img");
            imagenTabla.setAttribute("src", producto.img) 

            detallesTabla.appendChild(imagenTabla);
            
            resumen.appendChild(detallesTabla);

            let tituloProd = document.createElement("th")
            tituloProd.innerText = producto.nombre

            resumen.appendChild(tituloProd);

            let cant = document.createElement("th")
            cant.innerText = cantidad;

            resumen.appendChild(cant);

            let price = document.createElement("th")
            price.innerText = "$" + (cantidad * precio).toLocaleString();

            resumen.appendChild(price);

            let btnEliminar = document.createElement("img")
            btnEliminar.setAttribute("src","../img/eliminar.png")
            btnEliminar.className = "btn btn-danger btn-small"
            btnEliminar.id = `${producto.id}`;

            resumen.appendChild(btnEliminar);

            resumen.append(nombre, img, precio, cantidad)

 /*        const resumen = `
            <tr>
                <th class='detallesTabla'><img class='imgProducto' src=${img} alt='foto del producto'></th>
                <th class='tituloProd'>${nombre}</th>
                <th>${cantidad}</th>
                <th>$${(cantidad * precio).toLocaleString()}</th>
                <th>
                    <button onclick="eliminar(${id})" id="${id}" class="btn btn-danger btn-small" data-id=${id}>
                        <img src='../img/eliminar.png' alt='eliminar producto' height=25px>
                    </button>
                </th>    
            </tr>` */

            tbody.append(resumen)

            /* let eliminar = document.getElementById("eliminarProducto") */
            btnEliminar.addEventListener("click", function() {
                eliminarProducto(id, bolsa);
            })
        }
    }  
}
actualizarBolsa();

// ELIMINAR PRODUCTO //

function eliminarProducto(id, bolsa){
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
            bolsa = bolsa.filter( e => e.id !== id);
            localStorage.setItem("bolsa", bolsa);
            actualizarBolsa();
            Swal.fire(
            'Producto eliminado',
            'Recuerde que puede volver a agregarlo',
            'success'
            )
        }
    })
}