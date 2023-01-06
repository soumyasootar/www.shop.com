// const { stringify } = require("querystring");

let mensData = [ 
    { 
        image_url: 
            "https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg", 
        name: "MEN'S REEBOK SWIM ARUBA FLIP SLIPPERS ", 
        price: 699, 
        strikedoffprice: 999, 
    }, 
    { 
        image_url: 
            "https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg", 
        name: " MEN'S REEBOK RUNNING AUSTIN SHOES", 
        price: 945, 
        strikedoffprice: 2099, 
    }, 
    { 
        image_url: 
            "https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg", 
        name: "MEN'S REEBOK SWIM AVENGER FLIP LP SLIPPERS", 
        price: 399, 
        strikedoffprice: 799, 
    }, 
    { 
        image_url: 
            "https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg", 
        name: "MEN'S REEBOK RUNNING TEMPO SHOES ", 
        price: 1620, 
        strikedoffprice: 3599, 
    }, 
    { 
        image_url: 
            "https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg ", 
        name: " MEN'S REEBOK RUNNING ASTRO BOOSTER SHOES ", 
        price: 1440, 
        strikedoffprice: 3199, 
    }, 
    { 
        image_url: 
            "https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg ", 
        name: " MEN'S TRAINING WORKOUT READY ELITAGE PANTS ", 
        price: 1999, 
        strikedoffprice: 3199, 
    }, 
    { 
        image_url: 
            "https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg ", 
        name: "MEN'S REEBOK TRAINING  POLO T-SHIRTS TEE  ", 
        price: 769, 
        strikedoffprice: 1099, 
    }, 
    { 
        image_url: 
            "https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg", 
        name: "MEN'S REEBOK TRAINING WORKOUT  TEE  ", 
        price: 1299, 
        strikedoffprice: 1440, 
    }, 
    { 
        image_url: 
            "https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg ", 
        name: "MEN'S REEBOK SUPER SOFT FLIP SLIPPERS", 
        price: 699, 
        strikedoffprice: 999, 
    }, 
    { 
        image_url: 
            "https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg ", 
        name: "MEN'S REEBOK RUNNING RUN SHOES  ", 
        price: 1620, 
        strikedoffprice: 3599, 
    }, 
    { 
        image_url: 
            "https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg ", 
        name: "MEN'S REEBOK RUNNING GENESIS RUNNER SHOES  ", 
        price: 1620, 
        strikedoffprice: 3599, 
    }, 
    { 
        image_url: 
            "https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg  ", 
        name: "MEN'S REEBOK SWIM RUSSLE FLIP SLIPPERS  ", 
        price: 599, 
        strikedoffprice: 999, 
    }, 
    { 
        image_url: 
            " https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg ", 
        name: " MEN'S REEBOK RUNNING TREND RUNNER SHOES", 
        price: 1575, 
        strikedoffprice: 3499, 
    }, 
    { 
        image_url:"https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg  ", 
        name: "UNISEX REEBOK RUNNING ZIG KINETICA II SHOES  ", 
        price: 9999, 
        strikedoffprice: 12000, 
    }, 
    { 
        image_url: 
            "https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg  ", 
        name: " MEN'S REEBOK TRAINING BAS POLO TEE ", 
        price: 779, 
        strikedoffprice: 1299, 
    }, 
    { 
        image_url: 
            "https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg ", 
        name: "MEN'S REEBOK TRAINING FOUNDATION  PANTS  ", 
        price: 1019, 
        strikedoffprice: 1699, 
    }, 
    { 
        image_url: 
            " https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg ", 
        name: "MEN'S REEBOK TRAINING FOUNDATION PANTS  ", 
        price: 1019, 
        strikedoffprice: 1699, 
    }, 
    { 
        image_url: 
            " https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg ", 
        name: " MEN'S REEBOK RUNNING TREND SHOES", 
        price: 1575, 
        strikedoffprice: 3499, 
    }, 
    { 
        image_url: 
            " https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg  ", 
        name: "  MEN'S REEBOK RUNNING ZTAUR RUN SHOES ", 
        price: 3499, 
        strikedoffprice: 4999, 
    }, 
    { 
        image_url: 
            " https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg   ", 
        name: "MEN'S REEBOK SWIM ULTRA FLIP SLIPPERS   ", 
        price: 749, 
        strikedoffprice: 1499, 
    }, 
    { 
        image_url: 
            " https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg   ", 
        name: "  MEN'S REEBOK SWIM FLEX CONNECT SANDALS ", 
        price: 1149, 
        strikedoffprice: 2299, 
    }, 
    { 
        image_url: 
            "https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg  ", 
        name: " MEN'S REEBOK RUNNING GENESIS RUNNER SHOE  ", 
        price: 1620, 
        strikedoffprice: 3599, 
    }, 
    { 
        image_url: 
            "  https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg  ", 
        name: " MEN'S REEBOK TRAINING RUNNER SHORTS  ", 
        price: 779, 
        strikedoffprice: 1299, 
    }, 
    { 
        image_url: 
            "  https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg  ", 
        name: " MEN REEBOK CLASSICS TRACKSUIT HOODIE  ", 
        price: 3499, 
        strikedoffprice: 4999, 
    }, 
    { 
        image_url: 
            "  https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg  ", 
        name: "MEN'S REEBOK CLASSIC TRACKSUIT GOLF HOODIE   ", 
        price: 3499, 
        strikedoffprice: 4999, 
    }, 
    { 
        image_url: 
            " https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg   ", 
        name: " UNISEX REEBOK TRAINING ACTIVE  BAG ", 
        price: 1399, 
        strikedoffprice: 2799, 
    }, 
    { 
        image_url: 
            "https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg  ", 
        name: " MEN'S REEBOK RUNNING TREND RUNNER SHOES", 
        price: 1575, 
        strikedoffprice: 3499, 
    }, 
    { 
        image_url: 
            "https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg ", 
        name: "UNISEX REEBOK CLASSICS  BASKETBALL SHOES", 
        price: 3919, 
        strikedoffprice: 5599, 
    }, 
    { 
        image_url: 
            "https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg ", 
        name: "MEN'S REEBOK RUNNING RUN FUSION  SHOES", 
        price: 1620, 
        strikedoffprice: 3599, 
    }, 
    { 
        image_url: 
            "https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg ", 
        name: "MEN'S REEBOK RUNNING QUICK DRIFTER SHOES", 
        price: 1620, 
        strikedoffprice: 3599, 
    }, 
    { 
        image_url: 
            "https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg ", 
        name: "MEN'S REEBOK DYNAMIC ZIGZAG SHOES", 
        price: 7599, 
        strikedoffprice: 9999, 
    }, 
    { 
        image_url: 
            "https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg ", 
        name: "MEN'S REEBOK SWIM SUPERSOFT FLIP SLIPPERS", 
        price: 909, 
        strikedoffprice: 1299, 
    }, 
    { 
        image_url: 
            "https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg ", 
        name: "MEN'S REEBOK TRAINING ACTIVE BASIC POLO TEE", 
        price: 779, 
        strikedoffprice: 1299, 
    }, 
    { 
        image_url: 
            "https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg ", 
        name: "MEN'S REEBOK TRAINING ACTIVE MOVE TEE ", 
        price: 1749, 
        strikedoffprice: 2499, 
    }, 
    { 
        image_url: 
            "https://m.media-amazon.com/images/I/71TawoxTk6L._UY500_.jpg ", 
        name: "MEN'S REEBOK FITNESS TRAINING  SWEATSHIRT", 
        price: 1079, 
        strikedoffprice: 1799, 
    }
]


