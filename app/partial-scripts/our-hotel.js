$(document).ready(function () {
  if($(window).width()> 989){
    setEqualHeight('.special-offers-wrapper .items-wrapper .item');
  }
});

$(window).bind("load", function () {
});

$(window).resize(function () {
  if($(window).width()> 989){
    setEqualHeight('.special-offers-wrapper .items-wrapper .item');
  }
});