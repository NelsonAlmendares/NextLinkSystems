import Splide from '@splidejs/splide';

document.addEventListener('DOMContentLoaded', () => {
	var splide = new Splide('.splide', {
		type: 'loop',
		perPage: 3,
		focus: 'center',
	});

	splide.mount();
});
