function bucketCtrl ($scope, Location) {
	$scope.locations=Location.query();
	$scope.setActive('bucket');

}