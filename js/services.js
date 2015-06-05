angular.module('contentServices', ['ngResource'])
	.factory('Location', function  ($resource) {
		return $resource('/polonnaruwa/data/locations.json');
	});