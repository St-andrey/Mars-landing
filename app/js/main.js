
$(function () {
    $('.slider').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        dots: true,
        arrows: false,
        dotsClass: "my-dots",
    });
    
    $('.header-slider').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        dots: true,
        arrows: false,
        
        // dotsClass: "my-dots",
    });

    $('.header-top__burger-open').on('click', function () {
        // $('.intro-menu').addClass('intro-menu--active');
        $('.hidden-menu').animate({'left':'0'}, 1000);
        
    });
    $('.hidden-menu__burger-close').on('click', function(){
        // $('.intro-menu').removeClass('intro-menu--active');
        $('.hidden-menu').animate({'left':'-200%'}, 1000);
    });

    $('.intro-top__burger-open').on('click', function () {
        // $('.intro-menu').addClass('intro-menu--active');
        $('.intro-menu').animate({'left':'0'}, 1000);
        
    });
    $('.intro-menu__burger-close').on('click', function(){
        // $('.intro-menu').removeClass('intro-menu--active');
        $('.intro-menu').animate({'left':'-100%'}, 1000);
    });
});