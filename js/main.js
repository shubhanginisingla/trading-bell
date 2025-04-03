(function ($) {
  "use strict";

  // Preloader (if the #preloader div exists)
  $(window).on("load", function () {
    if ($("#preloader").length) {
      $("#preloader")
        .delay(100)
        .fadeOut("slow", function () {
          $(this).remove();
        });
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();


  //Toggle Menu
  $(".sign-in > a, .agent-que").click(function () {
    $(".login_nav_drop").toggleClass("d-block");
    $(".logout_menu").click(function () {
      $(".login_nav_drop").removeClass("d-block");
    });
  });

  //image slider for agent meeting
  $(".img-slider").owlCarousel({
    loop: true,
    margin: 1,
    nav: true,
    autoplay: true,             // Enable autoplay
      autoplayTimeout: 3000,      // Set autoplay delay
      autoplayHoverPause: true,   // Pause on hover
      animateOut: 'fadeOut',      // Use fadeOut animation
      animateIn: 'fadeIn',        // Use fadeIn animation
      smartSpeed: 450,  
    navText: [
      "<div class='nav-btn prev-slide'><img src='img/icon/arrow-left.svg' ></div>",
      "<div class='nav-btn next-slide'><img src='img/icon/arrow-right.svg' ></div>",
    ],
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  //blog-slider for agent meeting
  $(".blog-slider-three").owlCarousel({
    items: 3,  
    margin: 20,      
    loop: false,
    nav: true,
    autoplay: true,             // Enable autoplay
      autoplayTimeout: 3000,      // Set autoplay delay
      autoplayHoverPause: true,   // Pause on hover
      animateOut: 'fadeOut',      // Use fadeOut animation
      animateIn: 'fadeIn',        // Use fadeIn animation
      smartSpeed: 450,  
      navText: [
        "<div class='nav-btn prev-slide'><img src='img/icon/arrow-left.svg' ></div>",
        "<div class='nav-btn next-slide'><img src='img/icon/arrow-right.svg' ></div>",
      ],
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      991: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });
  //blog-slider for agent meeting
  $(".blog-slider-four").owlCarousel({
    items: 4,
    loop: false,
    margin: 20,
    stagePadding: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: true,
    dots: true,
      navText: [
        "<div class='nav-btn prev-slide'><img src='img/icon/arrow-left.svg' ></div>",
        "<div class='nav-btn next-slide'><img src='img/icon/arrow-right.svg' ></div>",
      ],
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      991: {
        items: 2,
      },
      1024: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });


  $(".stock-detail").owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    center: false,
    items: 4,
    stagePadding: 50,
    dots: false,
    navText: [
      "<i class='icon-left'><img src='./img/icon/arrow-left.svg' alt='' width='30px' height='30px' /></i>",
      "<i class='icon-right'><img src='./img/icon/arrow-right.svg' alt='' width='30px' height='30px' /></i>",
    ],
    responsive: {
      0: {
        items: 1,
        center: true,
      },
      575: {
        items: 1,
        center: true,
      },
      767: {
        items: 2,
       
      },
      991: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
  


  
  /* FOR NAV TOGGLES */
  $(".btn--filters-js").click(function () {
    $(this).toggleClass("is-active");
    $("html").toggleClass("show-filters-js");
  });
  $("body").click(function (e) {
    if ($(e.target).parents(".filter-cell").length == 0) {
      $(".filter-trigger-js").siblings(".filter-target-js").hide();
      $(".filter-trigger-js").removeClass("is-active");
      $("body").removeClass("filter-active");
    }
  });
})(jQuery);
