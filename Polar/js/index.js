$(window).on("load", function () {
  setTimeout(function () {
    $(".polarloader").addClass("polarLoaderNone");
  }, 1000);
});

$(function () {
  //  mobile select lang
  var cdrop = $(".cdrop");

  $(".flaqLangItem").on("click", function updateCountry() {
    cdrop.html($(this).html());
    $(".hovcard").removeClass("hovcard-active");
  });

  cdrop.click(function () {
    $(".hovcard").toggleClass("hovcard-active");
  });

  // menu but
  var menuBut = $(".polarMenuBut");
  var menuCloseBut = $(".mobileCloseBut");
  var mobileMenu = $(".mobileMenu");

  menuBut.click(function () {
    mobileMenu.removeClass("mobileMenuNone");
  });
  menuCloseBut.click(function () {
    mobileMenu.addClass("mobileMenuNone");
  });

  // search
  var polarHeaderSearch = $(".polarHeaderSearch");
  var closeSearch = $(".closeSearch");
  var searchBlock = $(".searchBlock");

  polarHeaderSearch.click(function (e) {
    e.stopPropagation();
    searchBlock.removeClass("searchBlockNone");
  });

  closeSearch.click(function () {
    searchBlock.addClass("searchBlockNone");
  });

  searchBlock.click(function (e) {
    e.stopPropagation();
  });

  $("body").click(function () {
    searchBlock.addClass("searchBlockNone");
  });

  const chevronLeft =
    '<svg width="18" height="34" viewBox="0 0 18 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6947 33.7146C17.5148 33.8959 17.2701 33.9985 17.0142 34C16.7578 34.0023 16.5114 33.8992 16.3336 33.7146L0.284626 17.6906C0.102551 17.5112 0 17.2666 0 17.0112C0 16.7557 0.102551 16.5111 0.284626 16.3317L16.3336 0.304682C16.5119 0.114366 16.7599 0.00439468 17.0209 0.000129315C17.282 -0.00413678 17.5334 0.0973045 17.7181 0.281692C17.9025 0.465849 18.0044 0.717076 17.9999 0.97756C17.9956 1.23803 17.8854 1.4857 17.6948 1.66372L2.32648 17.0112L17.6948 32.355C17.8762 32.5349 17.978 32.7795 17.978 33.0347C17.978 33.2897 17.8762 33.5343 17.6948 33.7142L17.6947 33.7146Z" fill="black"/></svg>';
  const chevronRight =
    '<svg width="18" height="34" viewBox="0 0 18 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.305256 33.7146C0.485193 33.8959 0.729941 33.9985 0.985829 34C1.24221 34.0023 1.48861 33.8992 1.6664 33.7146L17.7154 17.6906C17.8974 17.5112 18 17.2666 18 17.0112C18 16.7557 17.8974 16.5111 17.7154 16.3317L1.6664 0.304682C1.48812 0.114366 1.24006 0.00439468 0.979144 0.000129315C0.718018 -0.00413678 0.466627 0.0973045 0.28192 0.281692C0.0974683 0.465849 -0.00436557 0.717076 0.000143627 0.97756C0.00441661 1.23803 0.114563 1.4857 0.305183 1.66372L15.6735 17.0112L0.305183 32.355C0.123818 32.5349 0.0219785 32.7795 0.0219785 33.0347C0.0219785 33.2897 0.123818 33.5343 0.305183 33.7142L0.305256 33.7146Z" fill="black"/></svg>';

  //featured
  if ($(".featuredCover").length > 0) {
    $(".featuredCover").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      navText: [chevronLeft, chevronRight],
      dots: false,
      smartSpeed: 1000, //smooth effect
      autoplay: true, //smooth autoplay effect
      slideTransition: "linear",
      autoplayTimeout: 3000,
      autoplaySpeed: 1200,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1020: {
          items: 3,
        },
      },
    });
  }

  // polar video carousel
  if ($(".polarVideoCover").length > 0) {
    $(".polarVideoCover").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      navText: [chevronLeft, chevronRight],
      dots: false,
      smartSpeed: 2000, //smooth effect
      autoplay: true, //smooth autoplay effect
      slideTransition: "linear",
      autoplayTimeout: 4000,
      autoplaySpeed: 1500,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1020: {
          items: 3,
        },
      },
    });
  }

  // Polar video popup

  if ($(".polarVideoPlay").length > 0) {
    $(".polarVideoPlay").magnificPopup({
      type: "iframe",
      iframe: {
        markup:
          '<div class="mfp-iframe-scaler">' +
          '<div class="mfp-close"></div>' +
          '<iframe class="mfp-iframe" frameborder="0" allowfullscreen sandbox="allow-scripts allow-same-origin"></iframe>' +
          "</div>",

        patterns: {
          youtube: {
            index: "youtube.com/",
            id: "v=",
            src: "https://www.youtube.com/embed/%id%?autoplay=1",
          },
          vimeo: {
            index: "vimeo.com/",
            id: "/",
            src: "//player.vimeo.com/video/%id%?autoplay=1",
          },
          gmaps: {
            index: "//maps.google.",
            src: "%id%&output=embed",
          },
        },

        srcAction: "iframe_src",
      },
      // other options
    });
  }

  // suggestion popup img

  if ($(".suggestionPopupImg").length > 0) {
    $(".suggestionPopupImg").magnificPopup({
      type: "image",
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
          items: 4,
        },
        1020: {
          items: 6,
        },
      },
    });
  }

  if ($(".certificateSwiper").length > 0) {
    var certificateSwiper = new Swiper(".certificateSwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: -8,
        stretch: 20,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
    });

    certificateSwiper.slideTo(2, false, false);
  }

  // about slide popup
  if ($(".polarAboutCertificateLink").length > 0) {
    $(".polarAboutCertificateLink").magnificPopup({
      type: "image",
    });
  }

  //  products

  let filterProductBut = $("#filterProductBut");
  let productsBodyType = $(".productsBodyType");
  filterProductBut.click(function () {
    productsBodyType.toggleClass("productsBodyTypeNone");
  });
  productsBodyType.click((e) => {
    e.stopPropagation();
  });
  $("html").click(function () {
    productsBodyType.addClass("productsBodyTypeNone");
  });

  // products vs product send value
  var polarCardAddButton = $(".polarCardAddButton");

  polarCardAddButton.click(function () {
    let $thisMain = $(this).parents(".polarCard");

    let $thisId = $thisMain.attr("polar-id");
    let $thisImg = $thisMain.find("img").attr("src");
    let $thisFullName = $thisMain
      .find(".polarCardContentTopNameFirst")
      .html()
      .trim();

    let $thisPrice = $thisMain.find(".polarCardContentTopPriceCount").text();
    let $thisStorageCount = $thisMain.find(".polarCardStorageCount").text();
    const myProducts = {
      cartId: $thisId,
      cartName: $thisFullName,
      cartSrc: $thisImg,
      cartPrice: $thisPrice,
      cartStorageCount: $thisStorageCount,
    };
    window.localStorage.setItem("myProducts", JSON.stringify(myProducts));
  });

  // product set data
  var myProductsData = JSON.parse(window.localStorage.getItem("myProducts"));

  var polarProduct = $("#product");
  if (polarProduct.length > 0) {
    polarProduct.find(".productName").text(myProductsData.cartName);
    polarProduct.find(".productImg").attr("src", myProductsData.cartSrc);
    polarProduct
      .find(".productRightFouterUpPriceCount")
      .text(myProductsData.cartPrice);
    polarProduct
      .find(".productCountStorage")
      .text(myProductsData.cartStorageCount);
  }
  // color select

  $.fn.colorSelect = function () {
    function build($select) {
      var html = "";
      var listItems = "";

      $select.find("option").each(function () {
        listItems +=
          "" +
          "<li>" +
          '<span class="dataColorV" style="background:' +
          this.value +
          '" data-colorVal="' +
          this.value +
          '">' +
          "</span>" +
          "<span class='dataColorText'>" +
          this.text +
          "</span>" +
          "</li>";
      });

      html =
        "" +
        '<div class="color-select">' +
        "<span>select one</span>" +
        "<img class='arrowVektorDown' src='img/arrowVektorDown.png'>" +
        "<ul class='colorList'>" +
        listItems +
        "</ul>" +
        "</div>";

      return html;
    }

    this.each(function () {
      var $this = $(this);

      $this.hide();

      $this.after(build($this));
    });
  };

  var openCloseSelect = false;

  $(document).on("click", "body", function () {
    $(".colorList").hide();
    if (openCloseSelect == true) {
      $(".color-select")
        .find(".arrowVektorDown")
        .toggleClass("arrowVektorDownUp");
      openCloseSelect = false;
    }
  });

  $(document).on("click", ".colorList", function (e) {
    openCloseSelect = false;
    e.stopPropagation();
  });

  $(document)
    .on("click", ".color-select > span", function (e) {
      e.stopPropagation();
      $(this).siblings("ul").toggle();
      if (openCloseSelect == false) {
        $(this)
          .parents(".color-select")
          .find(".arrowVektorDown")
          .toggleClass("arrowVektorDownUp");
        openCloseSelect = true;
      }
    })
    .on("click", ".color-select li", function () {
      if (openCloseSelect == true) {
        $(this)
          .parents(".color-select")
          .find(".arrowVektorDown")
          .removeClass("arrowVektorDownUp");
        openCloseSelect = false;
      }

      var $this = $(this);
      var color = $this.find(".dataColorV").attr("data-colorVal");
      var colorText = $this.find(".dataColorText").text();
      var $value = $this.parents(".color-select").find("span:first");
      var $select = $this.parents(".color-select").prev("select");

      $value.text("");

      $value.append(
        '<span class="colorBox" style="background:' + color + '"></span>'
      );
      $value.append('<span class="colorName">' + colorText + "</span>");

      $this.parents("ul").hide();
      $select.val(color);
    });

  $(function () {
    $("[product-colorselect]").colorSelect();
  });

  // product count
  var decrement = $("#productDecrementBut");
  var increment = $("#productIncrementBut");
  var productRightFouterCountNum = $("#productRightFouterCountNum");
  var productCount = 1;
  decrement.click(function () {
    if (productCount >= 2) {
      productCount--;
      productRightFouterCountNum.val(productCount);
      let priceVal = Number(myProductsData.cartPrice.split(".")[0]);

      $(".productRightFouterUpPriceCount").text(
        productCount * priceVal + ".00"
      );
    }
  });
  increment.click(function () {
    productCount++;
    productRightFouterCountNum.val(productCount);
    let priceVal = Number(myProductsData.cartPrice.split(".")[0]);
    $(".productRightFouterUpPriceCount").text(productCount * priceVal + ".00");
  });

  // polarBasketButton count basket item

  if (JSON.parse(window.localStorage.getItem("polarBasketList")) == null) {
    window.localStorage.setItem("polarBasketList", JSON.stringify(new Array()));
    $(".polarBasketItemCount").text(0);
  } else {
    $(".polarBasketItemCount").text(
      JSON.parse(window.localStorage.getItem("polarBasketList")).length
    );
  }

  // alert success product
  // product send value local storage json

  var polarCardProductBasketAddButton = $("#polarCardProductBasketAddButton");

  polarCardProductBasketAddButton.click(function () {
    // alert
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Səbətə əlavə edildi",
      showConfirmButton: false,
      timer: 1500,
    });

    //

    // set data local storage
    let $thisMain = $(this).parents("#product");

    let $thisId = myProductsData.cartId;
    console.log($thisId);
    let $thisImg = $thisMain.find("img").attr("src");
    let $thisName = $thisMain.find(".productName").text().trim();
    let $thisWeight = $('input[name="filterWeight"]:checked').val();
    let $thisColor = $("select[product-colorselect]").val();
    let $thisColorRal = $("select[product-colorselect] option:selected").attr(
      "data-ral"
    );
    let $thisPrice = myProductsData.cartPrice;

    let $thisCount = Number(
      $thisMain.find("#productRightFouterCountNum").val()
    );

    let $thisTotalPrice = $thisMain
      .find(".productRightFouterUpPriceCount")
      .text();

    var getPolarBasketListNew = JSON.parse(
      window.localStorage.getItem("polarBasketList")
    );

    var updatePolarBasketList = getPolarBasketListNew;
    var indexClone;
    if (updatePolarBasketList.length > 0) {
      for (t = 0; t < updatePolarBasketList.length; t++) {
        if (
          Number(updatePolarBasketList[t].productId) == $thisId &&
          updatePolarBasketList[t].productColor == $thisColor &&
          updatePolarBasketList[t].productWeight == $thisWeight
        ) {
          indexClone = t;
        }
      }
    }

    // console.log(indexClone);

    if (indexClone !== undefined) {
      updatePolarBasketList[indexClone].productCount = $thisCount;
      // updatePolarBasketList[indexClone].productTotalCount = $thisTotalCount;
      // updatePolarBasketList.unshift(polarProductItem);
      $(".polarBasketItemCount").text(updatePolarBasketList.length);
      window.localStorage.setItem(
        "polarBasketList",
        JSON.stringify(updatePolarBasketList)
      );

      addRemoveBasketItem(updatePolarBasketList);
    } else {
      var polarProductItem = {
        productId: $thisId,
        productSrc: $thisImg,
        productName: $thisName,
        productColor: $thisColor,
        productColorRal: $thisColorRal,
        productWeight: $thisWeight,
        productPrice: $thisPrice,
        productCount: $thisCount,
        productTotalPrice: $thisTotalPrice,
      };

      updatePolarBasketList.unshift(polarProductItem);
      $(".polarBasketItemCount").text(updatePolarBasketList.length);

      addRemoveBasketItem(updatePolarBasketList);
      window.localStorage.setItem(
        "polarBasketList",
        JSON.stringify(updatePolarBasketList)
      );
    }
  });

  var polarBasketListLocal = JSON.parse(
    window.localStorage.getItem("polarBasketList")
  );
  function addRemoveBasketItem(mainArrayBasket) {
    for (t = 0; t < mainArrayBasket.length; t++) {
      $(".basketMainList").append(` 
      <li class="basketMainListItem" basketId="${mainArrayBasket[t].productId}">
    <div class="basketMainListBlock">
      <div
        class="basketMainListBlockItem basketMainListItemSize1"
      >
        <div class="basketMainImg">
          <img src="${mainArrayBasket[t].productSrc}" alt="" />
        </div>
      </div>
      <div
        class="basketMainListBlockItem basketMainListItemSize2"
      >
        <div class="basketMainName">
          <div class="basketMainName1">Polar</div>
          <div class="basketMainName2">
          ${mainArrayBasket[t].productName}
          </div>
        </div>
        <div class="basketMainColorBlock">
          <span class="basketMainColorText">Rəng:</span>
          <div class="basketMainColor" style="background-color:${mainArrayBasket[t].productColor};"></div>
          <div class="basketMainColorName">${mainArrayBasket[t].productColorRal}</div>
        </div>
        <div class="basketMainWeight">
          <span class="basketMainWeightName">Çəki:</span>
          <span class="basketMainWeightCount">${mainArrayBasket[t].productWeight}</span>
          <span class="basketMainWeightSign">kq</span>
        </div>
        <div class="basketMainPrice">
          <span class="basketMainPriceCount">${mainArrayBasket[t].productPrice}</span>
          <span class="basketMainPriceSign">AZN</span>
        </div>
        <div class="basketMainQuantity">
          <div class="basketMainQuantityBlock">
            <button type="button" class="basketDecrementButton">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
                />
              </svg>
            </button>
            <input
              type="number"
              class="basketMainQuantityCountNum"
              value="${mainArrayBasket[t].productCount}"
            />
            <button type="button" class="basketIncrementButton">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="basketMainPriceTotal">
          <span class="basketMainPriceTotalCount">${mainArrayBasket[t].productTotalPrice}</span>
          <span class="basketMainPriceTotalSign">AZN</span>
        </div>
      </div>
      <div
        class="basketMainListBlockItem basketMainListItemSize3"
      >
        <div class="basketMainDeleteButBlock">
          <button
            type="button"
            class="basketMainDeleteButton delteBasketItem"
          >
            <svg
              width="24"
              height="29"
              viewBox="0 0 24 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.7929 4.07522H16.331C16.0633 1.7849 14.1298 0 11.7797 0H11.5714C9.22154 0 7.28785 1.7849 7.04988 4.07522H2.5879C1.16012 4.07522 0 5.23534 0 6.66312C0 7.02002 0.267671 7.2879 0.624783 7.2879H22.7562C23.1131 7.2879 23.381 7.02023 23.381 6.66312C23.3808 5.23534 22.2207 4.07522 20.7929 4.07522ZM11.6013 2.40947H11.8096C12.8209 2.40947 13.6538 3.12344 13.8918 4.07522H9.51904C9.72716 3.12344 10.5899 2.40947 11.6013 2.40947Z"
                fill="#FC1212"
              />
              <path
                d="M3.45073 26.0579C3.53995 27.3073 4.58115 28.2592 5.83051 28.2592H17.5506C18.8 28.2592 19.8412 27.3072 19.9304 26.0579L21.3582 8.89417L2.02295 8.89437L3.45073 26.0579ZM14.1297 13.8023C14.1594 13.2371 14.6354 12.8207 15.2006 12.8503C15.7659 12.88 16.1823 13.356 16.1526 13.9212L15.6171 23.3509C15.5874 23.8862 15.1411 24.3029 14.6057 24.3029H14.5462C13.981 24.2732 13.5646 23.7972 13.5942 23.232L14.1297 13.8023ZM8.21018 12.8506C8.77542 12.8209 9.25141 13.2373 9.28105 13.8026L9.81638 23.2322C9.84606 23.7975 9.42962 24.2734 8.86439 24.3031H8.80484C8.26951 24.3031 7.8232 23.8866 7.79351 23.3511L7.25818 13.9214C7.22851 13.3562 7.64495 12.8802 8.21018 12.8506Z"
                fill="#FC1212"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </li>`);
    }
  }
  addRemoveBasketItem(polarBasketListLocal);

  // basket count
  var basketDecrement = $(".basketDecrementButton");
  var basketIncrement = $(".basketIncrementButton");
  var basketMainQuantityCountNum = $(".basketMainQuantityCountNum");
  var basketItemQuantityCount = 1;

  basketDecrement.click(function basketDecrement() {
    basketItemQuantityCount = Number(
      $(this).parent().find(".basketMainQuantityCountNum").val()
    );
    console.log(basketItemQuantityCount);
    if (basketItemQuantityCount >= 2) {
      basketItemQuantityCount--;
      // product count
      $(this)
        .parent()
        .find(basketMainQuantityCountNum)
        .val(basketItemQuantityCount);
      productRightFouterCountNum.val(productCount);
      // product price
      let productPrice = $(this)
        .parents(".basketMainListBlockItem")
        .find(".basketMainPriceCount")
        .text()
        .split(".")[0];
      // product main price
      $(this)
        .parents(".basketMainListBlockItem")
        .find(".basketMainPriceTotalCount")
        .text(Number(productPrice) * basketItemQuantityCount + ".00");

      totalPriceCalc();
    }
  });

  basketIncrement.click(function basketIncrement() {
    basketItemQuantityCount = Number(
      $(this).parent().find(".basketMainQuantityCountNum").val()
    );

    basketItemQuantityCount++;
    // product count
    $(this)
      .parent()
      .find(basketMainQuantityCountNum)
      .val(basketItemQuantityCount);

    // product price
    let productPrice = $(this)
      .parents(".basketMainListBlockItem")
      .find(".basketMainPriceCount")
      .text()
      .split(".")[0];

    // product main price
    $(this)
      .parents(".basketMainListBlockItem")
      .find(".basketMainPriceTotalCount")
      .text(Number(productPrice) * basketItemQuantityCount + ".00");

    totalPriceCalc();
  });

  totalPriceCalc();

  const deleteBasketItem = $(".delteBasketItem");

  deleteBasketItem.click(function () {
    var deleteItemIndex = $(this).parents(".basketMainListItem").index();
    $(this).parents(".basketMainListItem").remove();

    let polarLocalStorageData = JSON.parse(
      window.localStorage.getItem("polarBasketList")
    );
    console.log(deleteItemIndex);
    polarLocalStorageData.splice(deleteItemIndex, 1);
    console.log(polarLocalStorageData);

    // if (polarLocalStorageData)
    window.localStorage.setItem(
      "polarBasketList",
      JSON.stringify(polarLocalStorageData)
    );

    totalPriceCalc();
    if ($(".basketMainListItem").length == 0) {
      $(".basketBody").hide();
      $(".basketFouter").hide();
      $(".basketInfoBlock").css("display", "block");
    } else {
      $(".basketBody").show();
      $(".basketFouter").show();
      $(".basketInfoBlock").css("display", "none");
    }
  });

  function totalPriceCalc() {
    let totalPrice = 0;
    for (let t = 0; t < $(".basketMainListItem").length; t++) {
      let productMainPrice = Number(
        $(".basketMainListItem")
          .eq(t)
          .find(".basketMainPriceTotalCount")
          .text()
          .split(".")[0]
      );
      totalPrice += productMainPrice;
      $(".basketFouterTopTotalPriceCount").text(totalPrice + ".00");
    }
  }

  totalPriceCalc();

  if ($(".basketMainListItem").length == 0) {
    $(".basketBody").hide();
    $(".basketFouter").hide();
    $(".basketInfoBlock").css("display", "block");
  } else {
    $(".basketBody").show();
    $(".basketFouter").show();
    $(".basketInfoBlock").css("display", "none");
  }

  $("#basketClearButton").click(function () {
    window.localStorage.setItem("polarBasketList", JSON.stringify(new Array()));

    $(".basketBody").hide();
    $(".basketFouter").hide();
    $(".basketInfoBlock").css("display", "block");
  });

  $("#baskeConfirmButton").click(function () {
    // alert
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Təsdiq edildi",
      showConfirmButton: false,
      timer: 2000,
    });
  });
});

