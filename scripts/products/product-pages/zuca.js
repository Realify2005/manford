import { allProducts } from '../list-of-products.js'
import { updateProductsDisplay, generateProducts } from '../display-products.js'

let zucaProducts = allProducts.filter(product => product.brand === 'zuca');
generateProducts(zucaProducts);

// Event listeners for search input and sorting select
document.getElementById("searchInput").addEventListener("input", () => {
    updateProductsDisplay(zucaProducts);
});
document.getElementById("sortSelect").addEventListener("change", () => {
    updateProductsDisplay(zucaProducts);
});