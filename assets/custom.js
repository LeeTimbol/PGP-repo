console.log("hena");
setTimeout(function() {
    $(document).ready(function(){
        $('.mobile-slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: true,
            responsive: [
                {
                    breakpoint: 980,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        $('.mobile-slider').css('opacity', '1');
        $('.mobile-slider').css('transition', 'all 0.3s ease-in-out');
    });
}, 4000);
