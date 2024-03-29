// Archivo JavaScript para el menú

const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu-navigation');

hamburger.addEventListener('click',() => {
	menu.classList.toggle('spread');
})

window.addEventListener('click', e => {
	if (menu.classList.contains('spread') && e.target != menu && e.target != hamburger) {
		menu.classList.toggle('spread');
	}
})