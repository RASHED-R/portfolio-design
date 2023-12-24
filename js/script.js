
$(document).ready(function () {
    $("#hero-carousel").owlCarousel({
        autoplayTimeout: 7000,
        video: true,
        loop: true,
        autoplay: true,
        items: 3,
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
        autoplay: true,
        margin: 10,
        items: 3,
        responsiveClass: true,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 3,

            }
        }
    });
    $("#social-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        responsiveClass: true,
        margin: 10,
        items: 3,
        dots: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 1,

            },
            1000: {
                items: 3,
            }
        }
    });
    $("#testimonial-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        responsiveClass: true,
        margin: 10,
        items: 3,
        dots: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 1,

            },
            1000: {
                items: 3,

            }
        }
    });
    $("#crest-carousel").owlCarousel({
        dots: false,
        items: 6,
        loop: true,
        autoplay: true,
        slideTransition: 'linear',
        // autoplayTimeout: 1000,
        autoplaySpeed: 5000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 2,

            },
            600: {
                items: 4,

            },
            1000: {
                items: 6,

            }
        }
    });
    $("#member-carousel").owlCarousel({
        items: 6,
        loop: true,
        margin: 20,
        autoplay: true,
        slideTransition: 'linear',
        // autoplayTimeout: 1000,
        autoplaySpeed: 5000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 2,

            },
            600: {
                items: 4,

            },
            1000: {
                items: 6,

            }
        }
    });
    $("#team-carousel").owlCarousel({
        loop: true,
        margin: 20,
        autoplay: false,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 2,

            },
            1000: {
                items: 4,

            }
        }
    });
    $("#reading-carousel").owlCarousel({
        items: 6,
        loop: true,
        margin: 20,
        autoplay: true,
        slideTransition: 'linear',
        // autoplayTimeout: 1000,
        autoplaySpeed: 5000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 2,

            },
            600: {
                items: 4,

            },
            1000: {
                items: 6,

            }
        }
    });
    $('.testimonial-carousel').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'zoomIn',
        loop: true,
        margin: 0,
        nav: false,
        smartSpeed: 300,
        autoplay: 7000,
        // navText: ['<span class="arrow-left"></span>', '<span class="arrow-right"></span>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            800: {
                items: 1
            },
            1024: {
                items: 1
            }
        }
    });
    $('#about-us-img-carousel').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'zoomIn',
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        smartSpeed: 300,
        autoplay: 7000,
        navText: ['<span class="arrow-left"></span>', '<span class="arrow-right"></span>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            800: {
                items: 1
            },
            1024: {
                items: 1
            }
        }
    });
});

document.querySelector(".navbar-nav").addEventListener('click', function () {
    const offcanvasEnd = document.querySelector('.offcanvas-end');
    const modalBackdrop = document.querySelector('.modal-backdrop');

    if (offcanvasEnd.classList.contains('show')) {
        offcanvasEnd.classList.remove('show')
    }
    if (modalBackdrop.classList.contains('show')) {
        modalBackdrop.classList.remove('show')
    }

});
