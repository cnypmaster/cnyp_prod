angular.module('cnypModule').controller('mainController', function($rootScope,loginService,$scope,$state){
	console.log("Calling mainController");
    $scope.logout = function(){
		console.log("Logging out user");
		loginService.clearCredentials();
	}
    
	var key = $state.$current;
	var target = $($('a[ui-sref^="'+key+'"]').attr('ui-sref'));
	if( target.length ) {
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }
	
	 $scope.myInterval = 3000;
	  $scope.slides = [
			{
			  image: 'http://drive.google.com/uc?export=view&id=0B5OGdKKKAB0zQzdVNEdWc3ZmR1U'
			},
			{
			  image: 'http://drive.google.com/uc?export=view&id=0B5OGdKKKAB0zYUp4eFBmTWhqR1k'
			},
			{
			  image: 'http://drive.google.com/uc?export=view&id=0B5OGdKKKAB0zNWh6UmFYVWw0LTA'
			},
			{
			  image: 'http://drive.google.com/uc?export=view&id=0B5OGdKKKAB0zYWJ5Y2dkQlNxYTA'
			}
	  ];

});