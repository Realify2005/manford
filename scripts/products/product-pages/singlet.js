import { allProducts } from '../list-of-products.js'
import { updateProductsDisplay, generateProducts } from '../display-products.js'

let singletProducts = allProducts.filter(product => product.type === 'singlet');
generateProducts(singletProducts);

// Event listeners for search input and sorting select
document.getElementById("searchInput").addEventListener("input", () => {
    updateProductsDisplay(singletProducts);
});
document.getElementById("sortSelect").addEventListener("change", () => {
    updateProductsDisplay(singletProducts);
});