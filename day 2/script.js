document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');

    fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => {
            const products = data.products.slice(0, 28); 
            products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.className = 'product';
                productElement.innerHTML = `
                    <img src="${product.thumbnail}" alt="${product.title}">
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                    <p class="price">$${product.price}</p>
                    <p class="rating">Rating: ${product.rating}</p>
                `;
                productList.appendChild(productElement);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
});