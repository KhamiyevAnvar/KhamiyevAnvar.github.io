$(function () {

    if ($(".parallax-window").length || $(".parallax2").length > 0) {
        $('.parallax-window').parallax({ imageSrc: 'img/restaurant1.jpg' });
        $('.parallax-window2').parallax({ imageSrc: 'img/restaurant2.jpg' });
    }

    // event owl carousel
    if ($('.eventsBody').length > 0) {
        $('.eventsBody').owlCarousel({
            loop: true,
            margin: 16,
            nav: false,
            smartSpeed: 4000, //smooth effect
            dots: false,
            autoplay: true, //smooth autoplya effect ><
            slideTransition: 'linear',
            autoplayTimeout: 4000,
            autoplaySpeed: 4000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1020: {
                    items: 3
                }
            }
        })
    }

    // mobile menu
    const mobileMenu = $("#mobileMenu");

    $("#nav-but").click(function (e) {
        e.stopPropagation();
        $(this).toggleClass("active-nav-but");
        mobileMenu.toggleClass("mobileMenuActive");

    })

    // Mobile menu close button
    $("#cancelBut").click(function (e) {
        $("#nav-but").toggleClass("active-nav-but");
        mobileMenu.toggleClass("mobileMenuActive");
    })

    // Language button event
    const langBut = $(".resantHeadLangActive");
    langBut.click(function (e) {
        $(this).siblings(".resantHeadLangDrop").toggleClass("resantHeadLangDropActive");
        e.stopPropagation();
    })

    // lang bar click function stop
    $(".resantHeadLangDrop").click(function (e) {
        e.stopPropagation();
    })

    // body click closed lang bar
    $("body").click(function () {
        langBut.siblings(".resantHeadLangDrop").removeClass("resantHeadLangDropActive");
    })

    // brand owl carousel
    if ($('.brandBodyItems').length > 0) {
        $('.brandBodyItems').owlCarousel({
            rtl: true,
            loop: true,
            margin: 16,
            nav: false,
            smartSpeed: 2000, //smooth effect
            dots: false,
            autoplay: true, //smooth autoplya effect ><
            slideTransition: 'linear',
            autoplayTimeout: 2000,
            // autoplaySpeed: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 4
                },
                1020: {
                    items: 6
                }
            }
        })
    }

    // tour item add active button

    var tourItem = $(".tourContentItem");
    if (tourItem.length > 0) {
        tourItem.click(function () {
            $(this).addClass("active").siblings().removeClass("active");
            var srcClick = $(this).attr("name");
            console.log(srcClick);
            $("#tourImg").attr("src", `img/${srcClick}.jpg`)
        })
    }

    // hotels slider
    // event owl carousel
    if ($('.hotelsSliderCover').length > 0) {
        $('.hotelsSliderCover').owlCarousel({
            loop: true,
            margin: 32,
            nav: false,
            dots: false,
            smartSpeed: 3000, //smooth effect
            autoplay: true, //smooth autoplya effect ><
            slideTransition: 'linear',
            autoplayTimeout: 3000,
            autoplaySpeed: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                1020: {
                    items: 1.5
                }
            }
        })
    }

    // hotels card show more show less button
    const hotelMoreButton = $(".hotelMoreButton");
    hotelMoreButton.click(function () {
        console.log("class length - " + ($(this).parents(".hotelCard").find(".hotelCardInfoOverflow").length));
        if ($(this).parents(".hotelCard").find(".hotelCardInfoOverflow").length > 0) {
            $(this).parents(".hotelCardInfo").removeClass("hotelCardInfoOverflow");
            $(this).parents(".hotelCardInfo").find(".hotelCardContent").addClass("hotelCardContentLimit");
            $(this).text("show more");

        } else {
            $(this).parents(".hotelCardInfo").addClass("hotelCardInfoOverflow");
            $(this).parents(".hotelCardInfo").find(".hotelCardContent").removeClass("hotelCardContentLimit");
            $(this).text("show less");
        }
    })

    // map
    if ($("#resantMap").length > 0) {



        function initMap(getId) {
            var location = { lat: 40.408061, lng: 49.861052 };
            var map = new google.maps.Map(document.getElementById(getId), {
                zoom: 12,
                styles: [{ "featureType": "all", "elementType": "labels.text", "stylers": [{ "color": "#878787" }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f9f5ed" }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "color": "#f5f5f5" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#c9c9c9" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#aee0f4" }] }],
                center: location,
                title: "Hello World!"
            });

            marker = new google.maps.Marker({
                map: map,
                position: location,
                animation: google.maps.Animation.DROP,
                title: "Hello World!"
            });


            // Pin marker

            var mapLatLng = [];

            $(".mapRestaurantItem").map((mapListItem) => {
                mapLatLng.push([Number($(".mapRestaurantItem")[mapListItem].getAttribute('lat')), Number($(".mapRestaurantItem")[mapListItem].getAttribute('lng'))]);
            });

            function addMarker(late, lange) {
                marker = new google.maps.Marker({
                    map: map,
                    position: new google.maps.LatLng(late, lange),
                    animation: google.maps.Animation.DROP,
                    title: "Hello World!"
                });
            }
            for (var i = 0; i < mapLatLng.length; i++) {
                addMarker(Number(mapLatLng[i][0]), Number(mapLatLng[i][1]));
            }

            // animation
            // marker.addListener('click', toggleBounce);

            // map list
            function changeMap(lat, long) {
                const myLatLng = {
                    lat: lat,
                    lng: long
                };
                const map = new google.maps.Map(
                    document.getElementById("resantMap"), {
                    zoom: 19,
                    center: myLatLng,
                }
                );

                new google.maps.Marker({
                    position: myLatLng,
                    map,
                });
            }

            var mapListItem = $(".mapRestaurantItem");

            mapListItem.click(function () {
                let late = Number($(this).attr("lat"));
                let lange = Number($(this).attr("lng"));

                changeMap(late, lange);

            })
        }

        function toggleBounce() {
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }
            if (marker2.getAnimation() !== null) {
                marker2.setAnimation(null);
            } else {
                marker2.setAnimation(google.maps.Animation.BOUNCE);
            }
        }

        initMap("resantMap");
        google.maps.event.addDomListener(window, "load", initMap);


    }



    // map list close
    var closeMapListBut = $("#closeMapListBut");
    closeMapListBut.click(function () {
        $(".mapList").eq(0).toggleClass("mapListClose");
        console.log(1);
        $(this).toggleClass("closeMapListButActive")
    })

    // modal    
    const onloadModalInfoCloseBut = $("#onloadModalInfoCloseBut");
    const onloadModal = $("#onloadModal");
    if (onloadModal.length > 0) {
        onloadModalInfoCloseBut.click(function () {
            onloadModal.css("display", "none");
        })
    }
})