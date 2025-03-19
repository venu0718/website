document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get("category");

    if (category) {
        loadProducts(category);
        document.getElementById("category-title").textContent = formatCategoryName(category);
    }

    updateCartCount();
});

// Function to Load Products
function loadProducts(category) {
    const products = {
        menswear: [
            { name: "Casual Shirt", price: "₹2000", image: "image3.jpg" },
            { name: "Formal Shirt", price: "₹2500", image: "image2.jpg" },
            { name: "T-Shirt", price: "₹1500", image: "tshirt.jpg" },
            { name: "Jacket", price: "₹4000", image: "image5.jpg" },
            { name: "Jeans", price: "₹3500", image: "image4.jpg" }
        ],
        womenswear: [
            { name: "Kurti", price: "₹1800", image: "kurthi.jpg" },
            { name: "Saree", price: "₹5000", image: "saree.jpg" },
            { name: "Dress", price: "₹3500", image: "dress.jpg" },
            { name: "Leggings", price: "₹900", image: "leggin.jpg" },
            { name: "Gown", price: "₹4500", image: "gown.jpg" }
        ],
        kidswear: [
            { name: "T-Shirt", price: "₹700", image: "child tshirt.jpg" },
            { name: "Jeans", price: "₹1500", image: "jeans.jpg" },
            { name: "Sweater", price: "₹1800", image: "sweater.jpg" },
            { name: "Shorts", price: "₹1200", image: "short.jpg" },
            { name: "Jumpsuit", price: "₹2200", image: "jump.jpg" }
        ],
        electronics: [
            { name: "Laptop", price: "₹60,000", image: "laptop.jpg" },
            { name: "Smartphone", price: "₹40,000", image: "phone.jpg" },
            { name: "Headphones", price: "₹3,500", image: "headphones.jpg" },
            { name: "Smartwatch", price: "₹8,000", image: "watch.jpg" },
            { name: "Tablet", price: "₹25,000", image: "tablet.jpg" }
        ],
        beauty: [
            { name: "Face Cream", price: "₹500", image: "cream.jpg" },
            { name: "Perfume", price: "₹1,500", image: "perfume.jpg" },
            { name: "Lipstick", price: "₹900", image: "lipstick.jpg" },
            { name: "Face Mask", price: "₹700", image: "mask.jpg" },
            { name: "Hair Oil", price: "₹600", image: "oil.jpg" }
        ],
        kitchen: [
            { name: "Mixer Grinder", price: "₹4,500", image: "mixer.jpg" },
            { name: "Dinner Set", price: "₹3,000", image: "set.jpg" },
            { name: "Pressure Cooker", price: "₹2,800", image: "cooker.jpg" },
            { name: "Juicer", price: "₹3,500", image: "juice.jpg" },
            { name: "Toaster", price: "₹2,000", image: "toaster.jpg" }
        ]
    };

    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    if (products[category]) {
        products[category].forEach(product => {
            productList.innerHTML += `
                <div class="col-md-3">
                    <div class="card mb-4">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-body text-center">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">${product.price}</p>
                            <button class="btn btn-success add-to-cart" 
                                    data-name="${product.name}" 
                                    data-price="${product.price}" 
                                    data-image="${product.image}">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });

        document.querySelectorAll(".add-to-cart").forEach(button => {
            button.addEventListener("click", function () {
                const name = this.getAttribute("data-name");
                const price = this.getAttribute("data-price");
                const image = this.getAttribute("data-image");
                addToCart(name, price, image);
            });
        });
    } else {
        productList.innerHTML = `<h4 class="text-center text-danger">No products found.</h4>`;
    }
}

// Function to Add Items to Cart
function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price, image });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} has been added to the cart!`);
    updateCartCount();
}

// Function to Update Cart Count in Navbar
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").textContent = cart.length;
}
