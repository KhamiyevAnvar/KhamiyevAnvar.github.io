
// nav back
$(document).on("click",".NavB ul li" , function(){
	$(this).addClass("active").siblings().removeClass("active");
})

// discover slide back
var textloc= $(".dis-p");
var textlocarray=[
				  "1-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 1.",
				  "2-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 2.",
				  "3-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 3."
				];
$(".dis-p").html(textlocarray [0]);			
$(document).on("click",".desing-dots span" , function(){
	$(this).addClass("active").siblings().removeClass("active");
	;
	
	textloc.html(textlocarray[$(this).index()]);
})


// 


// nav toggle
var menu=document.querySelector("#menu-n");
var menubar=document.querySelector(".navlist");


menu.addEventListener("click", function(){
	this.classList.toggle("is-active");
	menubar.classList.toggle("listresponsiv");

})