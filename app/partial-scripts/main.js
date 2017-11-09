function setEqualHeight(selector) {
  var elements = $(selector);
  elements.css("height", "auto");
  var max = Number.NEGATIVE_INFINITY;
  $.each(elements, function (index, item) {
    if ($(item).outerHeight() > max) {
      max = $(item).outerHeight()
    }
  });
  $(selector).css("height", max + "px");

  $(window).resize(function () {
    setEqualHeight(selector)
  })
}

$(document).ready(function () {
  $("header .top-bar .search").click(function () {
    $(".search-wrapper").css({"top":"27px"});
  });
  $("header .top-bar .close-btn").click(function () {
    $(".search-wrapper").css({"top": "-50px"});
  });
});

$(window).bind("load", function () {
});

$(window).resize(function () {

});