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
    const chevronLeft = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>';
    const chevronRight = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>';
    if ($('.hotelsSliderCover').length > 0) {
        $('.hotelsSliderCover').owlCarousel({
            loop: true,
            margin: 32,
            nav: true,
            navText: [
                chevronLeft,
                chevronRight
            ],
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
    // beach card show more show less button
    const beachMoreButton = $(".beachMoreButton");
    beachMoreButton.click(function () {
        if ($(this).parents(".beachCard").find(".beachCardInfoOverflow").length > 0) {
            $(this).parents(".beachCardInfo").removeClass("beachCardInfoOverflow");
            $(this).parents(".beachCardInfo").find(".beachCardContent").addClass("beachCardContentLimit");
            $(this).text("show more");

        } else {
            $(this).parents(".beachCardInfo").addClass("beachCardInfoOverflow");
            $(this).parents(".beachCardInfo").find(".beachCardContent").removeClass("beachCardContentLimit");
            $(this).text("show less");
        }
    })

    // map
    if ($("#resantMap").length > 0) {
        function initMap(getId) {
            var location = { lat: 40.37236309656292, lng: 49.840664727974975 };
            var map = new google.maps.Map(document.getElementById(getId), {
                zoom: 7,
                styles: [{ "featureType": "all", "elementType": "labels.text", "stylers": [{ "color": "#878787" }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f9f5ed" }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "color": "#f5f5f5" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#c9c9c9" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#aee0f4" }] }],
                center: location,
                zoomControl: true,
            });

            marker = new google.maps.Marker({
                map: map,
                position: location,
                animation: google.maps.Animation.DROP

            });


            // Pin marker

            var mapLatLng = [];

            $(".mapRestaurantItem").map((mapListItem) => {
                mapLatLng.push([Number($(".mapRestaurantItem")[mapListItem].getAttribute('lat')), Number($(".mapRestaurantItem")[mapListItem].getAttribute('lng')), $(".mapRestaurantItem")[mapListItem].getAttribute('name')]);
            });

            function addMarker(late, lange) {
                // const svgMarker = {
                //     path: "M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z",
                //     fillColor: "#EE3535",
                //     fillOpacity: 0.9,
                //     strokeWeight: 0,
                //     rotation: 0,
                //     scale: 0.07,
                //     anchor: new google.maps.Point(10, 30),
                // };
                marker = new google.maps.Marker({
                    map: map,
                    position: new google.maps.LatLng(late, lange),
                    animation: google.maps.Animation.DROP
                });
            }
            for (var i = 0; i < mapLatLng.length; i++) {
                addMarker(Number(mapLatLng[i][0]), Number(mapLatLng[i][1]), mapLatLng[i][2]);
            }

            // animation
            // marker.addListener('click', toggleBounce);

            // map list
            function changeMap(lat, long, labelCont) {
                const myLatLng = {
                    lat: lat,
                    lng: long
                };

                const map = new google.maps.Map(
                    document.getElementById("resantMap"), {
                    zoom: 19,
                    center: myLatLng,
                    zoomControl: true
                }
                );

                new google.maps.Marker({
                    position: myLatLng,
                    map,
                    label: { color: '#555', fontWeight: '900', fontSize: '14px', text: labelCont, className: 'marker-position' }
                });
            }

            var mapListItem = $(".mapRestaurantItem");

            mapListItem.click(function () {
                let late = Number($(this).attr("lat"));
                let lange = Number($(this).attr("lng"));
                let labelCont = $(this).attr("name");
                $(this).addClass("active").siblings().removeClass("active");
                changeMap(late, lange, labelCont);
            })
        }

        // function toggleBounce() {
        //     if (marker.getAnimation() !== null) {
        //         marker.setAnimation(null);
        //     } else {
        //         marker.setAnimation(google.maps.Animation.BOUNCE);
        //     }
        //     if (marker2.getAnimation() !== null) {
        //         marker2.setAnimation(null);
        //     } else {
        //         marker2.setAnimation(google.maps.Animation.BOUNCE);
        //     }
        // }

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

    //modal kabinet
    $(function () {
        $('a.thumbnail').click(function (e) {
            e.preventDefault();
            $('#image-modal .modal-body img').attr('src', $(this).find('img').attr('src'));
            $("#image-modal").modal('show');
        });
        $('#image-modal .modal-body img').on('click', function () {
            $("#image-modal").modal('hide')
        });
    });

    //kabinet buuton
    $('.restaurantOnePageButton').click(function () {
        $(this).parents(".restaurantTwoCol-right").toggleClass("restaurantKabinet");
    })

    // career apply

    const careerItemMoreButton = $(".careerItemMoreButton");
    const careerRight = $("#career-right");
    const careerVacancyBlockNone = $(".careerVacancyBlockNone");
    careerItemMoreButton.click(function () {
        careerRight.addClass("career-right-active");
    })
    careerVacancyBlockNone.click(function () {
        careerRight.removeClass("career-right-active");

    })


})

// Page onload - loading
window.onload = () => {
    document.getElementsByClassName("onloadResant")[0].classList.add("onloadPageNone");
}

// applyModalForm

var applyVacancy = $(".applyVacancy");
const applyModal = $("#applyModal");
var applyModalHeadDelete = $(".applyModalHeadDelete");


// active apply modal 
applyVacancy.click(function () {
    applyModal.addClass("applyModalActive");
})

// remove apply modal
applyModalHeadDelete.click(function () {
    applyModal.removeClass("applyModalActive");
})

var applyModalButton = document.getElementById("applyModalButton");

applyModalButton.addEventListener("click", (e) => {
    e.preventDefault();
    checkApply();
})

function checkApply() {
    const infoCareerApply = document.getElementsByClassName("infoCareerApply")[0];

    var applyModalItemName = document.getElementById("applyModalItemName").value.trim();
    var applyModalItemSurname = document.getElementById("applyModalItemSurname").value.trim();
    var applyModalCv = document.getElementById("applyModalCv").value.trim();


    if (applyModalItemName.length > 0 && applyModalItemSurname.length > 0 && applyModalCv !== "") {
        // correct message
        infoCareerApply.innerText = "Müraciətiniz qeydə alındı";
        infoCareerApply.style.color = "#011B4C";

        // zero input
        document.getElementById("applyModalItemName").value = "";
        document.getElementById("applyModalItemSurname").value = "";

    } else {
        //incorrect message
        infoCareerApply.innerText = "Tam doldurulmayıb";
        infoCareerApply.style.color = "red";
    }
}