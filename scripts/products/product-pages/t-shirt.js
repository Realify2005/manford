import { allProducts } from '../list-of-products.js'
import { updateProductsDisplay, generateProducts } from '../display-products.js'

let tshirtProducts = allProducts.filter(product => product.type === 't-shirt');
generateProducts(tshirtProducts);

// Event listeners for search input and sorting select
document.getElementById("searchInput").addEventListener("input", () => {
    updateProductsDisplay(tshirtProducts);
});
document.getElementById("sortSelect").addEventListener("change", () => {
    updateProductsDisplay(tshirtProducts);
});