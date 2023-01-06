function onClickMenu(){
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("nav").classList.toggle("change");
}
var cartArr = JSON.parse(localStorage.getItem("cart-list")) || [];
console.log(document.querySelector(".child-second-section>p"));

