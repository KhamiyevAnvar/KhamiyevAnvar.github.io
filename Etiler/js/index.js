// Page onload - loading
window.onload = () => {
    document.getElementsByClassName("onloadEtiler")[0].classList.add("onloadEtilerNone");
}

$(function () {

    // event owl carousel
    if ($('.etilerHeaderCarousel').length > 0) {
        $('.etilerHeaderCarousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            smartSpeed: 2000, //smooth effect
            dots: true,
            autoplay: true, //smooth autoplya effect ><
            slideTransition: 'linear',
            autoplayTimeout: 6000,
            autoplaySpeed: 3000,
            autoplayHoverPause: true,

            responsive: {
                0: {
                    items: 1
                }
            }
        })
    }

    if ($('.blogHeadCarousel').length > 0) {
        $('.blogHeadCarousel').owlCarousel({
            loop: true,
            margin: 15,
            nav: false,
            smartSpeed: 2000, //smooth effect
            dots: true,
            autoplay: true, //smooth autoplya effect ><
            slideTransition: 'linear',
            autoplayTimeout: 4000,
            autoplaySpeed: 2000,
            autoplayHoverPause: true,

            responsive: {
                0: {
                    items: 1
                }
            }
        })
    }

    $('.lang-selectpicker').selectpicker();
    $('.form-selectpicker').selectpicker();
    $('.branch-selectpicker').selectpicker();


    // mobile menu
    const mobileMenu = $(".etilerMobileMenu");

    $("#etilermobMenuButton").click(function () {
        mobileMenu.addClass("etilerMobileMenuOpen");
    })

    $("#closeMobileMenu").click(function () {
        mobileMenu.removeClass("etilerMobileMenuOpen");
    })




    // contact map
    if ($("#contactMap").length > 0) {
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

        }

        initMap("contactMap");
        google.maps.event.addDomListener(window, "load", initMap);
    }
    // branch map
    if ($("#branchMap").length > 0) {

        function initMap(getId) {
            var location = { lat: 40.37236309656292, lng: 49.840664727974975 };
            var map = new google.maps.Map(document.getElementById(getId), {
                zoom: 7,
                center: location,
                zoomControl: true,
            });

            marker = new google.maps.Marker({
                map: map,
                position: location,
                animation: google.maps.Animation.DROP
            });


            function changeMap(lat, long, zoom) {

                const myLatLng = {
                    lat: lat,
                    lng: long
                };

                new google.maps.Map(
                    document.getElementById("branchMap"), {
                    zoom: zoom,
                    center: myLatLng,
                    zoomControl: true
                });
            }


            function changePinMap(lat, long, zoom) {
                const location = {
                    lat: lat,
                    lng: long
                };

                var map = new google.maps.Map(
                    document.getElementById("branchMap"), {
                    zoom: zoom,
                    center: location,
                    zoomControl: true
                });

                marker = new google.maps.Marker({
                    map: map,
                    position: location,
                    animation: google.maps.Animation.DROP
                });
            }

            $(document).ready(function () {
                $("#branchCountry").on("change", function () {
                    let dataLat = Number(this.options[this.selectedIndex].getAttribute('data-lat'));
                    let dataLng = Number(this.options[this.selectedIndex].getAttribute('data-lng'));
                    let zoom = 6;
                    changeMap(dataLat, dataLng, zoom);
                })
                $("#branchCity").on("change", function () {
                    let dataLat = Number(this.options[this.selectedIndex].getAttribute('data-lat'));
                    let dataLng = Number(this.options[this.selectedIndex].getAttribute('data-lng'));
                    let zoom = 11;
                    changeMap(dataLat, dataLng, zoom);
                })
                $("#branchCountryBranch").on("change", function () {
                    let dataLat = Number(this.options[this.selectedIndex].getAttribute('data-lat'));
                    let dataLng = Number(this.options[this.selectedIndex].getAttribute('data-lng'));
                    let zoom = 14;
                    changePinMap(dataLat, dataLng, zoom);
                })
            })
        }

        initMap("branchMap");
        google.maps.event.addDomListener(window, "load", initMap);



        // branchCountry.onchange = function () {
        //     // console.log(this.options.selectedIndex);
        //     // console.log('LNG-', this.options[this.selectedIndex].getAttribute('data-lng'));
        //     // console.log('LAT-', this.options[this.selectedIndex].getAttribute('data-lat'));
        //     // var dataLat = Number(this.options[this.selectedIndex].getAttribute('data-lat'));
        //     // var dataLng = Number(this.options[this.selectedIndex].getAttribute('data-lng'));
        //     // console.log(dataLat, dataLng);

        //     // var location = { lat: dataLat, lng: dataLng };
        //     // var newMap = new google.maps.Map(document.getElementById("branchCountry"), {
        //     //     zoom: 7,
        //     //     center: location,
        //     //     zoomControl: true,
        //     // });

        //     // marker = new google.maps.Marker({
        //     //     map: newMap,
        //     //     position: location,
        //     //     animation: google.maps.Animation.DROP
        //     // });
        // };


        // function changeMap(getId, datLat, datLng) {
        //     var location = { lat: datLat, lng: datLng };
        //     new google.maps.Map(document.getElementById(getId), {
        //         zoom: 7,
        //         center: location,
        //         zoomControl: true,
        //     });

        //     // marker = new google.maps.Marker({
        //     //     map: map,
        //     //     position: location,
        //     //     animation: google.maps.Animation.DROP
        //     // });
        // }

        // function initMap(getId) {
        //     var location = { lat: 40.400237073248334, lng: 49.852987518631174 };
        //     var map = new google.maps.Map(document.getElementById(getId), {
        //         zoom: 13,
        //         center: location,
        //         zoomControl: true,
        //     });

        //     marker = new google.maps.Marker({
        //         map: map,
        //         position: location,
        //         animation: google.maps.Animation.DROP
        //     });

        // }

        // function changeMap(getId, Lat, Lng) {
        //     var location = { lat: 40.41101778682269, lng: 49.871116320091964 };
        //     console.log(location);

        //     var map = new google.maps.Map(document.getElementById(getId), {
        //         zoom: 13,
        //         center: location,
        //         zoomControl: true,
        //     });

        //     marker = new google.maps.Marker({
        //         map: map,
        //         position: location,
        //         animation: google.maps.Animation.DROP
        //     });

        // }


        // branchCountry.onchange = function (e) {
        //     // console.log(this.options);
        //     // console.log('LNG-', this.options[this.selectedIndex].getAttribute('data-lng'));
        //     // console.log('LAT-', this.options[this.selectedIndex].getAttribute('data-lat'));
        //     var dataLat = this.options[this.selectedIndex].getAttribute('data-lat');
        //     var dataLng = this.options[this.selectedIndex].getAttribute('data-lng');
        //     console.log(this.options[this.selectedIndex].getAttribute('data-lat'));
        //     console.log(this.options[this.selectedIndex].getAttribute('data-lng'))
        //     console.log(this.value)
        //     changeMap("branchCountry");
        //     initMap("branchCountry");
        // };


        // initMap("branchCountry");


        // defaultMap("branchMap");
        // defaultMap("branchCountry");
        // google.maps.event.addDomListener(window, "load", defaultMap);
        // google.maps.event.addDomListener(window, "load", initMap);
        // google.maps.event.addDomListener(window, "load", changeMap);
    }

    //galery modal js

    //     let galleryImages = document.querySelectorAll('[data-gallery-img]')

    //     let counter = 0;

    //     function createGalleryDiv() {
    //         let galleryBox = document.createElement('div')
    //         galleryBox.setAttribute('data', 'gallery-template')
    //         galleryBox.classList.add('gallery')
    //         galleryBox.innerHTML = `<img id='img_preview' src='https://images.unsplash.com/photo-1665521583283-0bb4cedaa2e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80' />
    //   <div class='gallery__controls'>
    //     <button id='close__btn'  class='controls__btn__close'>
    //       <svg width="42" height="42" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    //         <path d="M18 6 6 18"></path>
    //         <path d="m6 6 12 12"></path>
    //       </svg>
    //     </button>
    //     <button id='prev__btn' class='control__btn'>
    //       <svg width="42" height="42" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    //         <path d="M19 12H5"></path>
    //         <path d="m12 19-7-7 7-7"></path>
    //       </svg>
    //     </button>
    //     <button id='next__btn' class='control__btn'>
    //       <svg width="42" height="42" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    //         <path d="M5 12h14"></path>
    //         <path d="m12 5 7 7-7 7"></path>
    //       </svg>
    //     </button>
    //   </div>`;
    //         document.querySelector('body').append(galleryBox)

    //     }

    //     galleryImages.forEach((img, index, arr) => {
    //         img.addEventListener('click', function () {
    //             createGalleryDiv()
    //             let gallery = document.querySelector('.gallery')
    //             gallery.addEventListener('fullscreenchange', function () {
    //                 if (!document.fullscreenElement) {
    //                     gallery.remove()
    //                 }
    //             })
    //             let imgPreview = gallery.querySelector("#img_preview");
    //             let nextBtn = gallery.querySelector('#next__btn')
    //             let prevBtn = gallery.querySelector('#prev__btn')
    //             let closeBtn = gallery.querySelector('#close__btn')

    //             imgPreview.addEventListener('animationend', function () {
    //                 this.classList.remove('fade')
    //             })

    //             closeBtn.addEventListener('click', function () {
    //                 document.exitFullscreen().then(() => gallery.remove())
    //             })
    //             prevBtn.addEventListener('click', function () {
    //                 imgPreview.classList.add('fade')
    //                 if (counter == 0) {
    //                     counter = arr.length - 1
    //                 } else {
    //                     counter--;
    //                 }
    //                 imgPreview.src = galleryImages[counter].src
    //             })
    //             nextBtn.addEventListener('click', function () {
    //                 imgPreview.classList.add('fade')
    //                 if (counter < arr.length - 1) {
    //                     counter++
    //                 } else {
    //                     counter = 0
    //                 }
    //                 imgPreview.src = galleryImages[counter].src
    //             })
    //             counter = index;
    //             imgPreview.src = this.src;
    //             gallery.requestFullscreen().then(() => {
    //                 gallery.style.display = 'flex'
    //             })
    //         })
    //     })

    if ($("#etiGalery").length > 0) {
        $('[data-fancybox="gallery"]').fancybox();
    }



    // Page onload - loading
    // window.onload = () => {
    //     document.getElementsByClassName("onloadResant")[0].classList.add("onloadPageNone");
    // }

    var classFrancForm = document.getElementsByClassName("franchiseForm");
    if (classFrancForm.length > 0) {
        const francSubBut = document.getElementById("formSubBut");
        francSubBut.onclick = function () { franchiseCheck() };
        function franchiseCheck() {

            let nameId = document.getElementById('franchiseFormName');
            let mailId = document.getElementById('franchiseFormMail');
            let phoneNumId = document.getElementById('franchiseFormPhone');
            let messageId = document.getElementById('franchiseFormMessage');
            let checkboxFra = document.getElementById('appCheck-all');

            let checkbox__mark = document.getElementsByClassName("checkbox__mark")[0];
            // let formSelectpicker = document.getElementById("form-selectpicker1").value;
            // console.log(formSelectpicker);

            if (nameId.value.length == 0 || mailId.value.length == 0 || phoneNumId.value.length == 0 || messageId.value.length == 0 || checkboxFra.checked == false) {


                if (nameId.value.length == 0) {
                    nameId.style.borderColor = 'red';
                    nameId.parentElement.classList.add("incorrect");
                    nameId.parentElement.classList.remove("success");
                } else {
                    nameId.style.borderColor = 'green';
                    nameId.parentElement.classList.add("success");
                    nameId.parentElement.classList.remove("incorrect");
                }

                if (mailId.value.length == 0) {
                    mailId.style.borderColor = 'red';
                    mailId.parentElement.classList.add("incorrect");
                    mailId.parentElement.classList.remove("success");
                } else {
                    mailId.style.borderColor = 'green';
                    mailId.parentElement.classList.add("success");
                    mailId.parentElement.classList.remove("incorrect");
                }


                if (phoneNumId.value.length == 0) {
                    phoneNumId.style.borderColor = 'red';
                    phoneNumId.parentElement.classList.add("incorrect");
                    phoneNumId.parentElement.classList.remove("success");
                } else {
                    phoneNumId.style.borderColor = 'green';
                    phoneNumId.parentElement.classList.add("success");
                    phoneNumId.parentElement.classList.remove("incorrect");
                }

                if (messageId.value.length == 0) {
                    messageId.style.borderColor = 'red';
                    messageId.parentElement.classList.add("incorrect");
                    messageId.parentElement.classList.remove("success");
                } else {
                    messageId.style.borderColor = 'green';
                    messageId.parentElement.classList.add("success");
                    messageId.parentElement.classList.remove("incorrect");
                }
                if (checkboxFra.checked == false) {
                    checkbox__mark.style.borderColor = 'red';
                } else {
                    checkbox__mark.style.borderColor = "#BEBEB";
                }

            }
            else {

                nameId.value = "";
                mailId.value = "";
                phoneNumId.value = "";
                messageId.value = "";

                nameId.style.borderColor = '#D9D9D9';
                nameId.parentElement.classList.remove("success");
                nameId.parentElement.classList.remove("incorrect");
                mailId.style.borderColor = '#D9D9D9';
                mailId.parentElement.classList.remove("success");
                mailId.parentElement.classList.remove("incorrect");
                phoneNumId.style.borderColor = '#D9D9D9';
                phoneNumId.parentElement.classList.remove("success");
                phoneNumId.parentElement.classList.remove("incorrect");
                messageId.style.borderColor = '#D9D9D9';
                messageId.parentElement.classList.remove("success");
                messageId.parentElement.classList.remove("incorrect");

                checkbox__mark.style.borderColor = "#BEBEBE";
                checkbox__mark.style.backgroundColor = "#fff";
            }
        }
    }

    var classContactForm = document.getElementsByClassName("contactMessage");
    if (classContactForm.length > 0) {
        const contactMessageSubBut = document.getElementById("contactMessageSubBut");

        contactMessageSubBut.onclick = function () { contactCheck() };

        function contactCheck() {

            let nameId = document.getElementById('contactFormName');
            let mailId = document.getElementById('contactFormEmail');
            let phoneNumId = document.getElementById('contactFormPhone');
            let addressId = document.getElementById('contactFormAddress');
            let messageId = document.getElementById('contactFormMessage');
            let checkboxFra = document.getElementById('appCheck1-all');

            let checkbox__mark = document.getElementsByClassName("checkbox__mark")[0];
            console.log(checkbox__mark);
            // let formSelectpicker = document.getElementById("form-selectpicker1").value;
            // console.log(formSelectpicker);

            if (nameId.value.length == 0 || mailId.value.length == 0 || phoneNumId.value.length == 0 || messageId.value.length == 0 || checkboxFra.checked == false) {


                if (nameId.value.length == 0) {
                    nameId.style.borderColor = 'red';
                    nameId.parentElement.classList.add("incorrect");
                    nameId.parentElement.classList.remove("success");
                } else {
                    nameId.style.borderColor = 'green';
                    nameId.parentElement.classList.add("success");
                    nameId.parentElement.classList.remove("incorrect");
                }

                if (mailId.value.length == 0) {
                    mailId.style.borderColor = 'red';
                    mailId.parentElement.classList.add("incorrect");
                    mailId.parentElement.classList.remove("success");
                } else {
                    mailId.style.borderColor = 'green';
                    mailId.parentElement.classList.add("success");
                    mailId.parentElement.classList.remove("incorrect");
                }


                if (phoneNumId.value.length == 0) {
                    phoneNumId.style.borderColor = 'red';
                    phoneNumId.parentElement.classList.add("incorrect");
                    phoneNumId.parentElement.classList.remove("success");
                } else {
                    phoneNumId.style.borderColor = 'green';
                    phoneNumId.parentElement.classList.add("success");
                    phoneNumId.parentElement.classList.remove("incorrect");
                }

                if (addressId.value.length == 0) {
                    addressId.style.borderColor = 'red';
                    addressId.parentElement.classList.add("incorrect");
                    addressId.parentElement.classList.remove("success");
                } else {
                    addressId.style.borderColor = 'green';
                    addressId.parentElement.classList.add("success");
                    addressId.parentElement.classList.remove("incorrect");
                }

                if (messageId.value.length == 0) {
                    messageId.style.borderColor = 'red';
                    messageId.parentElement.classList.add("incorrect");
                    messageId.parentElement.classList.remove("success");
                } else {
                    messageId.style.borderColor = 'green';
                    messageId.parentElement.classList.add("success");
                    messageId.parentElement.classList.remove("incorrect");
                }
                if (checkboxFra.checked == false) {
                    checkbox__mark.style.borderColor = 'red';
                } else {
                    checkbox__mark.style.borderColor = "#BEBEB";
                }

            }
            else {

                nameId.value = "";
                mailId.value = "";
                phoneNumId.value = "";
                addressId.value = "";
                messageId.value = "";

                nameId.style.borderColor = '#D9D9D9';
                nameId.parentElement.classList.remove("success");
                nameId.parentElement.classList.remove("incorrect");
                mailId.style.borderColor = '#D9D9D9';
                mailId.parentElement.classList.remove("success");
                mailId.parentElement.classList.remove("incorrect");
                phoneNumId.style.borderColor = '#D9D9D9';
                phoneNumId.parentElement.classList.remove("success");
                phoneNumId.parentElement.classList.remove("incorrect");
                addressId.style.borderColor = '#D9D9D9';
                addressId.parentElement.classList.remove("success");
                addressId.parentElement.classList.remove("incorrect");
                messageId.style.borderColor = '#D9D9D9';
                messageId.parentElement.classList.remove("success");
                messageId.parentElement.classList.remove("incorrect");

                checkbox__mark.style.borderColor = "#BEBEBE";
                checkbox__mark.style.backgroundColor = "#fff";
            }
        }
    }

    // console.log($(".blogHeadCarouselItemrightItemBlockContent1"));
    // $(".blogHeadCarouselItemrightItemBlock").click(function () {
    //     console.log($(this).eq(1));
    // })
})