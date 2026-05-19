window.onload = function() {
    const form = document.getElementById('paymentForm');
    const errorAlert = document.getElementById('errorAlert');

    form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
            event.preventDefault();      // Evita que se me recargue la página
            event.stopPropagation();
            
            errorAlert.classList.remove('d-none'); // Este muestra la alerta roja
        } else {
            errorAlert.classList.add('d-none'); // Este oculta la alerta si todo va bien
        }

        // Activa los bordes rojos en los campos vacíos y verdes en los llenos
        form.classList.add('was-validated');
    }, false);
    
    form.addEventListener('reset', function() {
        errorAlert.classList.add('d-none');
        form.classList.remove('was-validated');
    });
};



