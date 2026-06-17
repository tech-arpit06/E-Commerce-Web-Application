const products = [
{
    id:1,
    name:"Laptop",
    price:50000
},
{
    id:2,
    name:"Phone",
    price:20000
},
{
    id:3,
    name:"Headphones",
    price:3000
}
];

let cart = [];

const productDiv = document.getElementById("products");

products.forEach(product => {

    productDiv.innerHTML += `
    <div class="product">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${product.id})">
        Add To Cart
        </button>
    </div>
    `;
});

function addToCart(id){

    const product = products.find(p => p.id === id);

    cart.push(product);

    displayCart();
}

function displayCart(){

    let cartList = document.getElementById("cart");

    cartList.innerHTML = "";

    let total = 0;

    cart.forEach(item => {

        total += item.price;

        cartList.innerHTML += `<li>
        ${item.name} - ₹${item.price}
        </li>`;
    });

    document.getElementById("total").innerText = total;
}

function checkout(){

    alert("Order Placed Successfully!");
}