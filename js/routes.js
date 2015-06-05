angular.module('contents', ['contentServices'])
	.config(contentRouter);

function contentRouter($routeProvider) {
	$routeProvider
		.when('/', {templateUrl: 'contents.html', controller: 'locationCtrl'});
}