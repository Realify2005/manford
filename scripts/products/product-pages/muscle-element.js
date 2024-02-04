import { allProducts } from '../list-of-products.js'
import { updateProductsDisplay, generateProducts } from '../display-products.js'

let muscleElementProducts = allProducts.filter(product => product.brand === 'muscle-element');
generateProducts(muscleElementProducts);

// Event listeners for search input and sorting select
document.getElementById("searchInput").addEventListener("input", () => {
    updateProductsDisplay(muscleElementProducts);
});
document.getElementById("sortSelect").addEventListener("change", () => {
    updateProductsDisplay(muscleElementProducts);
});