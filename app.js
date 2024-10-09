// app.js

document.addEventListener('DOMContentLoaded', () => {
	const splashScreen = document.getElementById('splash-screen');
	const startButton = document.getElementById('start-button');
	const main = document.querySelector('main');

	// Evento para el botón de inicio
	startButton.addEventListener('click', () => {
		splashScreen.style.display = 'none';
		main.style.display = 'flex';
	});

	// Manejo del botón de volver al índice
	const backButton = document.getElementById('back-button');
	if (backButton) {
		backButton.addEventListener('click', () => {
			window.location.href = 'index.html'; // Redirige al índice
		});
	}
});
