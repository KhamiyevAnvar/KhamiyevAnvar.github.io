
// nav back
$(document).on("click",".NavB ul li" , function(){
	$(this).addClass("active").siblings().removeClass("active");
})


// nav toggle
var menu=document.querySelector("#menu-n");
var menubar=document.querySelector(".navlist");


menu.addEventListener("click", function(){
	this.classList.toggle("is-active");
	menubar.classList.toggle("listresponsiv");

})