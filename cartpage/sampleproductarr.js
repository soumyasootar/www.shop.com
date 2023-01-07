let cart_product_arr = JSON.parse(localStorage.getItem("cart-list"))||[];
total_price()

showdata(cart_product_arr);
function proceedtopayment(){
    window.open("../Payment/address.html","_self")
}
function showdata(mensData){
    document.querySelector(".cart-product").textContent = "";
    mensData.map(function(elem,index){
        if(!(elem.quantity!=null&&elem.quantity>1)){
            elem.quantity = 1;
        }
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
                <p>Quantity</p>
                <select name="quantity" id="quantity-count">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
        </div>
        <button id="save-for-later">Save for Later</button>
        <button id="remove-cart" >Remove</button>
        </div>`

        document.querySelector(".cart-product").append(div);

 

        div.querySelector("#remove-cart").addEventListener("click",function(){
            // console.log("entered");
            removeItem(elem,index);
            
        });

        div.querySelector("#quantity-count").addEventListener("change",function(){
            // console.log("entered");
            quantity(elem,index,div)
            
        });
        
    })

}



function removeItem(elem,index){
    event.preventDefault();
    cart_product_arr.splice(index,1);   
    localStorage.setItem("cart-list",JSON.stringify(cart_product_arr)); 
    showdata(cart_product_arr);
    subtotal = cart_product_arr.reduce(function(elem1,curr){
        localStorage.setItem("local-subtotal",JSON.stringify((Number(elem1) + (Number(curr.price)*Number(curr.quantity)))))
        return Number(elem1) + (Number(curr.price)*Number(curr.quantity));
    },0)
    console.log(JSON.parse(localStorage.getItem("local-subtotal")));
    document.getElementById("totalprice").innerText = `$${subtotal}`;
}
let subtotal = JSON.parse(localStorage.getItem("local-subtotal"))||0;
function total_price(){
    let subtotal = cart_product_arr.reduce(function(elem,curr){
        return elem + Number(curr.price);
    },0)
    document.getElementById("totalprice").innerText = `$${subtotal}`;
    localStorage.setItem("local-subtotal",subtotal)
}

function quantity(elem,index,div){
    let quantity = div.querySelector("#quantity-count").value;
    elem.quantity = Number(quantity);
    console.log(elem)
    localStorage.setItem("cart-list",JSON.stringify(cart_product_arr)); 
    subtotal = cart_product_arr.reduce(function(elem1,curr){
        localStorage.setItem("local-subtotal",JSON.stringify((Number(elem1) + (Number(curr.price)*Number(curr.quantity)))))
        return Number(elem1) + (Number(curr.price)*Number(curr.quantity));
    },0)
    console.log(JSON.parse(localStorage.getItem("local-subtotal")));
    document.getElementById("totalprice").innerText = `$${subtotal}`;
}

//username
document.querySelector("#user-name1").textContent=JSON.parse(localStorage.getItem("userName"))||"Sign In"

        