// home cover slider
if ($(".homeSlider").length > 0) {
  let slide_data = [
    {
      src: "https://media.istockphoto.com/id/1460558247/photo/a-vibrant-colored-powder-explosion-on-a-white-background-perfect-for-holi-festival-themed.jpg?b=1&s=170667a&w=0&k=20&c=uPIV8sCzmWMFeENtx7JQqu8aD1Si5-R-cr9JQFGC5hA=",
      title: "Why do we use it?",
      content:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary making this the first true generator on the Internet It uses a dictionary of over 200 Latin words, combined",
    },
    {
      src: "https://images.unsplash.com/photo-1463438690606-f6778b8c1d10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title: "Slide 2",
      content: "DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.",
    },
    {
      src: "https://images.unsplash.com/photo-1464820453369-31d2c0b651af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      title: "Slide 3",
      content: "DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.",
    },
    {
      src: "https://images.unsplash.com/photo-1502691876148-a84978e59af8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title: "Slide 4",
      content: "DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.",
    },
    {
      src: "https://images.unsplash.com/photo-1502691876148-a84978e59af8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title: "Slide 5",
      content: "DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.",
    },
  ];
  let slides = [],
    captions = [];

  var autoplay = setInterval(function () {
    nextSlide();
  }, 3000);
  let container = document.getElementById("homeSlider");
  let leftSlider = document.getElementById("left-col");
  // console.log(leftSlider);
  let down_button = document.getElementById("down_button");
  // let caption = document.getElementById('slider-caption');
  // let caption_heading = caption.querySelector('caption-heading');

  down_button.addEventListener("click", function (e) {
    e.preventDefault();
    clearInterval(autoplay);
    nextSlide();
    autoplay;
  });

  for (let i = 0; i < slide_data.length; i++) {
    let slide = document.createElement("div"),
      homeSliderBackCover = document.createElement("div"),
      caption = document.createElement("div"),
      slide_title = document.createElement("div");
    slide_content = document.createElement("div");

    slide.classList.add("slide");
    slide.setAttribute("style", "background:url(" + slide_data[i].src + ")");
    homeSliderBackCover.classList.add("homeSliderBackCover");
    caption.classList.add("caption");
    slide_title.classList.add("caption-heading");
    slide_title.innerHTML = "<h1>" + slide_data[i].title + "</h1>";
    slide_content.classList.add("caption-subhead");
    slide_content.innerHTML = "<p>" + slide_data[i].content + "</p>";

    switch (i) {
      case 0:
        slide.classList.add("current");
        caption.classList.add("current-caption");
        break;
      case 1:
        slide.classList.add("next");
        caption.classList.add("next-caption");
        break;
      case slide_data.length - 1:
        slide.classList.add("previous");
        caption.classList.add("previous-caption");
        break;
      default:
        break;
    }
    caption.appendChild(slide_title);
    caption.appendChild(slide_content);
    // caption.insertAdjacentHTML(
    //   "beforeend",
    //   '<div class="caption-subhead"><span>dolor sit amet, consectetur adipiscing elit. </span></div>'
    // );
    slides.push(slide);
    captions.push(caption);
    leftSlider.appendChild(slide);
    container.appendChild(homeSliderBackCover);
    container.appendChild(caption);
  }
  // console.log(slides);

  function nextSlide() {
    // caption.classList.add('offscreen');

    slides[0].classList.remove("current");
    slides[0].classList.add("previous", "change");
    slides[1].classList.remove("next");
    slides[1].classList.add("current");
    slides[2].classList.add("next");
    let last = slides.length - 1;
    slides[last].classList.remove("previous");

    captions[0].classList.remove("current-caption");
    captions[0].classList.add("previous-caption", "change");
    captions[1].classList.remove("next-caption");
    captions[1].classList.add("current-caption");
    captions[2].classList.add("next-caption");
    let last_caption = captions.length - 1;

    // console.log(last);
    captions[last_caption].classList.remove("previous-caption");

    let placeholder = slides.shift();
    let captions_placeholder = captions.shift();
    slides.push(placeholder);
    captions.push(captions_placeholder);
  }

  // function prevSlide() {
  //   // caption.classList.add('offscreen');

  //   slides[slides.length - 1].classList.remove("current");
  //   slides[slides.length - 1].classList.add("previous", "change");
  //   slides[0].classList.remove("next");
  //   slides[0].classList.add("current");
  //   slides[1].classList.add("next");
  //   let last = slides.length - 1;
  //   slides[last].classList.remove("previous");

  //   captions[captions.length - 1].classList.remove("current-caption");
  //   captions[captions.length - 1].classList.add("previous-caption", "change");
  //   captions[0].classList.remove("next-caption");
  //   captions[0].classList.add("current-caption");
  //   captions[1].classList.add("next-caption");
  //   let last_caption = captions.length - 1;

  //   // console.log(last);
  //   captions[last_caption].classList.remove("previous-caption");

  //   let placeholder = slides.shift();
  //   let captions_placeholder = captions.shift();
  //   slides.push(placeholder);
  //   captions.push(captions_placeholder);
  // }

  let heading = document.querySelector(".caption-heading");

  // https://jonsuh.com/blog/detect-the-end-of-css-animations-and-transitions-with-javascript/
  function whichTransitionEvent() {
    var t,
      el = document.createElement("fakeelement");

    var transitions = {
      transition: "transitionend",
      OTransition: "oTransitionEnd",
      MozTransition: "transitionend",
      WebkitTransition: "webkitTransitionEnd",
    };

    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }
  }

  // var transitionEvent = whichTransitionEvent();
  // caption.addEventListener(transitionEvent, customFunction);

  // function customFunction(event) {
  //   caption.removeEventListener(transitionEvent, customFunction);
  //   console.log("animation ended");

  //   // Do something when the transition ends
  // }
}

