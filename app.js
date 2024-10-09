// app.js
document.addEventListener('DOMContentLoaded', () => {
	const splashScreen = document.getElementById('splash-screen');
	const mainContent = document.querySelector('main');
	const header = document.querySelector('header');

	// Muestra el contenido después de un retraso
	setTimeout(() => {
		splashScreen.style.opacity = 0;
		setTimeout(() => {
			splashScreen.style.display = 'none';
			header.style.display = 'block';
			mainContent.style.display = 'flex';
			setTimeout(() => {
				mainContent.querySelector('.main-background').classList.add('show');
			}, 50);
		}, 500);
	}, 3000);

	// Navegación a ventas.html
	const backButton = document.getElementById('back-button');
	if (backButton) {
		backButton.addEventListener('click', () => {
			window.location.href = 'index.html';
		});
	}
});
