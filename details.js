var arr=JSON.parse(localStorage.getItem("detail"));
displaydetails();

function displaydetails(){
    arr.map(function(elem){
        var im=document.createElement("img");
        im.setAttribute('src',elem.img);

        var na=document.createElement("h1");
        na.innerText=elem.name;

        var sb=document.createElement("p");
        sb.innerText=elem.soldBy;
        sb.style.fontSize="12px";
        sb.style.marginTop="-20px";

        var rv=document.createElement("p");
        rv.innerText="Write a Review";
        rv.style.fontSize="10px";

        var stp=document.createElement("p");
        stp.innerText=elem.strikedprice;
        stp.style.textDecoration="line-through";

        var save=document.createElement("p");

        var sp1=document.createElement("span");
        sp1.innerText="You Save";
        sp1.style.marginRight="10px";

        var sp2=document.createElement("span");
        sp2.innerText="$130.01 (86%)";
        sp2.style.color="#202340";
        sp2.style.fontWeight="700";
        sp2.setAttribute("id","saving");
        save.append(sp1,sp2);

        var cbp = document.createElement("p");
        

        var pr=document.createElement("span");
        pr.innerText="$"+elem.price;
        pr.setAttribute("id","price");
        var rato = document.createElement("span");
        rato.innerText = elem.ratio;
        rato.style.fontSize="10px";
        //rato.style.marginRight = "5px";
        var logo2 = document.createElement("img");
        logo2.setAttribute("src", "https://img.shop.com/Image/resources/images/cashback-icon.svg");
       //logo2.setAttribute("class", "dollar");
        logo2.style.height = "13px";
        logo2.style.width = "13px";
        var cb = document.createElement("span");
        cb.innerText = "Cashback";
        cb.style.fontSize="10px";
        cbp.append(pr,rato, logo2, cb);



        var hr1=document.createElement("hr");
        hr1.style.marginBottom="-10px";
        var line=document.createElement("p");

        var lsp1=document.createElement("span");
        lsp1.innerText="or 4 interest-free payments of";
        lsp1.style.marginRight="5px";
        var lsp2=document.createElement("span");
        lsp2.innerText="$5.00";
        lsp2.style.marginRight="5px";
        lsp2.setAttribute("class","lprice");
        var lsp3=document.createElement("span");
        lsp3.innerText="with";
        lsp3.style.marginRight="5px";
        var limg=document.createElement("img");
        limg.setAttribute("src","https://media.sezzle.com/branding/2.0/Sezzle_Logo_FullColor.svg");
        limg.style.marginRight="10px";
        limg.style.height = "30px";
        limg.style.width = "30px";
        
        var lsp4=document.createElement("span");
        lsp4.innerText="for orders over";
        lsp4.style.marginRight="5px";
        var lsp5=document.createElement("span");
        lsp5.innerText="$35";
        lsp5.setAttribute("class","lprice");
        line.append(lsp1,lsp2,lsp3,limg,lsp4,lsp5);
        var hr2=document.createElement("hr");

        var line2=document.createElement("p");
        line2.setAttribute("class","center");

        var bitimg=document.createElement("img");
        bitimg.setAttribute("src","https://bitpay.com/cdn/merchant-resources/bitpay-accepted-card-group.svg");
        bitimg.setAttribute("class","bit");
        var l2sp=document.createElement("span");
       
        l2sp.innerText="Now accepting Crypto at Checkout!";
        line2.append(bitimg,l2sp);

        var box=document.createElement("div");
        box.setAttribute("id","cart");
        var stock=document.createElement("p");
        stock.innerText="Only 1 left in stock. Order now!";
        var btn=document.createElement("button");
        btn.innerText="Add to Cart";
        box.append(stock,btn);
        btn.addEventListener("click",function(){
            cart(elem);
        });
        document.querySelector("#image").append(im);
        document.querySelector("#dt").append(na,sb,rv,stp,save,cbp,hr1,line,hr2,line2,box);

    });
}

var cartArr=JSON.parse(localStorage.getItem("cart-list")) || [];
var count=localStorage.getItem("cartcount") || 0;
document.querySelector(".cart-count").innerText = count;

function cart(elem){
    cartArr.push(elem);
    count++;
    document.querySelector(".cart-count").innerText=count;
    localStorage.setItem("cart-list",JSON.stringify(cartArr));
    localStorage.setItem("cartcount",count);
}

/* <!-- -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= --> */
function onClickMenu() {
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("nav").classList.toggle("change");
}