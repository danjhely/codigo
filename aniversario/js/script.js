document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript cargado correctamente."); // Verifica que el JS se carga

    // Función para mostrar/ocultar el mensaje de amor
    window.showLoveMessage = function() {
        let message = document.getElementById("loveMessage");
        message.classList.toggle("hidden"); // Alterna entre mostrar y ocultar
    };

    // Configuración de partículas
    particlesJS("particles-js", {
        "particles": {
            "number": {"value": 100},
            "size": {"value": 3},
            "move": {"speed": 2}
        }
    });

    // Carrusel de imágenes
    let index = 0;
    function rotateImages() {
        const images = document.querySelectorAll('.carousel-images img');
        images.forEach((img, i) => {
            img.style.display = (i === index) ? 'block' : 'none';
        });
        index = (index + 1) % images.length;
    }
    setInterval(rotateImages, 3000);

    // Función para reproducir música de fondo
    function playMusic() {
        let audio = document.getElementById("background-music");
        audio.play().then(() => {
            console.log("La música está sonando.");
        }).catch((error) => {
            console.log("Error al intentar reproducir la música: ", error);
        });
    }

    // Llamar a playMusic cuando se haga clic en el botón (si es necesario)
    // Asegúrate de que tengas un botón con el evento onclick
    document.querySelector(".new-button").addEventListener("click", playMusic);
});
