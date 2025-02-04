/*global $, jQuery, alert*/
$(document).ready(function() {

  // 'use strict';
  // $("#main-nav, #main-nav-subpage").slideDown(0);
  // $("#main-nav-subpage").removeClass('subpage-nav'); 



  // ========================================================================= //
  //  //SMOOTH SCROLL
  // ========================================================================= //


  // $(document).on("scroll", onScroll); 
         // *******NOTE: commenting the above line helped fix: syntax error: unrecognized expression****

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function() {
      $(this).removeClass('active');
      if ($(window).width() < 768) {
        $('.nav-menu').slideUp();
      }
    });

    $(this).addClass('active');

    var target = this.hash,
        menu = target;

    target = $(target);
    $('html, body').stop().animate({
      'scrollTop': target.offset().top - 80
    }, 500, 'swing', function() {
      window.location.hash = target.selector;
      $(document).on("scroll", onScroll);
    });
  });


  function onScroll(event) {
    if ($('.home').length) {
      var scrollPos = $(document).scrollTop();
      $('nav ul li a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
      });
    }
  }

  // ========================================================================= //
  //  //NAVBAR SHOW - HIDE
  // ========================================================================= //


$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 100 ) {
      $("#main-nav, #main-nav-subpage").slideDown(700);
      $("#main-nav-subpage").removeClass('subpage-nav');
      $("#main-nav").addClass('after-scroll');
      $("#main-nav").removeClass('before-scroll');
    } else {
      // $("#main-nav").slideUp(700);
      // $("#main-nav-subpage").hide();
      // $("#main-nav-subpage").addClass('subpage-nav');
      $("#main-nav").addClass('before-scroll');
      $("#main-nav").removeClass('after-scroll');
    }
  });



  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //

  $('.responsive').on('click', function(e) {
    $('.nav-menu').slideToggle();
  });

  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["Emma Reid.", "a UX Designer."],
      typeSpeed: 100,
      loop: true,
    });
  });


  // var magnifPopup = function() {
  //   $('.popup-img').magnificPopup({
  //     type: 'image',
  //     removalDelay: 300,
  //     mainClass: 'mfp-with-zoom',
  //     gallery: {
  //       enabled: true
  //     },
  //     zoom: {
  //       enabled: true, // By default it's false, so don't forget to enable it

  //       duration: 300, // duration of the effect, in milliseconds
  //       easing: 'ease-in-out', // CSS transition easing function

  //       // The "opener" function should return the element from which popup will be zoomed in
  //       // and to which popup will be scaled down
  //       // By defailt it looks for an image tag:
  //       opener: function(openerElement) {
  //         // openerElement is the element on which popup was initialized, in this case its <a> tag
  //         // you don't need to add "opener" option if this code matches your needs, it's defailt one.
  //         return openerElement.is('img') ? openerElement : openerElement.find('img');
  //       }
  //     }
  //   });
  // };


  // Call the functions
  // magnifPopup();

});



// ========================================================================= //
//  Scroll to Top on Click
// ========================================================================= //
// 
$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 100) {
      $('#back').fadeIn();
  } else {
      $('#back').fadeOut();
  }
});
$(document).ready(function() {
  $("#back").click(function(event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
  });

});
