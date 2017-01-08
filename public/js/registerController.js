angular.module('cnypModule').controller('registerController', function($scope,registerService,$http,$state,$rootScope){
	
	console.log('registerController called'+$scope);
	
	$scope.userInformation = {};

	$scope.createProfiles = function(userInformation){

		if($scope.registerForm.$valid){
			console.log('Registering a user');
            registerService.createProfile(userInformation).success(function(data){
               console.log(data.status);
               $scope.message = data.status;
               console.log("Profile Created Successfully");
               //  $('#rgstrModal').modal('hide');
            //     $('#loginModal').modal('show');
                
               //$state.go('login');
            });
		}else{
			console.log('Unable to save user. Validation error');
		}
	};
});