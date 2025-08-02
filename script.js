document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.querySelector('.product-grid');
    const searchBar = document.getElementById('search-bar');

    // --- YOUR UPI DETAILS (VERY IMPORTANT: FILL THIS IN) ---
    // Replace this with your actual UPI ID found in your PhonePe or other UPI app.
    const yourUpiId = "YOUR_UPI_ID@ybl"; // EXAMPLE: rushikesh.shahane@ybl
    const yourName = "StudyCart"; // This is the name the user will see

    const products = [];
    for (let i = 1; i <= 20; i++) {
        const productTitle = `Study Material Pack ${i}`;
        const productPrice = 50.00;
        
        // This creates a unique UPI payment link for each product
        const upiLink = `upi://pay?pa=${9322810794-3@ybl}&pn=${encodeURIComponent(yourName)}&am=${productPrice.toFixed(2)}&cu=INR&tn=${encodeURIComponent(productTitle)}`;

        products.push({
            id: i,
            title: productTitle,
            price: productPrice,
            paymentLink: upiLink
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
                    <a href="${product.paymentLink}" class="btn btn-primary">Buy with UPI</a>
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
