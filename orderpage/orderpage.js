let cart_product_arr = JSON.parse(localStorage.getItem("order-list1"))||[];

showdata(cart_product_arr);

function showdata(mensData){
    document.querySelector(".cart-product").textContent = "";
    mensData.map(function(elem,index){
        localStorage.setItem("cart-list",JSON.stringify(cart_product_arr)); 
        let div = document.createElement("div");
        div.setAttribute("class","product-box")
        div.innerHTML = 
        `<div id="sub-cart-product">
        <div id="cart-product-imgdiv"><img id="cart-product-img" src=${elem.img} alt="product"></div>
        <div class="product-detail">
        <h3 class="product-name">${elem.name}</h3>
        <h3 class="price">$ ${elem.price}</h3>
        <div class="price-detail">
        <p> +  $2.10</p>
        <img src="https://img.shop.com/Image/resources/images/cashback-icon.svg" alt="dollar sign">
                <p>Cashback</p>
            </div>
            <p>Item#: 190777978227</p>
            <p>Sold by: ${elem.soldBy}</p>
            <p>Category: ${elem.category}</p>
            <div id="quantity-div">
            <p>Quantity : ${elem.quantity}</p>
            </div>
            </div>
            
            </div>`
            
            document.querySelector(".cart-product").append(div);
            
        })
        
    }


