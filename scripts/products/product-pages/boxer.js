import { allProducts } from '../list-of-products.js'
import { updateProductsDisplay, generateProducts } from '../display-products.js'

let boxerProducts = allProducts.filter(product => product.type === 'boxer');
generateProducts(boxerProducts);

// Event listeners for search input and sorting select
document.getElementById("searchInput").addEventListener("input", () => {
    updateProductsDisplay(boxerProducts);
});
document.getElementById("sortSelect").addEventListener("change", () => {
    updateProductsDisplay(boxerProducts);
});