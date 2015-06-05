function locationCtrl ($scope, Location) {
	$scope.locations=Location.query();

	$scope.search = function (item){
    if (angular.lowercase(item.name).indexOf($scope.query || '')!=-1 || angular.lowercase(item.abstract).indexOf($scope.query || '')!=-1) {
            return true;
        }
        return false;
  };
}