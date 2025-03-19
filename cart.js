document.addEventListener("DOMContentLoaded", function () {
    displayCartItems();
});

function displayCartItems() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = `<h4>Your cart is empty.</h4>`;
    } else {
        cart.forEach((item, index) => {
            cartItems.innerHTML += `<p>${index + 1}. ${item.name}</p>`;
        });
    }

    cartCount.textContent = cart.length;
}

