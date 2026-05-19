window.onload = function() {
    const form = document.getElementById('paymentForm');
    const errorAlert = document.getElementById('errorAlert');

    form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
            event.preventDefault();      // Evita que se recargue la página
            event.stopPropagation();
            
            errorAlert.classList.remove('d-none'); // Muestra la alerta roja arriba
        } else {
            errorAlert.classList.add('d-none'); // Oculta la alerta si todo está bien
        }

        // Esta clase de Bootstrap activa los bordes rojos en campos vacíos y verdes en los llenos
        form.classList.add('was-validated');
    }, false);
    
    // Si presionan Cancelar, volvemos a ocultar la alerta
    form.addEventListener('reset', function() {
        errorAlert.classList.add('d-none');
        form.classList.remove('was-validated');
    });
};

