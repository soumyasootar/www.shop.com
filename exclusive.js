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



