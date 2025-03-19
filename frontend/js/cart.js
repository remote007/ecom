const cartItemsContainer = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");

function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        cartItemsContainer.innerHTML += `
            <div>
                <h3>${item.name}</h3>
                <p>$${item.price} x ${item.quantity}</p>
                <button onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });

    totalPriceElement.textContent = total;
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

function checkout() {
    window.location.href = "checkout.html";
}

loadCart();
