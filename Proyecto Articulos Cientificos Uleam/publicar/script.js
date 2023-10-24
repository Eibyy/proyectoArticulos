tinymce.init({
    selector: '#miTextarea',
    plugins: 'link lists image',
    toolbar: 'undo redo | bold italic | fontselect fontsizeselect | bullist numlist | link image',
    resize: false,
});

//comprobar que hay un titulo puesto
document.addEventListener('DOMContentLoaded', function() {
    var formulario = document.getElementById('miFormulario');
    var tituloInput = document.getElementById('titulo');
    var maxCaracteres = 30; // Cambia este número al límite que desees.

    formulario.addEventListener('submit', function(event) {
        var titulo = tituloInput.value.trim();

        if (titulo === '') {
            alert('Por favor, complete el campo de título.');
            event.preventDefault(); // Evita que se envíe el formulario si no pasa la validación.
        } else if (titulo.length > maxCaracteres) {
            alert('El título no debe exceder de ' + maxCaracteres + ' caracteres.');
            event.preventDefault(); // Evita que se envíe el formulario si no pasa la validación.
        }
    });
});

