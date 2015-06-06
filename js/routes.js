angular.module('contents', ['contentServices'])
	.config(contentRouter);

function contentRouter($routeProvider) {
	$routeProvider
		.when('/', {templateUrl: 'contents.html', controller: 'locationCtrl'})
		.when('/gal_vihara', {templateUrl: 'gal_vihara.html', controller: 'locationCtrl'})
		.when('/latha_mandapaya', {templateUrl: 'latha_mandapaya.html', controller: 'locationCtrl'})
		.when('/lankathilaka_temple', {templateUrl: 'lankathilaka_temple.html', controller: 'locationCtrl'})
		.when('/satmahal_prasada', {templateUrl: 'satmahal_prasada.html', controller: 'locationCtrl'})
		.when('/vatadage', {templateUrl: 'vatadage.html', controller: 'locationCtrl'})
		.when('/royal_palace', {templateUrl: 'royal_palace.html', controller: 'locationCtrl'})
		.when('/thuparama_gedige', {templateUrl: 'thuparama_gedige.html', controller: 'locationCtrl'})
		.when('/bucket', {templateUrl: 'bucket.html', controller: 'bucketCtrl'});
}