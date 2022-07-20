function contador(){ 
    const contador = document.getElementById('seleccion')
    contador.innerHTML = bolsa.reduce((acc, prod) => acc + prod.cantidad, 0)
} 
contador();