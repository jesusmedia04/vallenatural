// Ocultar todas las secciones al cargar
document.querySelectorAll('.content-section').forEach((section) => {
	section.style.display = 'none';
});

// Pantalla de bienvenida (Splash Screen)
document.getElementById('start-button').addEventListener('click', function () {
	document.getElementById('splash-screen').style.opacity = '0'; // Desaparecer lentamente
	setTimeout(() => {
		document.getElementById('splash-screen').style.display = 'none'; // Ocultar después de la transición
		document.querySelector('main').style.display = 'flex'; // Mostrar el main
		document.querySelector('.main-background').classList.add('show'                                                                     ); // Mostrar con animación
	}, 500); // Duración de la transición
});

// Navegación entre secciones
document.querySelectorAll('.button-options a').forEach((section) => {
	section.addEventListener('click', (event) => {
		event.preventDefault(); // Evitar el comportamiento por defecto del enlace
		const target = section.getAttribute('data-section');
		window.location.href = `${target}.html`; // Suponiendo que cada sección tiene su propia página
	});
});
