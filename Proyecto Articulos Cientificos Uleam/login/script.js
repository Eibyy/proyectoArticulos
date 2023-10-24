document.addEventListener('DOMContentLoaded', function() {
    var formulario = document.querySelector('.login-card-form');
    var usuarioInput = document.getElementById('usuario');
    var contraseniaInput = document.getElementById('contrasenia');
    var rememberMeCheckbox = document.getElementById('rememberMeCheckbox');

    // Verificar si hay datos guardados en localStorage
    var usuarioGuardado = localStorage.getItem('usuario');
    var contraseniaGuardada = localStorage.getItem('contrasenia');

    if (usuarioGuardado) {
        usuarioInput.value = usuarioGuardado;
    }

    if (usuarioGuardado && contraseniaGuardada) {
        contraseniaInput.value = contraseniaGuardada;
        rememberMeCheckbox.checked = true;
    }

    formulario.addEventListener('submit', function(event) {
        var usuario = usuarioInput.value.trim();
        var contrasenia = contraseniaInput.value.trim();

        if (usuario === '' || contrasenia === '') {
            alert('Por favor, completa ambos campos de usuario y contraseña.');
            event.preventDefault();
        }

        // Guardar los datos si el checkbox está marcado
        if (rememberMeCheckbox.checked) {
            localStorage.setItem('usuario', usuario);
            localStorage.setItem('contrasenia', contrasenia);
        } else {
            // Si no está marcado, borra los datos almacenados
            localStorage.removeItem('usuario');
            localStorage.removeItem('contrasenia');
        }
    });
});
