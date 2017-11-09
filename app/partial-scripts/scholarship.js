$(document).ready(function () {
  $('.scholarship-wrapper a[href="#faq"]').click(function () {
    $('.scholarship-wrapper .nav-tabs li').removeClass("active");
  });

  $('.scholarship-wrapper .faq-wrapper .panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.scholarship-wrapper .faq-wrapper .panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });
});

$(window).bind("load", function () {
});

$(window).resize(function () {

});