$(".categoryFilterItemBox input").click(function () {
  $(this).parents("li").siblings().find("input").removeClass("active");
  $(this).addClass("active");
  var categoryVal = "." + $(this).val();
  if ($(this).hasClass("active")) {
    $(".productsBodyProducts")
      .find(".productsItems")
      .removeClass("productShow2");
    $(".productsBodyProducts").find(categoryVal).addClass("productShow2");
    $(".productsItems:not('" + categoryVal + "')").slideUp("800");
    $(".productShow2").slideDown("800");
  } else {
    $(categoryVal).slideUp("800");
    $(".productsBodyProducts").find(categoryVal).removeClass("productShow2");
  }
});

// $(document).ready(function () {
$(".checkedCheckboxComp input").click(function () {
  $(this).toggleClass("active");
  let buttonValue = "." + $(this).val();
  if ($(this).hasClass("active")) {
    $(".productsBodyProducts").find(buttonValue).addClass("productShow");
    $(".productsItems:not(.productShow)").slideUp("800");
    $(".productShow").slideDown("800");
  } else {
    $(buttonValue).slideUp("800");
    $(".productsBodyProducts").find(buttonValue).removeClass("productShow");
  }
  if ($(".checkedCheckboxComp input:checkbox:checked").length == 0) {
    $(".productsItems").slideDown("800");
    $(".productsBodyProducts")
      .find(".productsItems")
      .removeClass("productShow");
  }
});

