(function ($) {

  "use strict";

  $(window).on('load', function () {

    /*Page Loader active
    ========================================================*/
    $('#preloader').fadeOut();

    // Sticky Nav
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 50) {
        $('.scrolling-navbar').addClass('top-nav-collapse');
      } else {
        $('.scrolling-navbar').removeClass('top-nav-collapse');
      }
    });

    // one page navigation 
    $('.navbar-nav').onePageNav({
      currentClass: 'active'
    });

    /* Auto Close Responsive Navbar on Click
    ========================================================*/
    function close_toggle() {
      if ($(window).width() <= 768) {
        $('.navbar-collapse a').on('click', function () {
          $('.navbar-collapse').collapse('hide');
        });
      }
      else {
        $('.navbar .navbar-inverse a').off('click');
      }
    }
    close_toggle();
    $(window).resize(close_toggle);

    /* WOW Scroll Spy
    ========================================================*/
    var wow = new WOW({
      //disabled for mobile
      mobile: false
    });

    wow.init();

    /* Testimonials Carousel 
   ========================================================*/
    var owl = $("#testimonials");
    owl.owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      center: true,
      margin: 15,
      slideSpeed: 1000,
      stopOnHover: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsiveClass: true,
      responsiveRefreshRate: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        960: {
          items: 3
        },
        1200: {
          items: 3
        },
        1920: {
          items: 3
        }
      }
    });


    /* Testimonials Carousel 
========================================================*/
    var owl1 = $("#videos1");
    var owl2 = $("#videos2");
    var owl3 = $("#videos3");
    var options = {
      loop: true,
      nav: true,
      dots: false,
      center: true,
      margin: 15,
      slideSpeed: 1000,
      stopOnHover: true,
      autoPlay: true,
      responsiveClass: true,
      responsiveRefreshRate: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        960: {
          items: 3
        },
        1200: {
          items: 3
        },
        1920: {
          items: 3
        }
      }
    }
    owl1.owlCarousel(options);
    owl2.owlCarousel(options);
    owl3.owlCarousel(options);


    /* Back Top Link active
    ========================================================*/
    var offset = 200;
    var duration = 500;
    $(window).scroll(function () {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });

    $('.back-to-top').on('click', function (event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    });

  });


  $(document).ready(function () {

    $('#islamabad_office').on('click', function () {
      $('#mtitle').text('Islamabad Regional Offices');
      $('#islamabad_region').removeClass('d-none');
      $('#punjab_region').addClass('d-none');
      $('#sindh_region').addClass('d-none');
      $('#KP_region').addClass('d-none');
      $('#Balochistan_region').addClass('d-none');

      $('#regionModal').modal('show');
    });
    $('#lahore_office').on('click', function () {
      $('#mtitle').text('Punjab Regional Offices');
      $('#islamabad_region').addClass('d-none');
      $('#punjab_region').removeClass('d-none');
      $('#sindh_region').addClass('d-none');
      $('#KP_region').addClass('d-none');
      $('#Balochistan_region').addClass('d-none');
      $('#regionModal').modal('show');
    });
    $('#karachi_office').on('click', function () {
      $('#mtitle').text('Sindh Regional Offices');
      $('#islamabad_region').addClass('d-none');
      $('#punjab_region').addClass('d-none');
      $('#sindh_region').removeClass('d-none');
      $('#KP_region').addClass('d-none');
      $('#Balochistan_region').addClass('d-none');
      $('#regionModal').modal('show');
    });

    $('#KP_office').on('click', function () {
      $('#mtitle').text('Sindh Regional Offices');
      $('#islamabad_region').addClass('d-none');
      $('#punjab_region').addClass('d-none');
      $('#sindh_region').removeClass('d-none');
      $('#KP_region').addClass('d-none');
      $('#Balochistan_region').addClass('d-none');
      $('#regionModal').modal('show');
    });

    $('#Balochistan_office').on('click', function () {
      $('#mtitle').text('Sindh Regional Offices');
      $('#islamabad_region').addClass('d-none');
      $('#punjab_region').addClass('d-none');
      $('#sindh_region').removeClass('d-none');
      $('#KP_region').addClass('d-none');
      $('#Balochistan_region').addClass('d-none');
      $('#regionModal').modal('show');
    });
  });

}(jQuery));