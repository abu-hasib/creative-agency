const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.primary-nav');

toggle.addEventListener('click', () => {
	let isOpen = nav.getAttribute('data-open');
	if (isOpen === 'false') {
		nav.setAttribute('data-open', true);
	} else {
		nav.setAttribute('data-open', false);
	}
});

document.addEventListener('scroll', () => nav.setAttribute('data-open', false));
