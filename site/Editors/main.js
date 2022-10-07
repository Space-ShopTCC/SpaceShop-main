// cart
let cartIcon = document.querySelector('#cart-icon');
let carrinho = document.querySelector('.carrinho');
let closeCart = document.querySelector('#close-cart');
//abrir carrinho
cartIcon.onclick = () => {
    carrinho.classList.add('active');
}
//fechar carrinho
closeCart.onclick = () => {
    carrinho.classList.remove('active');
}

//carrinho trabalhando js
if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready); 
}else{
    ready();
}

// fazer a funçao
function ready(){
    //remove itens from cart
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    console.log(removeCartButtons);
    for(var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);

    }
    // quantity changes
    var quantityInputs = document.getElementsByClassName('carrinho-quantity')
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
    //add to cart
    var addCart = document.getElementsByClassName('add-cart');
    for (var i = 0; i < addCart.length; i++) {
        var button = addCart[i];
        button.addEventListener("click", addCartClicker)
    }
}

//remove intens from cart
function removeCartItem(event) {
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

//updade total
function updatetotal(){
    var carrinhoContent = document.getElementsByClassName('carrinho-content')[0];
    var carrinhoBoxes = carrinhoContent.getElementsByClassName('carrinho-box');
    var total = 0;
    for (var i = 0; i < carrinhoBoxes.length; i++){
        var carrinhoBox = carrinhoBoxes[i];
        var carrinhoBox = carrinhoBox.getElementsByClassName('carrinho-price')[0];
        var quantityElement = carrinhoBox.getElementsByClassName('carrinho-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
         total = total + (price * quantity);
// se o preço contem soma
        total = Math.round(total * 100) / 100;


        document.getElementsByClassName('total-price')[0].innerText = "$" + total;
    }
}

//login

var formSingnin = document.querySelector('#signin')
var formSingnup = document.querySelector('#signup')
var btnColor = document.querySelector('.btnColor')

document.querySelector('#bntSignin')
.addEventListener('click', () => {
    formSingnin.style.left = "25px"
    formSingnup.style.left = "450px"
    btnColor.style.left = "0px"
})

document.querySelector('#bntSignup')
.addEventListener('click', () => {
    formSingnin.style.left = "-450px"
    formSingnup.style.left = "25px"
    btnColor.style.left = "110px"
})





