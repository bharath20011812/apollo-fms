// Initiate the wowjs
new WOW().init();

// counter section start
function animateCounter(element, target) {
  let count = 0;
  // Adjust speed based on screen size (faster on smaller screens)
  const screenSize = window.innerWidth;
  const speed = screenSize < 768 ? 100 : 200; // Faster on mobile

  const increment = target / speed;  // Adjust this value for smoother or faster counting

  const updateCounter = () => {
    count += increment;
    if (count >= target) {
      element.textContent = target;
    } else {
      element.textContent = Math.ceil(count);
      requestAnimationFrame(updateCounter);
    }
  };

  updateCounter();
}

// Wait until the DOM content is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
  const numbers = document.querySelectorAll('.number');

  numbers.forEach(number => {
    const target = +number.getAttribute('data-target');
    animateCounter(number, target);
  });
});


$(document).ready(function () {
  if ($(".customer-logos").length) {
    $(".customer-logos").slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    });
  }
});

$(".clients-carousel").owlCarousel({
  autoplay: true,
  loop: true,
  margin: 15,
  dots: false,
  slideTransition: "linear",
  autoplayTimeout: 3000,
  autoplayHoverPause: false,
  autoplaySpeed: 5000,
  navText: false,
  responsive: {
    0: {
      items: 2
    },
    500: {
      items: 3
    },
    1200: {
      items: 5
    }
  }
});


// JavaScript for tab switching
document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons and panels
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabPanels.forEach(panel => panel.classList.remove('active'));

      // Add active class to clicked button and corresponding panel
      button.classList.add('active');
      const targetPanel = document.getElementById(button.getAttribute('data-tab'));
      targetPanel.classList.add('active');
    });
  });
});



$(function () {
  $('.slider-casestudy').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: false,
    dots: true,
    navText: [
      '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      1200: {
        items: 2
      }
    }
  })


  $('.slider-blog').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: false,
    dots: true,
    navText: [
      '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      1200: {
        items: 2
      }
    }
  })



  /*** Timeline Carousel ***/
  $('.desktop-owl.timeline').owlCarousel({
    loop: false,
    pagination: true,
    paginationNumbers: false,
    nav: true,
    center: false,
    dots: false,
    margin: 10,
    navText: [
      '<i class="fa-solid fa-arrow-left"></i>',
      '<i class="fa-solid fa-arrow-right"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });


  $('.slider-1').owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
    nav: false,
    autoplay: false,
    dots: true,
    navText: false,

  })


  $('.service-tabslider').owlCarousel({
    loop: false,
    margin: 10,
    items: 4.5,
    nav: true,
    autoplay: false,
    dots: false,
    autoplayHoverPause: false,
    navText: [
      '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3.1
      },
      1200: {
        items: 4.1
      }
    }

  })


});



$('.viewmore-button').click(function () {
  $('.viewtext').slideToggle();
  if ($('.viewmore-button').text() == "Read less") {
    $(this).text("View Our Timeline")
  } else {
    $(this).text("Read less")
  }
});

$('.moreless-button').click(function () {
  $('.moretext').slideToggle();
  if ($('.moreless-button').text() == "Read less") {
    $(this).text("Read more")
  } else {
    $(this).text("Read less")
  }
});



$(window).scroll(function () {
  $(".anm_mod").each(function () {
    const position = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if (scroll > position - windowHeight) {
      $(this).addClass("active");
    }
    if (scroll < 100) {
      $(this).removeClass("active");
    }
  });
});

$(function () {
  $('a[href^="#"]').click(function () {
    const speed = 800;
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? "html" : href);
    const position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});


$(document).ready(function () {
  // Initialize Slider 1
  $('#slider1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '#slider2'
  });

  // Initialize Slider 2
  $('#slider2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '#slider1'
  });

  // Click event for thumbnails to control sliders
  $('.thumbnail').click(function () {
    var slideIndex = $(this).data('slide');
    $('#slider1').slick('slickGoTo', slideIndex);
    $('#slider2').slick('slickGoTo', slideIndex);

    // Remove active classes from all thumbnails, icons, and subheadings
    $('.thumbnail').removeClass('active');
    $('.icon').removeClass('active');
    $('.feature_sub_heading').removeClass('active_sub_heading');

    // Rotate main circle
    $('#main_circle').addClass('rotating');
    setTimeout(() => {
      $('#main_circle').removeClass('rotating');
    }, 1000);

    // Set active states for the clicked thumbnail, corresponding icon, and subheading
    $(this).addClass('active');
    $('.icon').eq(slideIndex).addClass('active');
    $('.feature_sub_heading').eq(slideIndex).addClass('active_sub_heading');
  });
});





