(function ($) {
    "use strict";


    $(window).on('load', function () {
        // ------- Prealoder ------
        $("#preloader").delay(300).fadeOut("slow");
    });

    $(document).ready(function () {


        // hamburger
        $('.hamburger').click(() => {
            $('.hamburger').toggleClass('active');
            $('.header_right').toggleClass('active');
        });

        // Sub Menu Toggle
        $('.submenu_wrap').click(function () {
            $('.submenu_wrap').not(this).removeClass('active');
            $(this).toggleClass('active');
        });


        // Sub Menu Toggle
        $('.checkbox').click(function () {
            $(this).toggleClass('checked');
        });

        $('.sponsor_slider').owlCarousel({
            rtl: false,
            navText: ['<img src="./img/arrow_left.svg" alt="arrow_left">', '<img src="./img/arrow_right.svg" alt="arrow_right">'],
            dots: false,
            items: 5,
            loop: true,
            autoplay: false,
            autoplayTimeout: 3000,
            autoplayHoverPause: true, // Pause on hover
            responsive: {
                0: {
                    items: 2 // Number of items to show on small screens
                },
                767: {
                    items: 3, // Number of items to show on screens larger than 600px
                },
                1000: {
                    items: 5, // Number of items to show on screens larger than 1000px
                }
            }
        });


        // testimonial_slider
        $('.testimonial_slider').owlCarousel({
            rtl: false,
            navText: ['<img src="./img/slide_arrow_right.svg" alt="arrow_left">', '<img src="./img/slide_arrow_left.svg" alt="arrow_right">'],
            dots: true,
            items: 1,
            loop: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true, // Pause on hover
        });


        // Back To Top
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').addClass("topbtn_hide");
            } else {
                $('.back-to-top').removeClass("topbtn_hide");
            }
        });
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0,
            }, 1500);
        });


        // Aos js 
        AOS.init({
            duration: 800,
            once: true,
            easing: "ease",
        });


        // Owl Syncing
        var sync1 = $('#sync1'),
            sync2 = $('#sync2'),
            duration = 300,
            thumbs = 4;

        // Sync nav
        sync1.on('changed.owl.carousel', function (e) {
            if (!e.namespace || e.property.name !== 'position') return;
            sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
        });

        // Start Carousel
        sync1.owlCarousel({
            loop: false,
            items: 1,
            margin: 0,
            smartSpeed: 700,
            lazyLoad: true,
            autoplay: false,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            nav: true,
            animateIn: 'flipInX',
            dots: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        });

        sync2.owlCarousel({
            loop: false,
            items: thumbs,
            margin: 2,
            smartSpeed: 700,
            nav: false,
            animateOut: 'fade-in', // Use fadeOut for animation
            slideSpeed: 500,
            autoPlay: false,
            touchDrag: false,
            mouseDrag: false,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                }
            }
        });

        // Disable mouse drag and touch events on sync2
        sync2.on('drag.owl.carousel', function (e) {
            e.preventDefault();
        }).on('touchmove.owl.carousel', function (e) {
            e.preventDefault();
        });

        // Click event on sync2 items
        sync2.on('click', '.owl-item', function () {
            var i = $(this).index() - (thumbs + 1);
            sync2.trigger('to.owl.carousel', [i, duration, true]);
            sync1.trigger('to.owl.carousel', [i, duration, true]);
        });

    });

})(jQuery);