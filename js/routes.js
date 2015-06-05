angular.module('contents', ['contentServices'])
	.config(contentRouter);

function contentRouter($routeProvider) {
	$routeProvider
		.when('/', {templateUrl: 'contents.html', controller: 'locationCtrl'})
		.when('/gal_vihara', {templateUrl: 'gal_vihara.html', controller: 'locationCtrl'});
}