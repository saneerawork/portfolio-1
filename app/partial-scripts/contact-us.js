$(document).ready(function () {
  if($(window).width()> 989){
    setEqualHeight('.parking-wrapper .parking-details-wrapper');
    setEqualHeight('.parking-wrapper .parking-details-wrapper ul');
  }
  if($(window).width()> 1200){
    setEqualHeight('.directions-wrapper .details-wrapper');
  }
});

$(window).bind("load", function () {
});

$(window).resize(function () {
  if($(window).width()> 989){
    setEqualHeight('.parking-wrapper .parking-details-wrapper');
    setEqualHeight('.parking-wrapper .parking-details-wrapper ul');
  }
  if($(window).width()> 1200){
    setEqualHeight('.directions-wrapper .details-wrapper');
  }
});