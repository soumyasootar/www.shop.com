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

//function image

document.querySelector("#poster").addEventListener("click",function(){
        window.open("clothe.html","_self");
});

//feedback
document.getElementById("submitfeedback").addEventListener("click",function(){
    let val=document.getElementById("feedbacktext").value;
    if(val.length>0){
        alert("Thank you for your valuable feedback!!!");
    }
});

