$(document).ready(function () {
  if($(window).width()> 989){
    setEqualHeight('.donations-wrapper .donations .donation a');
  }

  $(".donations").slick({
    responsive: [
      {
        breakpoint: 99999,
        settings: "unslick"
      },
      {
        breakpoint: 1200,
        settings: {
          "autoplay": true,
          slidesToShow: 2,
          "arrows": false
        }
      },
      {
        breakpoint: 480,
        settings: {
          "autoplay": true,
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
  if($(window).width()> 989){
    setEqualHeight('.donations-wrapper .donations .donation a');
  }
});