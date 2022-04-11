// navbar navigation button
var navBut = document.getElementById("nav-but");
var menu = document.querySelector(".nav-list");
navBut.addEventListener("click", function () {
  navBut.classList.toggle("active-nav-but");
  menu.classList.toggle("active-nav-list");
})

// navbar bg col
var nav = $("#Navbar");
window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if (scroll > 0) {
    nav.css("background", "#111");

  } else {
    nav.css("background", "transparent");
  }
});

// owl-carousel
const nextIcon = '<img src="assets/css/icons/next.png" alt="next">';
const prevIcon = '<img src="assets/css/icons/prev.png" alt="prev">';
$('.metro-slider').owlCarousel({
  rtl: true,
  loop: true,
  margin: 36,
  nav: true,
  navText: [
    nextIcon,
    prevIcon
  ],
  autoplay: true,
  dots: false,
  responsive: {
    0: {
      items: 1
    }
  }
})


$(".brand_carousel").owlCarousel({
  items: 6,
  nav: false,
  loop: true,
  dots: false,
  mouseDrag: true,
  responsiveClass: true,

  responsive: {
    0: {
      items: 2,
    },
    575: {
      items: 3,
    },
    767: {
      items: 4,
    },
    992: {
      items: 6,
    }
  },
});

// project-product-filter
// filter

$(".galery-list-item").click(function () {
  // add remove active class
  $(this).addClass("active").siblings().removeClass("active");
  // filter galery parametr
  const value = $(this).attr("data-filter");

  if (value == "all-work") {
    $(".all-work").show("1000");
  }
  else {
    $(".all-work").filter("." + value).show("1000");

    $(".all-work").not("." + value).hide("1000");

  }
})

// loading
$(window).on("load", function () {
  $(".loading").fadeOut(700);

})