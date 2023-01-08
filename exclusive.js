var brand = [

    {
        img:
            "https://img.shop.com/Image/Images/11module/MABrands/global-care-us-logo.svg",
        

    },
    {
        img:
            "https://img.shop.com/Image/Images/11module/MABrands/prime-usca-hk-logo.svg",
           
    },
    {
        img:
            "https://img.shop.com/Image/Images/11module/MABrands/ultimate-aloe-usca-hk-logo.svg",
           
    },
    {
        img:
            "https://img.shop.com/Image/Images/11module/MABrands/advanced-level-90-us-logo.svg",
       
    },
    {
        img:
            "https://img.shop.com/Image/Images/11module/MABrands/bliss-new-us-logo.svg",
        
    },
    {
        img:
            "https://img.shop.com/Image/Images/11module/MABrands/glucosatrin-usca-au-logo.svg",
        
    },

    {
        img:
            "https://img.shop.com/Image/Images/11module/MABrands/isotonix-custom-cocktail-us-logo.svg",
           
    },
    {
        img:
            "https://img.shop.com/Image/Images/11module/MABrands/mpc-us-logo.svg",
        
    },
    {
        img:
            "https://img.shop.com/Image/Images/11module/MABrands/nutri-physical-us-logo.svg",
          
    },
    {
        img:
            "https://img.shop.com/Image/Images/11module/MABrands/curcumin-extreme-usca-hk-sg-logo.svg",
           
    },
    {
        img:
            "https://img.shop.com/Image/Images/11module/MABrands/awake-us-logo.svg",
            
    },
    {
        img:
            "https://img.shop.com/Image/Images/11module/MABrands/opc3Chews_usa_32979_LogoTreatment_200x75.svg",
       
    },
    {
        img:
            "https://img.shop.com/Image/Images/11module/MABrands/pet-health-usca-hk-sg-logo.svg",
         

    },
    {
        img:
            "https://img.shop.com/Image/Images/11module/MABrands/cannabicool-logo-tm.svg",
       
        
    },
    {
        img:
            "https://img.shop.com/Image/Images/11module/MABrands/pure-H2O-usca-hk-tw-logo.svg",
        
    },
    {
        img:
            "https://img.shop.com/Image/Images/11module/MABrands/friction-free-3000-usca-tw-logo.svg",
        
    },
    {
        img:
            "https://img.shop.com/Image/Images/11module/MABrands/autoworks-usca-tw-logo.svg",
        
    },
   

];
displayfun(brand);



function displayfun(q) {
    document.querySelector("#product-container").innerHTML = "";
    q.map(function (elem, i) {
        var box = document.createElement("div");

        var im = document.createElement("img");
        im.setAttribute("src", elem.img);

    
        box.append(im);
        document.getElementById("product-container").append(box);


    });
}
var count = localStorage.getItem("cartcount") || 0;
document.querySelector(".cart-count").innerText = count;



/* <!-- -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= --> */
function onClickMenu() {
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("nav").classList.toggle("change");
}
/* <!-- -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= --> */
document.querySelector(".logo").addEventListener("click",function(){
    window.open("project.html");
});

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
    }
    else if (key.includes("ELECTRONICS")) {
        window.open("electronic.html", "_self");
        document.querySelector("#search").value = "";
    }else if(key.includes("SPORTS")){
        window.open("sports.html","_self");
        document.querySelector("#search").value="";
    }else{
        alert("item not found");
    }
}
//username
document.querySelector("#user-name").textContent=JSON.parse(localStorage.getItem("userName"))||"Sign In"


// microphone
const button = document.querySelector('#mic');
const textInput = document.querySelector('#search');

button.addEventListener('click', () => {
  const recognition = new webkitSpeechRecognition();
  recognition.onresult = event => {
    textInput.value = event.results[0][0].transcript;
  };
  recognition.start();
}); 