var temp_arr=[
    { 
        img: "https://img.shop.com/Image/240000/243300/243380/products/1942133519.jpg?plain&size=750x750", 
    name: "Motives® X Amber Essential Collection", 
    soldBy: "Sold by Motives® Cosmetics", 
    strikedprice: "80.00", 
    price: "40.00", 
    ratio: "+ up to $3.00 / 8% Cashback", 
    shipping: "Free shipping with $50.00 orders", 
    category:"makeup" 
}, 
{ 
        img: "https://img.shop.com/Image/240000/243300/243380/products/536366005.jpg?plain&size=750x750",
        name: "Motives® Liquid Powder Mineral Foundation with SPF 15", 
        soldBy: "Sold by Motives® Cosmetics", 
        strikedprice: "35.00", 
        price: "15.00", 
        ratio: "+  $2.40 / 3% Cashback", 
        shipping: "Free shipping with $40.00 orders", 
        category:"makeup" 
    }, 
    { 
        img: "https://img.shop.com/Image/240000/243300/243380/products/1932836050.jpg?plain&size=750x750", 
        name: "Sold by Motives® Cosmetics", 
        soldBy: " Sold by Cutter & Buck", 
        strikedprice: "35.00", 
        price: "30.00", 
        ratio: "+ up to $1.22 / 2% Cashback", 
        shipping: "Free shipping with $40.00 orders", 
        category:"makeup" 
    }, 
    { 
        img:"https://img.shop.com/Image/240000/243300/243380/products/1943082936.jpg?plain&size=750x750", 
        name: "Motives® LALA Pop of LALA Pressed Pigment Palette", 
        soldBy: " Sold by Motives® Cosmetics", 
        strikedprice: "45.00", 
        price: "40.00", 
        ratio: "+ up to $1.22 / 2% Cashback", 
        shipping: "Free shipping with $40.00 orders", 
        category:"makeup" 
    }
];

localStorage.setItem("cart-list",JSON.stringify(temp_arr));



let cart_product_arr = JSON.parse(localStorage.getItem("cart-list"));

showdata(cart_product_arr);
total_price()




function showdata(mensData){
    document.querySelector(".cart-product").textContent = "";
    mensData.map(function(elem,index){
        elem.quantity = 1;
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
}

let subtotal = 0;
function total_price(){
    let subtotal = cart_product_arr.reduce(function(elem,curr){
        return elem + Number(curr.price);
    },0)
    document.getElementById("totalprice").innerText = `$${subtotal}`;
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



        