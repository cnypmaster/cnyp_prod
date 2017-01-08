angular.module('cnypModule').controller('loginController', function($scope, loginService, $http,$state,$rootScope){
	console.log('loginController called'+$scope);

	$scope.loginParams = {
		username : "",
		password : ""
	}

	$scope.authenticateUser = function(loginParams){
		loginService.authenticateUser(loginParams).success(function(response){
			//clearing the user info stored in  cookies
			loginService.clearCredentials();

			if(response.status == "LOGIN_FAIL"){
				//$state.go('login');
				$scope.errorLoginMessage = "Invalid username or password";
			}
			if(response.status == "LOGIN_PASS"){
                $('#loginModal').modal('hide');
				loginService.setCredentials($scope.loginParams.username,$scope.loginParams.password,response.uid,true);
				$state.go('profile');
			}
			
		}).error(function(response){
			console.log("Error Occurred");
			$scope.errorLoginMessage = response;
			//$state.go('login');
		});
	}

	



});