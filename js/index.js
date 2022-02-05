// loading
$(window).on("load", function(){
    $(".loader").fadeOut(500);
        
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

// skills read
var moreP=$(".readmore");
$("#more").click(function(){
    this.classList.toggle("active");
    moreP[0].classList.toggle("is-active");
});

const addMessage=(e)=>{
	e.preventDefault();
	let Name=document.getElementById("yourName").value;
	let Mail=document.getElementById("yourMail").value;
	let Sub=document.getElementById("yourSub").value;
	let Message=document.getElementById("yourMessage").value;
	let message={
		yourName: Name,
		yourMail: Mail,
		yourSub: Sub,
		yourMessage: Message
	}
	if(Name=="" || Mail=="" || Sub==""|| Message==""){
		sweetError();
	}else{
		sweetSuccess();
	}
	document.forms[0].reset();
	let messagejson=JSON.stringify(message);

	const xhr= new XMLHttpRequest();

	xhr.open("POST","connect.php");
	xhr.setRequestHeader("Message-type","message/json");
	xhr.send(messagejson);
	
}

document.addEventListener("DOMContentLoaded",()=>{
	document.getElementById("sub-but").addEventListener("click", addMessage);
})

function sweetSuccess(){
	Swal.fire({
	  icon: 'success',
	  title: 'Your message send',
	  showConfirmButton: false,
	  timer: 1500
	})
}
function sweetError(){
	Swal.fire({
	  icon: 'error',
	  title: 'failure...',
	  text: 'Please fill in all fields'
	})
}