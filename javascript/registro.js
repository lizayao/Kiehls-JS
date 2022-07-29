const formularioRegistro = document.getElementById("formulario");
formularioRegistro.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Datos registrados',
        showConfirmButton: false,
        timer: 1500
      })
}

