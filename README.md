# Paradise Nursery - Shopping Application

A modern, responsive houseplant shopping application built with vanilla HTML, CSS, and JavaScript. Browse a variety of plants organized by category, add them to your shopping cart, and proceed to checkout.

## Features

- **Landing Page**: Welcome page with company information and call-to-action button
- **Product Listing**: Browse plants organized into multiple categories:
  - Tropical Plants
  - Succulents
  - Flowering Plants
  - Foliage Plants
- **Shopping Cart**: 
  - View all items in cart with images, prices, and quantities
  - Adjust quantities with increment/decrement buttons
  - Delete items from cart
  - Real-time total cost calculation
  - Cart badge in header showing total items
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Persistent Storage**: Cart data is saved to localStorage and persists across sessions

## Project Structure

```
paradise-nursery/
├── index.html              # Landing page
├── products.html           # Product listing page
├── cart.html              # Shopping cart page
├── css/
│   └── styles.css         # All page styles
├── js/
│   ├── cart.js            # Cart management class
│   ├── products-data.js   # Product data
│   ├── products.js        # Products page functionality
│   └── cart-page.js       # Cart page functionality
├── assets/                # Directory for images (if needed)
└── README.md             # This file
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/paradise-nursery.git
cd paradise-nursery
```

2. Open `index.html` in your web browser to view the application

## Usage

1. **Landing Page**: Click "Get Started" to browse plants
2. **Product Listing**: 
   - Browse plants by category
   - Click "Add to Cart" to add items
   - View cart count in the header
3. **Shopping Cart**:
   - View all cart items with details
   - Adjust quantities using +/- buttons
   - Delete items if needed
   - Click "Proceed to Checkout" to complete purchase

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Media Queries)
- Vanilla JavaScript (ES6+)
- LocalStorage API for data persistence

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

This project is deployed using GitHub Pages. Visit the live site at:
https://yourusername.github.io/paradise-nursery/

## License

This project is open source and available under the MIT License.

## Author

Created as a shopping application project demonstrating modern web development practices.
