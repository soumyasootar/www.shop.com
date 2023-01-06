function onClickMenu(){
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("nav").classList.toggle("change");
}
var cartArr = JSON.parse(localStorage.getItem("cart-list")) || [];


