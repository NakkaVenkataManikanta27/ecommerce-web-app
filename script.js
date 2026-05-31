function addToCart(product) {
    let li = document.createElement("li");
    li.textContent = product;
    document.getElementById("cartItems").appendChild(li);
}

function checkout() {
    alert("Order placed successfully!");
}
