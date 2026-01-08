// Products page functionality
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});

function renderProducts() {
    // Get all category containers
    const categories = Object.keys(productsData);
    
    categories.forEach(categoryId => {
        const container = document.getElementById(categoryId);
        if (container) {
            const products = productsData[categoryId];
            container.innerHTML = products.map(product => createProductCard(product)).join('');
            
            // Add event listeners to the add to cart buttons
            container.querySelectorAll('.add-to-cart-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const productId = e.target.dataset.productId;
                    const product = findProductById(parseInt(productId));
                    if (product) {
                        cart.addItem(product);
                        showAddedToCartNotification(e.target);
                    }
                });
            });
        }
    });
}

function createProductCard(product) {
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="btn btn-primary btn-sm add-to-cart-btn" data-product-id="${product.id}">
                    Add to Cart
                </button>
            </div>
        </div>
    `;
}

function findProductById(id) {
    // Search through all categories to find the product
    for (const categoryId in productsData) {
        const product = productsData[categoryId].find(p => p.id === id);
        if (product) {
            return product;
        }
    }
    return null;
}

function showAddedToCartNotification(button) {
    const originalText = button.textContent;
    button.textContent = 'Added!';
    button.disabled = true;
    button.style.backgroundColor = '#27ae60';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        button.style.backgroundColor = '';
    }, 1500);
}
