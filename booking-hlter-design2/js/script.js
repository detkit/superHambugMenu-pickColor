const navMenu = document.getElementById('menu-item');

navMenu.style.maxHeight = '0px';

function menuToggle() {
	if (navMenu.style.maxHeight == '0px') {
		navMenu.style.maxHeight = '100vh';
	} else {
		navMenu.style.maxHeight = '0px';
	}
}