// Design

// design

const polarHome1 = document.getElementById("polarHome1");
const polarHome2 = document.getElementById("polarHome2");

var desingPageImg1 = document.getElementById("desingPageImg1");
var desingPageImg2 = document.getElementById("desingPageImg2");

polarHome1.addEventListener("click", function () {
  desingPageImg2.classList.remove("desingPageImgActive");
  desingPageImg1.classList.add("desingPageImgActive");

  this.classList.add("desingPageBodyButtonStyleActive");
  polarHome2.classList.remove("desingPageBodyButtonStyleActive");
});

polarHome2.addEventListener("click", function () {
  desingPageImg1.classList.remove("desingPageImgActive");
  desingPageImg2.classList.add("desingPageImgActive");

  this.classList.add("desingPageBodyButtonStyleActive");
  polarHome1.classList.remove("desingPageBodyButtonStyleActive");
});

$(function () {
  $.fn.colorSelect1 = function () {
    function build($select) {
      var html = "";
      var listItems = "";

      $select.find("option").each(function () {
        listItems +=
          "" +
          "<li>" +
          '<span class="dataColorV" style="background:' +
          this.value +
          '"data-colorVal="' +
          this.value +
          '">' +
          "</span>" +
          "<span class='dataColorText'>" +
          this.text +
          "</span>" +
          "</li>";
      });

      html =
        "" +
        '<div class="color-select color-select1">' +
        "<span>Rəngi seçin</span>" +
        "<img class='arrowVektorDown' src='img/arrowVektorDown.png'>" +
        "<ul class='colorList colorList1'>" +
        listItems +
        "</ul>" +
        "</div>";

      return html;
    }

    this.each(function () {
      var $this = $(this);

      $this.hide();

      $this.after(build($this));
    });
  };

  $.fn.colorSelect2 = function () {
    function build($select) {
      var html = "";
      var listItems = "";

      $select.find("option").each(function () {
        listItems +=
          "" +
          "<li>" +
          '<span class="dataColorV" style="background:' +
          this.value +
          '"data-colorVal="' +
          this.value +
          '">' +
          "</span>" +
          "<span class='dataColorText'>" +
          this.text +
          "</span>" +
          "</li>";
      });

      html =
        "" +
        '<div class="color-select color-select2">' +
        "<span>Rəngi seçin</span>" +
        "<img class='arrowVektorDown' src='img/arrowVektorDown.png'>" +
        "<ul class='colorList colorList2'>" +
        listItems +
        "</ul>" +
        "</div>";

      return html;
    }

    this.each(function () {
      var $this = $(this);

      $this.hide();

      $this.after(build($this));
    });
  };
  // roof

  $("[roof-colorselect]").colorSelect1();

  // wall
  $("[wall-colorselect]").colorSelect2();

  // homeroof color change
  $(document).on("click", ".color-select1 li", function () {
    let homeRoofColor = $(this).children(".dataColorV").attr("data-colorVal");

    const home1Roof = $(".home1Roof");
    const home2Roof = $(".home2Roof");

    home1Roof.css({ fill: homeRoofColor });
    home2Roof.css({ fill: homeRoofColor });
  });

  $(document).on("click", ".color-select2 li", function () {
    let homeWallColor = $(this).children(".dataColorV").attr("data-colorVal");

    const home1Wall = $(".home1Wall");
    const home2Wall = $(".home2Wall");

    home1Wall.css({ fill: homeWallColor });
    home2Wall.css({ fill: homeWallColor });
  });
});
