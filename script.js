// Cart functionality
const cartItems = [];

function addToCart(item) {
  cartItems.push(item);
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';

  let total = 0;

  for (const item of cartItems) {
    const li = document.createElement('li');
    li.textContent = item.name + ' - $' + item.price;
    cartList.appendChild(li);
    total += item.price;
  }

  const totalElement = document.getElementById('cart-total');
  totalElement.textContent = 'Total: $' + total;
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
  const orderButtons = document.getElementsByClassName('order-btn');
  for (const button of orderButtons) {
    button.addEventListener('click', function() {
      const restaurantName = button.parentNode.querySelector('h3').textContent;
      const itemPrice = 10; // Placeholder price
      addToCart({ name: restaurantName, price: itemPrice });
    });
  }

  const checkoutButton = document.getElementById('checkout-btn');
  checkoutButton.addEventListener('click', function() {
    alert('Thank you for your order! your order will be delivered soon..');
    cartItems.length = 0; // Empty the cart
    updateCart();
  });
});
