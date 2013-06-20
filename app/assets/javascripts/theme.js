
$(function() {
	$("header .sticky-nav").sticky({topSpacing:0});
});

var CHAKRA = window.CHAKRA || {};

/* ==================================================
   Mobile Navigation
================================================== */
/* Clone Menu for use later */
var mobileMenuClone = $('#menu').clone().attr('id', 'navigation-mobile');

CHAKRA.mobileNav = function(){
  var windowWidth = $(window).width();

  // Show Menu or Hide the Menu
  if( windowWidth <= 979 ) {
    if( $('#mobile-nav').length > 0 ) {
      mobileMenuClone.insertAfter('#menu');
      $('#navigation-mobile #menu-nav').attr('id', 'menu-nav-mobile');
    }
  } else {
    $('#navigation-mobile').css('display', 'none');
    if ($('#mobile-nav').hasClass('open')) {
      $('#mobile-nav').removeClass('open');
    }
  }
};

// Call the Event for Menu
CHAKRA.listenerMenu = function(){
  $('#mobile-nav').on('click', function(e){
    $(this).toggleClass('open');

    $('#navigation-mobile').stop().slideToggle(350, 'easeOutExpo');

    e.preventDefault();
  });

  $('#menu-nav-mobile a').on('click', function(){
    $('#mobile-nav').removeClass('open');
    $('#navigation-mobile').slideUp(350, 'easeOutExpo');
  });
};

/* ==================================================
   Menu Highlight
================================================== */

CHAKRA.menu = function(){
  $('#menu-nav, #menu-nav-mobile').onePageNav({
    currentClass: 'current',
      changeHash: false,
      scrollSpeed: 750,
      scrollOffset: 30,
      scrollThreshold: 0.5,
    easing: 'easeOutExpo',
    filter: ':not(.external)'
  });
};

/* ==================================================
   Next Section
================================================== */

CHAKRA.goSection = function(){
  // $('#work').on('click', function(){
  //   $target = $($('#work').attr('href')).offset().top-30;

  //   $('body, html').animate({scrollTop : $target}, 750, 'easeOutExpo');
  //   return false;
  // });
  $('#nextsection, #hackreactor-logo').on('click', function(){
    $target = $($(this).attr('href')).offset().top-30;

    $('body, html').animate({scrollTop : $target}, 750, 'easeOutExpo');
    return false;
  });
};


/* ==================================================
   GoUp
================================================== */

CHAKRA.goUp = function(){
  $('#goUp').on('click', function(){
    $target = $($('#hackreactor-logo').attr('href')).offset().top-30;

    $('body, html').animate({scrollTop : $target}, 750, 'easeOutExpo');
    return false;
  });
};


/* ==================================================
  Scroll to Top
================================================== */

CHAKRA.scrollToTop = function(){
  var windowWidth = $(window).width(),
    didScroll = false;

  var $arrow = $('#back-to-top');

  $arrow.click(function(e) {
    $('body,html').animate({ scrollTop: "0" }, 750, 'easeOutExpo' );
    e.preventDefault();
  });

  $(window).scroll(function() {
    didScroll = true;
  });

  setInterval(function() {
    if( didScroll ) {
      didScroll = false;

      if( $(window).scrollTop() > 1000 ) {
        $arrow.css('display', 'block');
      } else {
        $arrow.css('display', 'none');
      }
    }
  }, 250);
};

/* ==================================================
   Thumbs / Social Effects
================================================== */

// Fix Hover on Touch Devices
CHAKRA.utils = function(){

  $('.item-thumbs').bind('touchstart', function(){
    $(".active").removeClass("active");
        $(this).addClass('active');
    });

};

/* ==================================================
   Accordion
================================================== */

CHAKRA.accordion = function(){
  var accordion_trigger = $('.accordion-heading.accordionize');

  accordion_trigger.delegate('.accordion-toggle','click', function(event){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
         $(this).addClass('inactive');
    }
    else{
        accordion_trigger.find('.active').addClass('inactive');
        accordion_trigger.find('.active').removeClass('active');
        $(this).removeClass('inactive');
        $(this).addClass('active');
     }
    event.preventDefault();
  });
};

/* ==================================================
   Toggle
================================================== */

CHAKRA.toggle = function(){
  var accordion_trigger_toggle = $('.accordion-heading.togglize');

  accordion_trigger_toggle.delegate('.accordion-toggle','click', function(event){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
         $(this).addClass('inactive');
    }
    else{
        $(this).removeClass('inactive');
        $(this).addClass('active');
     }
    event.preventDefault();
  });
};

/* ==================================================
   Tooltip
================================================== */

CHAKRA.toolTip = function(){
    $('a[data-toggle=tooltip]').tooltip();
};

/* ==================================================
  Init
================================================== */

$(function(){
  // Call placeholder.js to enable Placeholder Property for IE9
  Modernizr.load([
  {
    test: Modernizr.input.placeholder,
    nope: '_include/js/placeholder.js',
    complete : function() {
        if (!Modernizr.input.placeholder) {
            Placeholders.init({
            live: true,
            hideOnFocus: false,
            className: "yourClass",
            textColor: "#999"
            });
        }
    }
  }
  ]);

  // Preload the page with jPreLoader
  $('body').jpreLoader({
    splashID: "#jSplash",
    showSplash: true,
    showPercentage: true,
    autoClose: true
  });
  // CHAKRA.nav();
  CHAKRA.mobileNav();
  CHAKRA.listenerMenu();
  CHAKRA.menu();
  CHAKRA.goSection();
  CHAKRA.goUp();
  // CHAKRA.filter();
  // CHAKRA.fancyBox();
  // CHAKRA.contactForm();
  // CHAKRA.tweetFeed();
  CHAKRA.scrollToTop();
  CHAKRA.utils();
  CHAKRA.accordion();
  CHAKRA.toggle();
  // CHAKRA.toolTip();
  $target = $('#hackreactor-index').offset().top-30;
  $('body, html').animate({scrollTop : $target}, 750, 'easeOutExpo');
});

$(window).resize(function(){
  CHAKRA.mobileNav();
});
