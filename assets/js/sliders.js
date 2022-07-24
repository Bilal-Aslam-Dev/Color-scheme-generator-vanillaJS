$(document).ready(function () {
    $('.related-pro-slick').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        margin: 20,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        prevArrow: false,
        nextArrow: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });
});