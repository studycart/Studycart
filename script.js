/* General Body Styles */
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f7f6;
    color: #333;
    line-height: 1.6;
}

/* Container */
.container {
    width: 90%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 20px 0;
}

/* Header & Navigation */
.header {
    background-color: #fff;
    padding: 15px 0;
    border-bottom: 1px solid #ddd;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.8em;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
}

.main-nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.main-nav li {
    display: inline-block;
    margin-left: 25px;
}

.main-nav a {
    text-decoration: none;
    color: #555;
    font-weight: bold;
    font-size: 1em;
    transition: color 0.3s ease;
}

.main-nav a:hover, .main-nav a.active {
    color: #3498db;
}

/* Hero Section */
.hero {
    background: #2c3e50;
    color: #fff;
    padding: 80px 20px;
    text-align: center;
}

.hero h1 {
    font-size: 3em;
    margin-bottom: 10px;
}

.hero p {
    font-size: 1.2em;
    margin-bottom: 30px;
}

/* Buttons */
.btn {
    display: inline-block;
    padding: 12px 25px;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn-primary {
    background-color: #3498db;
    color: #fff;
}

.btn-primary:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
}

.btn-secondary {
    background-color: #e74c3c;
    color: #fff;
}

.btn-secondary:hover {
    background-color: #c0392b;
    transform: translateY(-2px);
}

/* Sections */
.section {
    padding: 60px 0;
    text-align: center;
}

.section-title {
    font-size: 2.5em;
    margin-bottom: 40px;
    color: #2c3e50;
}

/* Bundle Section */
.bundle-section {
    background-color: #ecf0f1;
}

.bundle-box {
    background: #fff;
    padding: 40px;
    border: 1px solid #ddd;
    border-radius: 8px;
    max-width: 700px;
    margin: 0 auto;
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
}

.bundle-box h3 {
    font-size: 2em;
    margin-top: 0;
    color: #e74c3c;
}

.bundle-box .price {
    font-size: 1.2em;
    margin: 20px 0;
}

.bundle-box .price span {
    text-decoration: line-through;
    color: #95a5a6;
    margin-right: 10px;
}

/* Product Grid */
.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
    text-align: left;
}

.product-card {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    display: flex;
    flex-direction: column;
}

.product-info {
    padding: 20px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.product-info h4 {
    margin: 0 0 10px 0;
    font-size: 1.4em;
    color: #34495e;
}

.product-info .price {
    font-size: 1.2em;
    font-weight: bold;
    color: #3498db;
    margin-bottom: 15px;
}

.product-info .btn {
    margin-top: auto;
    text-align: center;
}

/* Content Pages (About, Contact, etc.) */
.content-page {
    background: #fff;
    padding: 40px;
    border-radius: 8px;
    margin-top: 30px;
    text-align: left;
}

.content-page h1 {
    margin-top: 0;
}

/* Footer */
.footer {
    background-color: #2c3e50;
    color: #ecf0f1;
    text-align: center;
    padding: 30px 0;
    margin-top: 40px;
}

.footer p {
    margin: 0 0 10px 0;
}

.footer-nav a {
    color: #ecf0f1;
    text-decoration: none;
    margin: 0 10px;
    transition: color 0.3s ease;
}

.footer-nav a:hover {
    color: #3498db;
}

/* Downloads Page List */
.download-list {
    list-style: none;
    padding: 0;
    text-align: left;
}
.download-list li {
    background: #fff;
    margin-bottom: 10px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
.download-list a {
    text-decoration: none;
    color: #2980b9;
    font-weight: bold;
    font-size: 1.1em;
}
