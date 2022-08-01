const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarFormulario);

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