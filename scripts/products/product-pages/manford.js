import { allProducts } from '../list-of-products.js'
import { updateProductsDisplay, generateProducts } from '../display-products.js'

let manfordProducts = allProducts.filter(product => product.brand === 'manford');
generateProducts(manfordProducts);

// Event listeners for search input and sorting select
document.getElementById("searchInput").addEventListener("input", () => {
    updateProductsDisplay(manfordProducts);
});
document.getElementById("sortSelect").addEventListener("change", () => {
    updateProductsDisplay(manfordProducts);
});