
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

        // dotsClass: "my-dots",
    });

    $('.header-top__burger-open').on('click', function () {
        // $('.intro-menu').addClass('intro-menu--active');
        $('.hidden-menu').animate({ 'left': '0' }, 1000);

    });
    $('.hidden-menu__burger-close').on('click', function () {
        // $('.intro-menu').removeClass('intro-menu--active');
        $('.hidden-menu').animate({ 'left': '-200%' }, 1000);
    });

    $('.intro-top__burger-open').on('click', function () {
        // $('.intro-menu').addClass('intro-menu--active');
        $('.intro-menu').animate({ 'left': '0' }, 1000);

    });
    $('.intro-menu__burger-close').on('click', function () {
        // $('.intro-menu').removeClass('intro-menu--active');
        $('.intro-menu').animate({ 'left': '-100%' }, 1000);
    });

    //==============================================
    //ScrollMagic


    // init SMagic
    var controller = new ScrollMagic.Controller();

    // header SC effects

    
    // /header SC effects
    var journeytl = gsap.timeline()
    journeytl
        .fromTo('.journey-content', 0.6, { opacity: 0, scale: 0.1}, { opacity: 1, scale: 1})
        .fromTo('.journey-parallax-decor--top', 2, { yPercent: -10, xPercent: 20, scale: 2 }, { yPercent: -90, xPercent: 25, scale: 2.3 })
        .fromTo('.journey-parallax-decor--bottom', 2, { yPercent: -10, xPercent: 0 , scale: 1.2}, { yPercent: -200, xPercent: 0, scale: 1.8 }, '<')

    var parallaxScene = new ScrollMagic.Scene({
        triggerElement: '.flying-text__button',
        triggerHook: 0.5,
        duration: '100%'
    })
        .addIndicators({
            name: 'parallax scene',
            colorTrigger: 'blue',
            colorStart: 'green',
            colorEnd: 'yellow',
            indent: 5
        })

        .setTween(journeytl)
        .addTo(controller);

    //loop through each section element
    $('.scene').each(function () {

        var sectionFadeIn = new ScrollMagic.Scene({

            triggerElement: this,
            triggerHook: 0.9
        })
            .setClassToggle(this, 'fade-in')
            .addIndicators({
                name: 'fade-in scene',
                colorTrigger: 'red',
                colorStart: 'orange',
                colorEnd: 'lime',

            })
            .addTo(controller);

    })

    // var journeyParallax = new ScrollMagic.Scene({
    //     triggerElement: '.journey-parallax-bg',
    //     triggerHook: 1,
    //     duration: '200%'
    // })

    // gsap.from('.journey-parallax-bg', { y: '-50%', ease: Power0.easeNone })
    // // gsap.to('.journey-parallax-decor--top-left', {x: 200})
    // // gsap.to('.journey-parallax-decor--bottom-center', { y: '-50%' })
    // // gsap.to('.journey-parallax-decor--bottom-right', { y: '-50%' })
    // addTo(controller);




});