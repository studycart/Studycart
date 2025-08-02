document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.querySelector('.product-grid');
    const searchBar = document.getElementById('search-bar');

    // --- Product Data ---
    // In a real application, this would come from a database.
    const products = [];
    for (let i = 1; i <= 20; i++) {
        products.push({
            id: i,
            title: `Study Material Pack ${i}`,
            price: 50.00,
            // You will need to generate a UNIQUE PayU link for EACH product.
            // For now, we use '#' as a placeholder.
            payuLink: '#'
        });
    }

    // --- Function to display products ---
    function displayProducts(productsToDisplay) {
        productGrid.innerHTML = ''; // Clear existing products
        productsToDisplay.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <div class="product-image">
                    <span>Image Placeholder</span>
                </div>
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">₹${product.price.toFixed(2)}</p>
                <div class="product-buttons">
                    <a href="product_page.html" class="btn btn-secondary">View Details</a>
                    <a href="${product.payuLink}" class="btn btn-primary">Buy Now</a>
                </div>
            `;
            productGrid.appendChild(productCard);
        });
    }

    // --- Search Functionality ---
    searchBar.addEventListener('keyup', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredProducts = products.filter(product => {
            return product.title.toLowerCase().includes(searchTerm);
        });
        displayProducts(filteredProducts);
    });

    // --- Initial display of all products ---
    displayProducts(products);
});
