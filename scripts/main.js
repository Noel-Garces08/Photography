const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = nav.querySelectorAll('li a');

	burger.addEventListener('click', () => {
		// Toggle Nav
		nav.classList.toggle('nav-active');

		// Burger Animation
		burger.classList.toggle('toggle');

		// Prevent scrolling on open menu
		if (!nav.classList.contains('nav-active')) {
			document.querySelector('body').style.overflowY = '';
		} else {
			document.querySelector('body').style.overflowY = 'hidden';
		}

		//Animate Links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFadeIn 0.5s ease forwards ${
					index / (7 * 0.7)
				}s`;
			}
		});
	});
};

const photoshootOverlay = () => {
	const photoshoots = document.querySelectorAll('.photoshoot');
	photoshoots.forEach((photoshoot) => {
		const photoshootOverlay = photoshoot.querySelector(
			'.photoshoot-overlay'
		);
		photoshoot.addEventListener('mouseover', () => {
			photoshootOverlay.classList.add('active');
		});
		photoshoot.addEventListener('mouseout', () => {
			photoshootOverlay.classList.remove('active');
		});
	});
};

const app = () => {
	navSlide();
	photoshootOverlay();
};

app();
