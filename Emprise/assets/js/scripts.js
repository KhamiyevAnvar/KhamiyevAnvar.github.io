// navbar bg col
var nav = $("#emprise-nav");
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll > 0) {
        nav.css("background", "rgba(153, 163, 173, .9)");

    } else {
        nav.css("background", "transparent");
    }
});

// carousel cover
const prevIcon = '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 47.25C36.8406 47.25 47.25 36.8406 47.25 24C47.25 11.1594 36.8406 0.75 24 0.75C11.1594 0.75 0.75 11.1594 0.75 24C0.75 36.8406 11.1594 47.25 24 47.25Z" stroke="white" stroke-width="1.5"/><path d="M17.0264 25.049H28.4994L23.4844 30.194C23.2908 30.3957 23.1827 30.6644 23.1827 30.944C23.1827 31.2236 23.2908 31.4923 23.4844 31.694C23.5778 31.792 23.6902 31.8701 23.8146 31.9234C23.9391 31.9767 24.073 32.0042 24.2084 32.0042C24.3438 32.0042 24.4778 31.9767 24.6023 31.9234C24.7267 31.8701 24.839 31.792 24.9324 31.694L31.6994 24.743C31.8922 24.5435 31.9999 24.2769 31.9999 23.9995C31.9999 23.7221 31.8922 23.4555 31.6994 23.256L24.9324 16.308C24.839 16.21 24.7267 16.1319 24.6023 16.0786C24.4778 16.0253 24.3438 15.9978 24.2084 15.9978C24.073 15.9978 23.9391 16.0253 23.8146 16.0786C23.6902 16.1319 23.5778 16.21 23.4844 16.308C23.2917 16.5075 23.1839 16.7741 23.1839 17.0515C23.1839 17.3289 23.2917 17.5955 23.4844 17.795L28.4994 22.94H17.0264C16.7524 22.9485 16.4924 23.0633 16.3015 23.2601C16.1106 23.4569 16.0039 23.7203 16.0039 23.9945C16.0039 24.2687 16.1106 24.5321 16.3015 24.7289C16.4924 24.9258 16.7524 25.0406 17.0264 25.049Z" fill="white"/></svg>';
const nextIcon = '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 0.75C11.1594 0.75 0.75 11.1594 0.75 24C0.75 36.8406 11.1594 47.25 24 47.25C36.8406 47.25 47.25 36.8406 47.25 24C47.25 11.1594 36.8406 0.75 24 0.75Z" stroke="white" stroke-width="1.5"/><path d="M30.9736 22.951H19.5006L24.5156 17.806C24.7092 17.6043 24.8173 17.3356 24.8173 17.056C24.8173 16.7764 24.7092 16.5077 24.5156 16.306C24.4222 16.208 24.3098 16.1299 24.1854 16.0766C24.0609 16.0233 23.927 15.9958 23.7916 15.9958C23.6562 15.9958 23.5222 16.0233 23.3977 16.0766C23.2733 16.1299 23.161 16.208 23.0676 16.306L16.3006 23.257C16.1078 23.4565 16.0001 23.7231 16.0001 24.0005C16.0001 24.2779 16.1078 24.5445 16.3006 24.744L23.0676 31.692C23.161 31.79 23.2733 31.8681 23.3977 31.9214C23.5222 31.9747 23.6562 32.0022 23.7916 32.0022C23.927 32.0022 24.0609 31.9747 24.1854 31.9214C24.3098 31.8681 24.4222 31.79 24.5156 31.692C24.7083 31.4925 24.8161 31.2259 24.8161 30.9485C24.8161 30.6711 24.7083 30.4045 24.5156 30.205L19.5006 25.06H30.9736C31.2476 25.0515 31.5076 24.9367 31.6985 24.7399C31.8894 24.5431 31.9961 24.2797 31.9961 24.0055C31.9961 23.7313 31.8894 23.4679 31.6985 23.2711C31.5076 23.0742 31.2476 22.9594 30.9736 22.951Z" fill="white"/></svg>';
$('.emprise-cover-carousel').owlCarousel({
    loop: true,
    margin: 36,
    nav: true,
    navText: [
        nextIcon,
        prevIcon
    ],
    autoplay: true,
    dots: false,
    autoplayTimeout: 7000,
    responsive: {
        0: {
            items: 1
        }
    }
})
const prevIcon2 = '<svg svg width = "80" height = "81" viewBox = "0 0 80 81" fill = "none" xmlns = "http://www.w3.org/2000/svg" ><g filter="url(#filter0_df_396_724)"><circle cx="40" cy="37" r="36" fill="#E81A46"/></g><path d="M36 45.925L44.463 37.463L36 29" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><defs><filter id="filter0_df_396_724" x="0" y="0" width="80" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_396_724"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_396_724" result="shape"/><feGaussianBlur stdDeviation="0.5" result="effect2_foregroundBlur_396_724"/></filter></defs></svg> ';
const nextIcon2 = '<svg width="80" height="81" viewBox="0 0 80 81" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_df_396_724)"><circle cx="37" cy="37" r="35.5" stroke="#546179"/></g><path d="M41.461 45.34L32.998 36.877L41.461 28.415" stroke="#546179" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><defs><filter id="filter0_f_396_727" x="0" y="0" width="74" height="74" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_396_727"/></filter></defs></svg>';

$('.category-carousel').owlCarousel({
    loop: true,
    margin: 16,
    nav: true,
    navText: [
        nextIcon2,
        prevIcon2
    ],
    autoplay: true,
    dots: false,
    autoplayTimeout: 10000,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        991: {
            items: 4
        }
    }

})

// trernding

$('.trending-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: [
        nextIcon2,
        prevIcon2
    ],
    autoplay: true,
    dots: false,
    autoplayTimeout: 10000,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        991: {
            items: 3
        }
    }

})


$('.destinations-carousel').owlCarousel({
    loop: true,
    margin: 36,
    nav: true,
    navText: [
        nextIcon2,
        prevIcon2
    ],
    autoplay: true,
    dots: false,
    autoplayTimeout: 8000,
    responsive: {
        0: {
            items: 1
        }
    }
})

// seller
$('.seller-carousel').owlCarousel({
    loop: true,
    margin: 16,
    nav: true,
    autoplay: true,
    dots: false,
    autoplayTimeout: 10000,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 3
        }
    }

})

// datepicker
$('#date').datepicker();

// nav but nav list
var navBut = document.getElementById("nav-but");
var menu = document.querySelector(".nav-list");
navBut.addEventListener("click", function () {
    navBut.classList.toggle("active-nav-but");
    menu.classList.toggle("active-nav-list");
})

// selectpicker
$('.result-selectpicker').selectpicker();

// start datepicker
$('#start-date').datepicker();



