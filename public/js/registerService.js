angular.module('cnypModule').factory('registerService', function($http, $location,Base64, $rootScope) {
	console.log('register service  called');
	return {
			createProfile : function(userInfo){
				var data = {
					username : userInfo.username,
					password : Base64.encode(userInfo.password),
                    firstName : userInfo.firstName,
                    lastName : userInfo.lastName,
                    emailID : userInfo.emailID
				}
				return $http.post('/createProfile',data);
			},
        
            fetchProfileInfo : function(userId){
                return $http.get('/fetchUserProfile/'+userId);
            }
	}
});