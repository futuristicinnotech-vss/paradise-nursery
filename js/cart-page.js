// Shopping cart page functionality
document.addEventListener('DOMContentLoaded', () => {
    renderCart();
    setupCheckoutButton();
});

function renderCart() {
    const cartContainer = document.getElementById('cartContainer');
    const cartActions = document.getElementById('cartActions');
    const totalItems = document.getElementById('totalItems');
    const totalCost = document.getElementById('totalCost');
    
    const items = cart.getItems();
    
    if (items.length === 0) {
        cartContainer.innerHTML = '<p class="empty-cart-message">Your cart is empty. <a href="products.html">Continue shopping</a></p>';
        cartActions.style.display = 'none';
        totalItems.textContent = '0';
        totalCost.textContent = '$0.00';
    } else {
        cartContainer.innerHTML = items.map(item => createCartItemElement(item)).join('');
        cartActions.style.display = 'flex';
        
        // Add event listeners for quantity controls
        items.forEach(item => {
            const decreaseBtn = document.querySelector(`[data-decrease="${item.id}"]`);
            const increaseBtn = document.querySelector(`[data-increase="${item.id}"]`);
            const quantityInput = document.querySelector(`[data-quantity="${item.id}"]`);
            const deleteBtn = document.querySelector(`[data-delete="${item.id}"]`);
            
            if (decreaseBtn) {
                decreaseBtn.addEventListener('click', () => {
                    const newQuantity = item.quantity - 1;
                    if (newQuantity > 0) {
                        cart.updateQuantity(item.id, newQuantity);
                    } else {
                        cart.removeItem(item.id);
                    }
                    renderCart();
                });
            }
            
            if (increaseBtn) {
                increaseBtn.addEventListener('click', () => {
                    cart.updateQuantity(item.id, item.quantity + 1);
                    renderCart();
                });
            }
            
            if (quantityInput) {
                quantityInput.addEventListener('change', (e) => {
                    const newQuantity = parseInt(e.target.value) || 1;
                    if (newQuantity > 0) {
                        cart.updateQuantity(item.id, newQuantity);
                        renderCart();
                    } else {
                        e.target.value = item.quantity;
                    }
                });
            }
            
            if (deleteBtn) {
                deleteBtn.addEventListener('click', () => {
                    cart.removeItem(item.id);
                    renderCart();
                });
            }
        });
        
        // Update totals
        totalItems.textContent = cart.getTotalItems();
        totalCost.textContent = '$' + cart.getTotalCost().toFixed(2);
    }
}

function createCartItemElement(item) {
    const itemTotal = (item.price * item.quantity).toFixed(2);
    
    return `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h3 class="cart-item-name">${item.name}</h3>
                <p class="cart-item-unit-price">Unit Price: $${item.price.toFixed(2)}</p>
                <p class="cart-item-total">Total: $${itemTotal}</p>
            </div>
            <div class="cart-item-controls">
                <div class="quantity-control">
                    <button data-decrease="${item.id}">−</button>
                    <input type="number" data-quantity="${item.id}" value="${item.quantity}" min="1">
                    <button data-increase="${item.id}">+</button>
                </div>
                <button class="btn btn-danger btn-sm" data-delete="${item.id}">Delete</button>
            </div>
        </div>
    `;
}

function setupCheckoutButton() {
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.getTotalItems() > 0) {
                alert('Thank you for your purchase! Total: $' + cart.getTotalCost().toFixed(2) + '\n\nOrder has been placed successfully.');
                cart.clear();
                renderCart();
            }
        });
    }
}
