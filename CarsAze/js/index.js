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
