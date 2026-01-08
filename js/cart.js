// Cart management functionality
class ShoppingCart {
    constructor() {
        this.items = this.loadCart();
    }

    loadCart() {
        const cartData = localStorage.getItem('cart');
        return cartData ? JSON.parse(cartData) : {};
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.items));
        this.updateCartIcon();
    }

    addItem(product) {
        if (this.items[product.id]) {
            this.items[product.id].quantity += 1;
        } else {
            this.items[product.id] = {
                ...product,
                quantity: 1
            };
        }
        this.saveCart();
    }

    removeItem(productId) {
        delete this.items[productId];
        this.saveCart();
    }

    updateQuantity(productId, quantity) {
        if (quantity <= 0) {
            this.removeItem(productId);
        } else {
            this.items[productId].quantity = quantity;
            this.saveCart();
        }
    }

    getTotalItems() {
        return Object.values(this.items).reduce((total, item) => total + item.quantity, 0);
    }

    getTotalCost() {
        return Object.values(this.items).reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getItems() {
        return Object.values(this.items);
    }

    clear() {
        this.items = {};
        this.saveCart();
    }

    updateCartIcon() {
        const cartCount = document.getElementById('cartCount');
        if (cartCount) {
            cartCount.textContent = this.getTotalItems();
        }
    }
}

// Initialize global cart instance
const cart = new ShoppingCart();

// Update cart icon on page load
document.addEventListener('DOMContentLoaded', () => {
    cart.updateCartIcon();
});
