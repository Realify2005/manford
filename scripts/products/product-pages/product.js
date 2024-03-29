import { allProducts } from '../list-of-products.js'
import { updateProductsDisplay, generateProducts } from '../display-products.js'

generateProducts(allProducts);

// Event listeners for search input and sorting select
document.getElementById("searchInput").addEventListener("input", () => {
    updateProductsDisplay(allProducts);
});
document.getElementById("sortSelect").addEventListener("change", () => {
    updateProductsDisplay(allProducts);
});