$(document).ready(function () {
  // menu but
  var menuBut = $(".shMenuBut");
  var menuCloseBut = $(".mobileCloseBut");
  var mobileMenu = $(".mobileMenu");

  menuBut.click(function () {
    mobileMenu.removeClass("mobileMenuNone");
  });

  menuCloseBut.click(function () {
    mobileMenu.addClass("mobileMenuNone");
  });

  //

  // $(".mobileMenuListItem").click(function () {
  //   mobileMenu.addClass("mobileMenuNone");
  // });

  // mobile menu accordion

  $(".mobileMenuListItemDrop .dropArrow").click(function () {
    $(".dropArrow").removeClass("active");
    $(".mobileMenuListItemDrop  ul").slideUp();
    if (!$(this).next().is(":visible")) {
      $(this).next().slideDown();
      $(this).addClass("active");
    }
  });

  //  mobile select lang
  var cdrop = $(".cdrop");

  $(".flaqLangItem").on("click", function updateCountry() {
    cdrop.html($(this).html());
    $(".hovcard").removeClass("hovcard-active");
  });

  cdrop.click(function () {
    $(".hovcard").toggleClass("hovcard-active");
  });
});
