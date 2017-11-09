$(document).ready(function () {
  $('.reciprocal-clubs-wrapper .faq-wrapper .panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.reciprocal-clubs-wrapper .faq-wrapper .panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });

  if($(window).width()> 1200){
    setEqualHeight('.reciprocal-clubs-wrapper .club');
  }

});

$(window).bind("load", function () {
});

$(window).resize(function () {
  if($(window).width()> 1200){
    setEqualHeight('.reciprocal-clubs-wrapper .club');
  }
});