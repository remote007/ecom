document.getElementById("checkout-form").addEventListener("submit", function(event) {
    event.preventDefault();
    localStorage.removeItem("cart");
    window.location.href = "order.html";
});
