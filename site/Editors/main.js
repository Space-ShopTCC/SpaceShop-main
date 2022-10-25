//cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".carrinho");
let closeCart = document.querySelector("#close-cart");
// abrir carrinho
cartIcon.onclick = () =>{
    cart.classList.add("active");
}
//fechar carrinho
closeCart.onclick = () =>{
    cart.classList.remove("active");
}


//carrinho trabalhando JS
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

//fazer função
function ready(){
    //Remove Itens do carrinho
    var reomveCartButtons = document.getElementsByClassName("cart-remove");
    console.log(reomveCartButtons);
    for (var i = 0; i < reomveCartButtons.length; i++) {
        var button = reomveCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }
    //quantity changes
    var quantityInputs = document.getElementsByClassName("carrinho-quantity");
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
// adicionar ao carrinho
   var addToCartButtons = document.getElementsByClassName('btncart')
   for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
   }
    }


// Remove itens do carrinho
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}
//quantity changes
function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updatetotal();
}
// adicionar ao carrinho
 function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('tituloProduto')[0].innerText
    var price = shopItem.getElementsByClassName('ProductPrice')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('singleProImage')[0].src;
    console.log(title, price, imageSrc)
    addItemToCart(title,price, imageSrc)
    updatetotal()
 }

 function addItemToCart(title, price, imageSrc) {
    var cartShopBox = document.createElement('div')
    cartShopBox.classList.add('carrinho-box')
    var cartItems = document.getElementsByClassName('carrinho-content')[0]
    var cartItemsNames = cartItems.getElementsByClassName('carrinho-product-title')
    for (var i = 0; i < cartItemsNames.length; i++){
        alert("esse produto já esta no carrinho")
        return;
    }
 }

 var cardBoxContent = `
 <img src="../assets/Categoria Anime/camiseta/camiseta 1.png" alt="" class="carrinho-img"> 
 <div class="detail-box">
     <div class="carrinho-product-title">Calça jeans do Katsuki Bakugo</div>
     <div class="carrinho-price"><R145>$0</R145></div>
     <input type="number" value="1" class="carrinho-quantity">
 </div>
 <i class="fa-solid fa-trash cart-remove"></i>`

cartShopBox.innerHTML = cardBoxContent
cartItems.append(cartShopBox)
cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem)
cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('change', quantityChanged)

//update total
function updatetotal(){
    var cartContent = document.getElementsByClassName('carrinho-content')[0];
    var cartBoxes = cartContent.getElementsByClassName("carrinho-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElemet = cartBox.getElementsByClassName("carrinho-price")[0];
        var quantityElement = cartBox.getElementsByClassName("carrinho-quantity")[0];
        var price = parseFloat(priceElemet.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total= total + (price * quantity);
        // se o preço contem alguns centavos
        total = Math.round(total * 100) / 100;


        document.getElementsByClassName("total-price")[0].innerText = "$" + total;
    }
}

