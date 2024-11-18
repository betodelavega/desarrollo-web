document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const clearCartButton = document.getElementById('clear-cart');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
  
    let cart = [];
  
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));
  
        addItemToCart(name, price);
        displayCart();
      });
    });
  
    clearCartButton.addEventListener('click', () => {
      cart = [];
      displayCart();
    });
  
    function addItemToCart(name, price) {
      for (let item of cart) {
        if (item.name === name) {
          item.quantity++;
          return;
        }
      }
      cart.push({ name, price, quantity: 1 });
    }
  
    function displayCart() {
      cartItems.innerHTML = '';
      let total = 0;
  
      for (let item of cart) {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItems.appendChild(li);
        total += item.price * item.quantity;
      }
  
      cartTotal.textContent = total.toFixed(2);
    }
  });