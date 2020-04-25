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
	const events = [
		'Christmas-Downtown',
		'Leonardo-Graduation',
		'Twink-Forest',
	];
	const eventsImages = [
		{
			name: 'christmas-downtown-',
			amount: 2,
		},
		{
			name: 'leonardo-graduation-',
			amount: 1,
		},
		{
			name: 'twink-forest-',
			amount: 1,
		},
	];

	let eventsThumbnail = ``;
	events.forEach((event, index) => {
		eventsThumbnail += `
						<div class="photoshoot">
							<img src="./events/${event}/${eventsImages[index].name}1.JPG" alt="">
							<div class="photoshoot-overlay"> 
								<h2>${event.replace(/-/g, ' ')}</h2>
								<a href='./pages/event.html'> View All Photos </a>
							</div>
						</div>`;
		document.querySelector(
			'.photoshoots-container'
		).innerHTML = eventsThumbnail;
	});

	setEventsCoverPhotoOverlay();
	setOnClickListeners(events, eventsImages);
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

const setOnClickListeners = (events, eventImages) => {
	const overlayLinks = document.querySelectorAll('.photoshoot-overlay a');
	overlayLinks.forEach((link, index) => {
		link.addEventListener('click', () => {
			const imagesArray = [];

			for (let i = 1; i <= eventImages[index].amount; i++) {
				imagesArray.push(`${eventImages[index].name}${i}`);
			}

			const eventData = {
				event: events[index],
				imagesArray,
			};

			localStorage.setItem('event', JSON.stringify(eventData));
		});
	});
};

const loadEventPhotos = () => {
	const event = JSON.parse(localStorage.getItem('event'));
	let eventPhotos = ``;
	console.log(event);
	event.imagesArray.forEach((img) => {
		eventPhotos += `
					<div class="event">
						<img src="./../events/${event.event}/${img}.JPG" alt="">
					</div>`;
		document.querySelector('.photos-container').innerHTML = eventPhotos;
	});
};

navAnimation();
