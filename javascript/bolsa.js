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
function mostrarBolsa(){
    body.innerHTML = '';
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
                            <th class='txtTotal'>Total:</th>
                            <th id='total'>$${totalBolsa().toLocaleString()}</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div class='btnContenedor'>
                <button class='btnComprar'><a href="compra.html">Comprar</a></button>
            </div>
            <div class='btnContenedor'>
                <button id='vaciarBolsa'>Vaciar bolsa</button>
            </div>
            `;
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
                </tr>`
            tbody.innerHTML += resumen
        }
    }
    let vaciarBolsa = document.getElementById('vaciarBolsa')
    vaciarBolsa.onclick = () => {
    bolsa = [];
    localStorage.setItem("bolsa", bolsa);
    mostrarBolsa();
}
}

mostrarBolsa();