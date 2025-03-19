const products = [
    { id: 1, name: "Laptop", price: 999, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Phone", price: 599, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Headphones", price: 199, image: "https://via.placeholder.com/150" }
];

const productContainer = document.getElementById("products");

products.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>
    `;
    productContainer.appendChild(div);
});

function addToCart(id, name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let product = cart.find(item => item.id === id);
    if (product) {
        product.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
}
