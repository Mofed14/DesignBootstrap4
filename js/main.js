$(function () {
   'user strict';
    var winH      = $(window).height(),
        upperH    = $('.upper-bar').innerHeight(),
        navH     = $('.navbar').innerHeight();
        featH     = $('.feature').innerHeight();
    
    $('.slider, .carousel-item').height((winH+featH) - (upperH + navH))


    // feature work shuffle

    $('.featured-work ul li').on('click', function () {
        
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).data('class')==='all'){
            $('.shuffle-imgs .col-md').css('opacity',1)
        } else {
            $('.shuffle-imgs .col-md').css('opacity','.08')
            $($(this).data('class')).parent().css('opacity',1)
            //  $(this).data('class') العنصر المرتبط بيه او اسم الكيلاس المرتبط بيه
        }
        
    });
    
});