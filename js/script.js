
$(document).ready(function () {
    $("#hero-carousel").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        items: 1,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    });

    $("#news-carousel").owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        nav: true,
        items: 3,
        dots: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 3,
                nav: true,
            }
        }
    });
});