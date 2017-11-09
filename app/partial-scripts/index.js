$(document).ready(function () {
  $(".banner-slider").slick({
    "arrows": false,
    "dots": true,
    "autoplay": true,
    fade: true
  });

  $(".links-wrapper-slider").slick({
    "arrows": false,
    "dots": false,
    "autoplay": true,
    slidesToShow: 5,
    slidesToScroll: 1,
    margin: "0 10px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $(".video-img-slider").slick({
    "arrows": false,
    "dots": false,
    "autoplay": true,
    slidesToShow: 2,
    slidesToScroll: 1
  });

  $(".video-img-mobile-slider").slick({
    "arrows": false,
    "dots": false,
    "autoplay": true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $(".best-hotel-slider").slick({
    "dots": false,
    "autoplay": true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          "arrows": false
        }
      },
      {
        breakpoint: 480,
        settings: {
          "arrows": false
        }
      }
    ]
  });


  $(".upcoming-events-section .common-img-slider").slick({
    "dots": false,
    "autoplay": true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          "arrows": false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          "arrows": false
        }
      }
    ]
  });

  $(".testimony-section .common-img-slider").slick({
    "dots": false,
    "autoplay": true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          "arrows": false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          "arrows": false
        }
      }
    ]
  });

});

$(window).bind("load", function () {

});

$(window).resize(function () {

});