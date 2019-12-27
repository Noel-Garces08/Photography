// VARIABLES
var projects = document.querySelectorAll('.project');
var projectsInfo = document.querySelectorAll('.project-info');

var navigationLinks = document.querySelectorAll('.menu > ul > li > a');

// Navigation page
navigationLinks.forEach(function(link) {
	link.addEventListener('click', function() {
		link.classList.add('menu-link-active');
	});
});

//Projects page
projects.forEach(function(project) {
	removeProjectInfoActive(project);

	project.onmouseover = function() {
		project.firstElementChild.classList.add('project-info-active');
	};
});

function removeProjectInfoActive(project) {
	project.onmouseout = function() {
		project.firstElementChild.classList.remove('project-info-active');
	};
}
