

$(document).ready(function(){
    
$('body').on('hidden',function(){
    $(this).removeData('modal');
});    

$('.class1').on('click', function(event) {
    var target = $( $(this).attr('ui-sref') );
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;
      $('.navbar-brand').html('Chotanagpur Youth Pune');
      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
           $('.navbar-brand').html('CYP');
          $(this).addClass("slide");
        }
    });
  });
});