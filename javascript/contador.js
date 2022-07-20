var bolsa;

if(JSON.parse(localStorage.getItem("bolsa"))){
    bolsa = JSON.parse(localStorage.getItem("bolsa"))
}else{
    localStorage.setItem("bolsa", JSON.stringify([]))
    bolsa = JSON.parse(localStorage.getItem("bolsa"))
}

function contador(){ 
    const contador = document.getElementById('seleccion')
    contador.innerHTML = bolsa.reduce((acc, prod) => acc + prod.cantidad, 0)
} 
contador();