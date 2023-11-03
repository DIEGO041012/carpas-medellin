// Obtenemos los elementos del menú de navegación
const inicio = document.getElementById('inicio');
const galeria = document.getElementById('galeria');
const quienes = document.getElementById('quienes');
const contacto = document.getElementById('contacto');

// Contenido dinámico que se mostrará al hacer clic en los enlaces
const contenidoInicio = "<h2>Página de Inicio</h2><p>Bienvenido a nuestra página de inicio.</p>";
const contenidoGaleria = "<h2>Galería de Imágenes</h2><p>Aquí encontrarás nuestras imágenes.</p>";
const contenidoQuienes = "<h2>Sobre Nosotros</h2><p>Somos un equipo comprometido...</p>";
const contenidoContacto = "<h2>Contáctanos</h2><p>¡Contáctanos a través de: example@example.com</p>";

// Funciones para mostrar el contenido correspondiente
inicio.addEventListener('click', function() {
    document.getElementById('content').innerHTML = contenidoInicio;
});

galeria.addEventListener('click', function() {
    document.getElementById('content').innerHTML = contenidoGaleria;
});

quienes.addEventListener('click', function() {
    document.getElementById('content').innerHTML = contenidoQuienes;
});

contacto.addEventListener('click', function() {
    document.getElementById('content').innerHTML = contenidoContacto;
});

