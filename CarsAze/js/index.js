$(function () {
  // menu but
  var menuBut = $(".carsMenuBut");
  var menuCloseBut = $(".mobileCloseBut");
  var mobileMenu = $(".mobileMenu");

  menuBut.click(function () {
    mobileMenu.removeClass("mobileMenuNone");
  });
  menuCloseBut.click(function () {
    mobileMenu.addClass("mobileMenuNone");
  });

  //

  $(".mobileMenuListItem").click(function () {
    mobileMenu.addClass("mobileMenuNone");
  });

  // partners carousel
  if ($(".headCover").length > 0) {
    $(".headCover").owlCarousel({
      // rtl: true,
      loop: true,
      margin: 0,
      nav: false,
      dots: false,
      smartSpeed: 1500, //smooth effect
      autoplay: true, //smooth autoplay effect
      slideTransition: "linear",
      autoplayTimeout: 6000,
      autoplaySpeed: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
        1020: {
          items: 1,
        },
      },
    });
  }

  // partners carousel
  if ($(".partnersCover").length > 0) {
    $(".partnersCover").owlCarousel({
      rtl: true,
      loop: true,
      margin: 15,
      nav: false,
      dots: false,
      smartSpeed: 3000, //smooth effect
      autoplay: true, //smooth autoplay effect
      slideTransition: "linear",
      autoplayTimeout: 3000,
      autoplaySpeed: 1500,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 2,
        },
        768: {
          items: 3,
        },
        1020: {
          items: 4,
        },
      },
    });
  }

  // contact map
  if ($("#locationMap").length > 0) {
    function initMap(getId) {
      var location = { lat: 40.4004446, lng: 49.8712455 };
      var map = new google.maps.Map(document.getElementById(getId), {
        zoom: 16,
        center: location,
        zoomControl: true,
      });

      marker = new google.maps.Marker({
        map: map,
        position: location,
        animation: google.maps.Animation.DROP,
      });
    }

    initMap("locationMap");
    google.maps.event.addDomListener(window, "load", initMap);
  }
});

$(function () {
  var $slider = $(".slideshow .slider"),
    maxItems = $(".item", $slider).length,
    dragging = false,
    tracking,
    rightTracking;

  $sliderRight = $(".slideshow")
    .clone()
    .addClass("slideshow-right")
    .appendTo($(".split-slideshow"));

  rightItems = $(".item", $sliderRight).toArray();
  reverseItems = rightItems.reverse();
  $(".slider", $sliderRight).html("");
  for (i = 0; i < maxItems; i++) {
    $(reverseItems[i]).appendTo($(".slider", $sliderRight));
  }

  $slider.addClass("slideshow-left");
  $(".slideshow-left")
    .slick({
      vertical: true,
      verticalSwiping: true,
      arrows: false,
      infinite: true,
      dots: true,
      speed: 1000,
      cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    })
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
      if (
        currentSlide > nextSlide &&
        nextSlide == 0 &&
        currentSlide == maxItems - 1
      ) {
        $(".slideshow-right .slider").slick("slickGoTo", -1);
        $(".slideshow-text").slick("slickGoTo", maxItems);
      } else if (
        currentSlide < nextSlide &&
        currentSlide == 0 &&
        nextSlide == maxItems - 1
      ) {
        $(".slideshow-right .slider").slick("slickGoTo", maxItems);
        $(".slideshow-text").slick("slickGoTo", -1);
      } else {
        $(".slideshow-right .slider").slick(
          "slickGoTo",
          maxItems - 1 - nextSlide
        );
        $(".slideshow-text").slick("slickGoTo", nextSlide);
      }
    })
    .on("mousewheel", function (event) {
      event.preventDefault();
      if (event.deltaX > 0 || event.deltaY < 0) {
        $(this).slick("slickNext");
      } else if (event.deltaX < 0 || event.deltaY > 0) {
        $(this).slick("slickPrev");
      }
    })
    .on("mousedown touchstart", function () {
      dragging = true;
      tracking = $(".slick-track", $slider).css("transform");
      tracking = parseInt(tracking.split(",")[5]);
      rightTracking = $(".slideshow-right .slick-track").css("transform");
      rightTracking = parseInt(rightTracking.split(",")[5]);
    })
    .on("mousemove touchmove", function () {
      if (dragging) {
        newTracking = $(".slideshow-left .slick-track").css("transform");
        newTracking = parseInt(newTracking.split(",")[5]);
        diffTracking = newTracking - tracking;
        $(".slideshow-right .slick-track").css({
          transform:
            "matrix(1, 0, 0, 1, 0, " + (rightTracking - diffTracking) + ")",
        });
      }
    })
    .on("mouseleave touchend mouseup", function () {
      dragging = false;
    });

  $(".slideshow-right .slider").slick({
    swipe: false,
    vertical: true,
    arrows: false,
    infinite: true,
    speed: 950,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    initialSlide: maxItems - 1,
  });
  $(".slideshow-text").slick({
    swipe: false,
    vertical: true,
    arrows: false,
    infinite: true,
    speed: 900,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
  });
});
