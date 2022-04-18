// navbar bg col
var nav = $("#navbar");
window.addEventListener("scroll", (event) =>{
    let scroll=this.scrollY;
    if(scroll > 0 ){
        nav.css("box-shadow" ,"0 0 2px black");

    }else{
        nav.css("box-shadow" ,"0 0 0 white");
    }
});

// search -but
var searchBarDiv=document.querySelector(".search-bar-div");
var searchIcon=document.querySelector(".search-icon");
searchIcon.addEventListener("click",function(){
    searchBarDiv.classList.toggle("active");
    
})

var markIcon=document.querySelector(".mark-icon");
markIcon.addEventListener("click",function(){
    searchBarDiv.classList.toggle("active");
    
})


// shop-cart-but
var shopCart=document.querySelector("#shop-cart");
var shopCartBut=document.querySelector("#shop-cart-but");
shopCartBut.addEventListener("click",function(){
    shopCart.classList.toggle("active-cart");
    
})
var shoppingBut=document.querySelector(".shopping-but");
shoppingBut.addEventListener("click",function(){
    shopCart.classList.toggle("active-cart");
    
})

// navbar navigation button
var navBut=document.getElementById("nav-but");
var menu=document.querySelector(".menubar");
navBut.addEventListener("click",function(){
    navBut.classList.toggle("active");
    menu.classList.toggle("active");
})


// product menu
$(document).on("click",".product-menu li" , function(){
    $(this).addClass("active").siblings().removeClass("active");
}) 

// owl -carousel

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:2
        },
        750:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

// countdown
$(document).ready(function(){
    $('#getting-started').countdown('2022/12/11', function(event) {
        $(this).html(event.strftime(' <div  class="campaign-item "><span class="item-num single-counter">%D</span><span class="item-name">days</span></div><div class="campaign-item"><span class="item-num">%H </span><span class="item-name">hours</span></div><div class="campaign-item"><span class="item-num">%M </span><span class="item-name">minutes</span></div><div class="campaign-item"><span class="item-num">%S</span><span class="item-name">minutes</span></div>'));
    });
})



// accordion
const descripton = document.getElementById("des-head");
const accordion= document.querySelector(".description");
descripton.addEventListener("click" ,function(){
    accordion.classList.toggle("active");
})

const additionalHead = document.getElementById("additional-head");
const additional= document.querySelector(".additional-info");
additionalHead.addEventListener("click" ,function(){
    additional.classList.toggle("active");
})

const reviewsHead = document.getElementById("reviews-head");
const reviews= document.querySelector(".reviews");
reviewsHead.addEventListener("click" ,function(){
    reviews.classList.toggle("active");
})




// sticky dont work
// $(function(){
//     if($("#sticky").length){
//         var el= $("#sticky");
//         var stickyTop=$("#sticky").offset().top;
//         var stickyHeight=$("#sticky").height();
//         $(window).scrool(function(){
//             var limit=$("#fouter-fluid").offset().top-stickyHeight-20;

//             var windowTop=$(window).scroolTop();
//             if(stickyTop<windowTop){
//                 el.css({
//                     position : "fixed",
//                     top:0
//                 });
//             }else{
//                  el.css('position' ,'static');
//             }
//             if(limit<windowTop){
//                 var diff =limit-windowTop;
//                 el.css({top :diff});
//             }

//         });
//     }
// });





