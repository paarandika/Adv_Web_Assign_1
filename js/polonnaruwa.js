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

setVisited=function (place){
    if (localStorage.getItem(place)==null){
        $('#'+place).show();
        localStorage.setItem(place, 1);
    }else {
        $('#'+place).hide();
        localStorage.removeItem(place);
        }
        
}

checkVisited= function () {
    setTimeout(
        function() 
        {
            if (localStorage.getItem('gal_vihara')!=null){
                $('#gal_vihara').show();
            }
            if (localStorage.getItem('latha_mandapaya')!=null){
                $('#latha_mandapaya').show();
            }
            if (localStorage.getItem('lankathilaka_temple')!=null){
                $('#lankathilaka_temple').show();
            }
            if (localStorage.getItem('satmahal_prasada')!=null){
                $('#satmahal_prasada').show();
            }
            if (localStorage.getItem('vatadage')!=null){
                $('#vatadage').show();
            }
            if (localStorage.getItem('royal_palace')!=null){
                $('#royal_palace').show();
            }
            if (localStorage.getItem('thuparama_gedige')!=null){
                $('#thuparama_gedige').show();
            }

        },2500);
}