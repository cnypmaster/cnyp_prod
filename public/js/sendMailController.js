angular.module('cnypModule').controller('sendMailController', function($rootScope,$scope,$state,$http){
    console.log('Calling sendMailController');
	$scope.loading = false;
    
	$scope.mail = {
		name : "",
		phone : "",
		email : "",
		message : ""
	}
	
	var oriName = angular.copy($scope.mail.name);
	var oriPhone = angular.copy($scope.mail.phone);
	var oriEmail = angular.copy($scope.mail.email);
	var oriMessage = angular.copy($scope.mail.message);
	
	
	$scope.send = function () {
		    console.log($scope.mail.name);
            $http({
                method: 'POST',
                url: 'sendMail.php',
                data: $.param($scope.mail),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
            }).success(function (data) {
                    console.log("DATA "+data);

                    if (!data.success) {
                        // if not successful, bind errors to error variables
                        $scope.serverMessage = data.message;	
						$scope.errorName = data.errors.name;
						$scope.errorEmail = data.errors.email;
						$scope.errorPhone = data.errors.phone;
						$scope.errorMessage = data.errors.message;
                    } 
                    else {
                        // if successful, bind success message to message
						$scope.serverMessage = data.message;
						$scope.errorName = "";
						$scope.errorEmail = "";
						$scope.errorPhone = "";
						$scope.errorMessage = "";						
                    
                    }
                });

        };
		
	
    

    $scope.reset = function ()
    {
      $scope.mail.name = angular.copy(oriName);
	  $scope.mail.phone = angular.copy(oriPhone);
	  $scope.mail.email = angular.copy(oriEmail);
	  $scope.mail.message = angular.copy(oriMessage);
      $scope.userForm.$setPristine();
    };

});