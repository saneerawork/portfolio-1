(function($){
  jQuery.fn.dropdowns = function (options) {

    var defaults = {
      toggleWidth: 993
    };

    var options = jQuery.extend(defaults, options);

    var ww = document.body.clientWidth;

    var addParents = function() {
      jQuery("header .nav li a").each(function() {
        if (jQuery(this).next().length > 0) {
          jQuery(this).addClass("parent");
        }
      });
    };

    var adjustMenu = function() {
      if (ww < options.toggleWidth) {
        jQuery("header .toggleMenu").css("display", "inline-block");
        if (!jQuery("header .toggleMenu").hasClass("active")) {
          jQuery("header .nav").hide();
        } else {
          jQuery("header .nav").show();
        }
        jQuery("header .nav li").unbind('mouseenter mouseleave');
        jQuery("header .nav li a.parent .caret").unbind('click').bind('click', function(e) {
          // must be attached to anchor element to prevent bubbling
          e.preventDefault();
          jQuery(this).parent("a.parent").parent("li").toggleClass("hover");
          jQuery(this).parent("a.parent").parent("li").siblings().removeClass("hover");
        });
      }
      else if (ww >= options.toggleWidth) {
        jQuery("header .toggleMenu").css("display", "none");
        jQuery("header .nav").show();
        jQuery("header .nav li").removeClass("hover");
        jQuery("header .nav li a").unbind('click');
        jQuery("header .nav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
          // must be attached to li so that mouseleave is not triggered when hover over submenu
          jQuery(this).toggleClass('hover');
        });
      }
    };

    return this.each(function() {
      jQuery("header .toggleMenu").click(function(e) {
        e.preventDefault();
        jQuery('body').toggleClass("mobile-menu-open");
        jQuery(this).toggleClass("active");
        jQuery(this).next(".nav").toggle();
        adjustMenu();
      });
      adjustMenu();
      addParents();
      jQuery(window).bind('resize orientationchange', function() {
        ww = document.body.clientWidth;
        adjustMenu();
      });
    });

  }
})(jQuery);

jQuery("header .dropdowns").dropdowns();