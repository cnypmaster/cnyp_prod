'use strict'

var cnypModule = angular.module('cnypModule',['ui.router', 'ngCookies','ui.bootstrap']).config(function($stateProvider, $urlRouterProvider, $locationProvider){
	$urlRouterProvider.otherwise('/index');

	$stateProvider.state('#home', {
		url : '/home',
		templateUrl : 'partials/home.html',
		controller : 'homeController'

	}).state('#about',{
		url : '/about',
		templateUrl : 'partials/home.html',
		controller : 'homeController'

	}).state('/index',{
		url : '/index',
		templateUrl : 'partials/home.html',
		controller : 'homeController'

	}).state('#events',{
		url : '/events',
		templateUrl : 'partials/home.html',
		controller : 'homeController'

	}).state('#gallery',{
		url : '/gallery',
		templateUrl : 'partials/home.html',
		controller : 'homeController'

	}).state('#video',{
		url : '/video',
		templateUrl : 'partials/home.html',
		controller : 'homeController'

	}).state('#contact',{
		url : '/contact',
		templateUrl : 'partials/home.html',
		controller : 'sendMailController'
	});

	$locationProvider.html5Mode({
  		enabled: true,
  		requireBase: false
	});

})
.run(['$rootScope','$state','$cookieStore','$http',
	function($rootScope,$state,$cookieStore,$http){
		//keep user logged in after page refresh
		console.log('Keep user logged in after page refresh');
		$rootScope.globals = $cookieStore.get('globals') || {};
		if($rootScope.globals.currentUser) {
			$http.defaults.headers.common['Authorization'] = 'Basic' + $rootScope.globals.currentUser.authdata;
		}

		$rootScope.$on('$stateChangeStart,loginService', function(event,next,current){
			//redirect to login page if not logged in
			if($state.current != 'login' && !$rootScope.globals.currentUser){
				$state.go('login');
				loginService.clearCredentials();
			}
		});	
	}]);