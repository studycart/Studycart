document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.querySelector('.product-grid');
    const searchBar = document.getElementById('search-bar');

    // Using the specific PayU link you provided.
    const paymentLink = 'https://u.payu.in/erYip9aXMuhf';

    const products = [];
    for (let i = 1; i <= 20; i++) {
        products.push({
            id: i,
            title: `Study Material Pack ${i}`,
            price: 1.00, // Keeping price at ₹1.00 as requested before
            payuLink: paymentLink
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                </div>
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">₹${product.price.toFixed(2)}</p>
                <div class="product-buttons">
                    <a href="product_page.html" class="btn btn-secondary">View Details</a>
                    <a href="${product.payuLink}" class="btn btn-primary" target="_blank">Pay Now</a>
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
