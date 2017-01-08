angular.module('cnypModule').controller('logoutController', function($rootScope,loginService,$scope,$state){
	console.log("Calling logoutController");
   
		loginService.clearCredentials();
	

});