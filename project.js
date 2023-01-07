function onClickMenu(){
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("nav").classList.toggle("change");
}



// search functionality

document.querySelector(".btn1").addEventListener("click",funsearch);

function funsearch(){
    event.preventDefault();
    var key=document.querySelector("#search").value;
    key=key.toUpperCase();
    if(key.includes("BEAUTY")){
        window.open("beauty.html","_self");
        document.querySelector("#search").value="";
    }else if(key.includes("CLOTH")){
        window.open("clothe.html","_self");
        document.querySelector("#search").value="";
    }else if(key.includes("FOOD")){
        window.open("food.html","_self");
        document.querySelector("#search").value="";
    }else if(key.includes("HEALTH")){
        window.open("health.html","_self");
        document.querySelector("#search").value="";
    }else if(key.includes("HOME")){
        window.open("home.html","_self");
        document.querySelector("#search").value="";
    }else if(key.includes("JWELLERY")){
        window.open("jwellery.html","_self");
        document.querySelector("#search").value="";
    }else if(key.includes("KIDS")){
        window.open("kids.html","_self");
        document.querySelector("#search").value="";
    }else if(key.includes("PET")){
        window.open("pet.html","_self");
        document.querySelector("#search").value="";
    }else if(key.includes("SHOES")){
        window.open("shoes.html","_self");
        document.querySelector("#search").value="";
    }else if(key.includes("SPORTS")){
        window.open("sports.html","_self");
        document.querySelector("#search").value="";
    }else{
        alert("item not found");
    }
}

// cart logo
var count = localStorage.getItem("cartcount") || 0;
document.querySelector(".cart-count").innerText = count;

//scroll
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
var cartArr = JSON.parse(localStorage.getItem("cart-list")) || [];

console.log(document.querySelector(".cart-count"));

// search functionality

document.querySelector(".btn1").addEventListener("click",funsearch);

function funsearch(){
    event.preventDefault();
    var key=document.querySelector("#search").value;
    key=key.toUpperCase();
    if(key.includes("BEAUTY")){
        window.open("beauty.html","_self");
        document.querySelector("#search").value="";
    }else if(key.includes("CLOTH")){
        window.open("clothe.html","_self");
        document.querySelector("#search").value="";
    }else if(key.includes("FOOD")){
        window.open("food.html","_self");
        document.querySelector("#search").value="";
    }else if(key.includes("HEALTH")){
        window.open("health.html","_self");
        document.querySelector("#search").value="";
    }else if(key.includes("HOME")){
        window.open("home.html","_self");
        document.querySelector("#search").value="";
    }else if(key.includes("JWELLERY")){
        window.open("jwellery.html","_self");
        document.querySelector("#search").value="";
    }else if(key.includes("KIDS")){
        window.open("kids.html","_self");
        document.querySelector("#search").value="";
    }else if(key.includes("PET")){
        window.open("pet.html","_self");
        document.querySelector("#search").value="";
    }else if(key.includes("SHOES")){
        window.open("shoes.html","_self");
        document.querySelector("#search").value="";
    }else if(key.includes("SPORTS")){
        window.open("sports.html","_self");
        document.querySelector("#search").value="";
    }
}

// cart logo
var count = localStorage.getItem("cartcount") || 0;
document.querySelector(".cart-count").innerText = count;
//function image

document.querySelector("#poster").addEventListener("click",function(){
        window.open("clothe.html","_self");
});
console.log("Saurabh")
//username
document.querySelector("#user-name1").textContent=JSON.parse(localStorage.getItem("userName"))||"Sign In"

//feedback
document.getElementById("submitfeedback").addEventListener("click",function(){
    let val=document.getElementById("feedbacktext").value;
    if(val.length>0){
        alert("Thank you for your valuable feedback!!!");
    }
});



