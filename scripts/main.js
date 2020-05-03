if (window.location.pathname === '/pages/contact.html') {
	const form = document.querySelector('.contact-form');
	// const errorElement = document;
	let firstName = form.elements.namedItem('firstName');
	let lastName = form.elements.namedItem('lastName');
	let email = form.elements.namedItem('_replyto');
	let message = form.elements.namedItem('message');

	form.addEventListener('submit', (e) => {
		let errorMessages = [];
		if (
			firstName.value === '' ||
			firstName.value === null ||
			lastName.value === '' ||
			lastName.value === null
		) {
			if (firstName.value === '' || firstName.value === null) {
				firstName.style.borderColor = 'red';
			} else {
				firstName.style.borderColor = '';
			}

			if (lastName.value === '' || lastName.value === null) {
				lastName.style.borderColor = 'red';
			} else {
				lastName.style.borderColor = '';
			}
			errorMessages.push('name is required');
		}

		if (email.value === '' || email.value === null) {
			errorMessages.push('please enter an email');
			email.style.borderColor = 'red';
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email.value)
		) {
			errorMessages.push('please enter a valid email');
			email.style.borderColor = 'red';
		} else {
			email.style.borderColor = '';
		}

		if (message.value === '' || message.value === null) {
			errorMessages.push('please enter message');
			message.style.borderColor = 'red';
		} else {
			message.style.borderColor = '';
		}

		if (errorMessages.length > 0) {
			e.preventDefault();
			console.log(errorMessages);
		}
	});
}

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
				link.style.animation = '';
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

	setOnClickListeners(events);
};

const setOnClickListeners = (events) => {
	const overlayLinks = document.querySelectorAll('.photoshoot-overlay a');
	overlayLinks.forEach((link, index) => {
		link.addEventListener('click', () => {
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
