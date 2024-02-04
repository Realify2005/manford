import { allProducts } from '../list-of-products.js'
import { updateProductsDisplay, generateProducts } from '../display-products.js'

let briefsProducts = allProducts.filter(product => product.type === 'briefs');
generateProducts(briefsProducts);

// Event listeners for search input and sorting select
document.getElementById("searchInput").addEventListener("input", () => {
    updateProductsDisplay(briefsProducts);
});
document.getElementById("sortSelect").addEventListener("change", () => {
    updateProductsDisplay(briefsProducts);
});