let loader = document.querySelector('.loader');
window.addEventListener('load', () => {
	setTimeout(() => {
		// loader.parentElement.removeChild(loader);
	}, 1000);
});

const navAnimation = () => {
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
				link.style.animation = 'resetOverlay';
			} else {
				link.style.animation = `navLinkFadeIn 0.5s ease forwards ${
					index / (7 * 0.7)
				}s`;
			}
		});
	});
};

const getEventsCoverPhoto = () => {
	let coverPhotos = ``;
	events.forEach((event, index) => {
		coverPhotos += `
						<div class="photoshoot">
							<img src="./events/${event.pathDir}/${event.photos}1.JPG" alt="">
							<div class="photoshoot-overlay">
								<h2>${event.nameOfEvent}</h2>
								<a href='./pages/event.html'> View All Photos </a>
							</div>
						</div>`;
		document.querySelector(
			'.photoshoots-container'
		).innerHTML = coverPhotos;
	});

	setEventsCoverPhotoOverlay();
	setOnClickListeners(events);
};

const setEventsCoverPhotoOverlay = () => {
	const photoshoots = document.querySelectorAll('.photoshoot');
	photoshoots.forEach((photoshoot, index) => {
		let photoshootOverlay = photoshoot.querySelector('.photoshoot-overlay');

		photoshoot.addEventListener('mouseenter', () => {
			photoshootOverlay.style.animation = `overlayFadeIn 0.5s ease forwards ${
				index / 7
			}s`;
		});

		photoshoot.addEventListener('mouseleave', () => {
			photoshootOverlay.style.animation = '';
		});
	});
};

const setOnClickListeners = (events) => {
	const overlayLinks = document.querySelectorAll('.photoshoot-overlay a');
	overlayLinks.forEach((link, index) => {
		link.addEventListener('click', () => {
			// const imagesArray = [];

			// for (let i = 1; i <= eventImages[index].amount; i++) {
			// 	imagesArray.push(`${eventImages[index].name}${i}`);
			// }

			// const eventData = {
			// 	event: events[index],
			// 	imagesArray,
			// };

			localStorage.setItem('event', JSON.stringify(events[index]));
			console.log(events[index]);
		});
	});
};

const loadEventPhotos = () => {
	const event = JSON.parse(localStorage.getItem('event'));
	let eventPhotos = ``;
	console.log(event);
	for (let index = 1; index <= event.numberOfPhotos; index++) {
		eventPhotos += `
					<div class="event">
						<img src="./../events/${event.pathDir}/${event.photos}${index}.JPG" alt="">
					</div>`;
		document.querySelector('.photos-container').innerHTML = eventPhotos;
	}
};

navAnimation();
