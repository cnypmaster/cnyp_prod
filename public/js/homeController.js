angular.module('cnypModule').controller('homeController', function($rootScope,$scope,$state){
	
	var key = $state.$current;
	var target = $($('a[ui-sref^="'+key+'"]').attr('ui-sref'));
	if( target.length ) {
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});