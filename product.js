function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Add product to cart
    cart.push({ name, price, image });

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Show an alert and update the cart count
    alert(`${name} has been added to the cart!`);
    updateCartCount();
}
