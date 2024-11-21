$(document).ready(function () {
  $(".news-details-carousel").slick({
    //  slidesToShow: 1.5,
    //  slidesToScroll: 1,
    //  autoplay: true,
    //  speed: 500,
    //  centerMode: false,
    //  autoplaySpeed: 2000,
    //  dots: false,
    //  arrows: true,
    //  initialSlide: 0,
    //  prevArrow: $(".categories-prev"),
    //  nextArrow: $(".categories-next"),
    slidesToShow: 3.5, // Show 1.5 slides at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Enable autoplay
    speed: 500, // Transition speed
    autoplaySpeed: 2000, // Delay between transitions
    centerMode: false, // Keep alignment to the left
    dots: false, // Disable dots navigation
    arrows: false, // Enable arrows
    initialSlide: 0, // Start from the first slide
    //   variableWidth: true, // Enable variable width for fractional slides
    infinite: true,
    rtl: true,
    padding: 10,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
