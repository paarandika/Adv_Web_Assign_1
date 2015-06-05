$(function() {
    var pull        = $('#pull');
        menu        = $('nav ul');
        menuHeight  = menu.height();
 
    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $('nav ul a').on('click', function(e) {
    	var w = $(window).width();
    	if(w < 480) {
    	e.preventDefault();
        menu.slideToggle();
    	}
    });
});


$(window).resize(function(){
	$(".right").css({'float':'none'})
    var w = $(window).width();
    if(w > 480 && menu.is(':hidden')) {
        menu.removeAttr('style');
    }
    if(w > 749) {
    	$(".right").css({'float':'right'})
    }

    $(".content_box").dotdotdot({
        wrap: 'letter' 
    });
}); 