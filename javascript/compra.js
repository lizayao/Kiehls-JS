const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Muchas gracias por su compra!',
        showConfirmButton: false,
        timer: 1500
      })
}