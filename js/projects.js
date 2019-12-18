var projects = document.querySelectorAll('.project');
var projectsInfo = document.querySelectorAll('.project-info');

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

// project.onmouseout = function(project) {
// 	project.firstElementChild.classList.remove('project-info-active');
// };
