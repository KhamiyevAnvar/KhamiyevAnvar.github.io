
// nav back
$(document).on("click",".navdiv ul li" , function(){
	$(this).addClass("active").siblings().removeClass("active");
})



// nav toggle
var navbut=document.querySelector("#navbut");
var menubar=document.querySelector(".menulist");


navbut.addEventListener("click", function(){
	this.classList.toggle("is-active");
	menubar.classList.toggle("menu-responsive");

})


// slider owl2

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1018:{
                items:4
            }
        }
    })
}) 

// let text = "";
// const fruits = ["apple", "orange", "cherry"];
// fruits.forEach((product,index,array)=>array[index]=product.toUpperCase());
// console.log(fruits);