angular.module('cnypModule').controller('profileController', function($rootScope,$scope, registerService, $http,$state){
	$scope.userProfile = [];
	$scope.userProfileInfo = {};
	$scope.userId = $rootScope.globals.currentUser.username;
	
    registerService.fetchProfileInfo($rootScope.globals.currentUser.uid).success(function(data){
        $scope.userProfileInfo = data.profileInfo[0];
    })
});