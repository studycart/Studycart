document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.querySelector('.product-grid');
    const searchBar = document.getElementById('search-bar');

    // --- VERY IMPORTANT: FILL IN YOUR UPI DETAILS HERE ---
    const yourUpiId = '9322810794-3@ybl'; // <--- REPLACE THIS WITH YOUR UPI ID
    const yourName = 'STUDYCART STORE'; // This is the name the user will see

    const products = [];
    for (let i = 1; i <= 20; i++) {
        const productTitle = `Study Material Pack ${i}`;
        const productPrice = 1.00; // PRICE UPDATED TO ₹1.00
        
        // This creates a unique UPI payment link for each product
        const upiLink = `upi://pay?pa=${yourUpiId}&pn=${encodeURIComponent(yourName)}&am=${productPrice.toFixed(2)}&cu=INR&tn=${encodeURIComponent(productTitle)}`;

        products.push({
            id: i,
            title: productTitle,
            price: productPrice,
            paymentLink: upiLink
        });
    }

    function displayProducts(productsToDisplay) {
        productGrid.innerHTML = '';
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
                    <a href="#" class="btn btn-secondary">View Details</a>
                    <a href="${product.paymentLink}" class="btn btn-primary">Pay Now</a>
                </div>
            `;
            productGrid.appendChild(productCard);
        });
    }

    searchBar.addEventListener('keyup', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredProducts = products.filter(product => {
            return product.title.toLowerCase().includes(searchTerm);
        });
        displayProducts(filteredProducts);
    });

    displayProducts(products);
});
