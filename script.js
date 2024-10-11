document.getElementById('goToRegister').addEventListener('click', () => {
    // Desplazar la imagen de inicio fuera de la vista
    document.querySelector('.imagen-form').style.transform = 'translateX(-100%)';

    // Esperar 1 segundo antes de hacer el cambio de visibilidad
    setTimeout(() => {
        document.querySelector('.imagen-desvanecimiento-inicio').style.display = "block"; // Oculta la imagen de inicio
        document.querySelector('.imagen-desvanecimiento-registro').style.display = "none"; // Muestra la imagen de inicio

    }, 500); // Espera 1 segundo
});

document.getElementById('goToLogin').addEventListener('click', () => {
    // Restablecer la imagen de registro
    document.querySelector('.imagen-form').style.transform = 'translateX(0%)';

    // Esperar 1 segundo antes de hacer el cambio de visibilidad
    setTimeout(() => {
        document.querySelector('.imagen-desvanecimiento-registro').style.display = "block"; // Oculta la imagen de registro
        document.querySelector('.imagen-desvanecimiento-inicio').style.display = "none"; // Muestra la imagen de inicio

    }, 500); // Espera 1 segundo
});





const checkboxAnimado = document.querySelector(".checkbox-animado");
const cargandoAnimacion = document.getElementById("cargandoAnimacion");
                    
checkboxAnimado.addEventListener("change", () => {
    if (checkboxAnimado.checked) {
        checkboxAnimado.style.display = "none"; // Ocultar el checkbox
        cargandoAnimacion.style.display = "block"; // Mostrar animación de carga

        setTimeout(() => {
            cargandoAnimacion.style.display = "none"; // Ocultar animación
            checkboxAnimado.style.display = "inline"; // Mostrar el checkbox nuevamente
            checkboxAnimado.checked = true; 
        }, 2000);
    } else {
        cargandoAnimacion.style.display = "none"; 
    }
});
