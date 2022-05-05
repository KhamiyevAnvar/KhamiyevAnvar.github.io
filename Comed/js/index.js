// navbar bg col
var nav = $("#Navbar");

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll > 0) {
        nav.css("background", "radial-gradient(54.11% 54.11% at 49.58% 59.67%, #9B8F64 0%, #645E46 100%)");

    } else {
        nav.css("background", "transparent");
    }
});


// navbar navigation button
var navBut = document.getElementById("nav-but");
var menu = document.querySelector(".nav-list");
navBut.addEventListener("click", function () {
    navBut.classList.toggle("active-nav-but");
    menu.classList.toggle("active-nav-list");
})

