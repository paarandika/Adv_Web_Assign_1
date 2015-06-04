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
    	if(w < 510) {
    	e.preventDefault();
        menu.slideToggle();
    	}
    });
});


$(window).resize(function(){
	$(".right").css({'float':'none'})
    var w = $(window).width();
    if(w > 510 && menu.is(':hidden')) {
        menu.removeAttr('style');
    }
    if(w > 510) {
    	$(".right").css({'float':'right'})
    }
}); 