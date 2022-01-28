$(window).scroll(function(){
    if ( $(this).scrollTop() > 100) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    };
});

$(window).scroll(function() {
    let st = $(this).scrollTop();

    $(".banner__h1").css({
        "transform" : "translate(0px, -" + st/5 + "px"
    });
});

$(function(){
    $('.header__navbar a').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false; 
    }); 
});
$(function(){
    $('.banner__down').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
    }); 
});
