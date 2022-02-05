// loading
$(window).on("load", function(){
    $(".loader").fadeOut(1000);
        
})


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


// portfolio filter
$(document).ready(function(){
    $(".list").click(function(){
        // add remove active class
        $(this).addClass("active").siblings().removeClass("active");
        // filter galery parametr
        const value=$(this).attr("data-filter");
        
        if(value=="all"){
            $(".all").show("1000");
        }
        else{
            $(".all").filter("."+value).show("1000");
            
            $(".all").not("."+value).hide("1000");
            
        }
    })
})





// let text = "";
// const fruits = ["apple", "orange", "cherry"];
// fruits.forEach((product,index,array)=>array[index]=product.toUpperCase());
// console.log(fruits);