document.addEventListener("DOMContentLoaded", () => {
    const orderMessage = document.getElementById("order-message");

    // Check if the user has completed a purchase
    const orderSuccess = localStorage.getItem("order-success");

    if (orderSuccess) {
        orderMessage.textContent = "🎉 Your order has been placed successfully!";
        localStorage.removeItem("order-success"); // Clear success flag after showing message
    } else {
        orderMessage.textContent = "❌ No recent order found!";
    }
});
