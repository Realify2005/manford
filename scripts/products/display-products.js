export function updateProductsDisplay(products) {
    const searchKeyword = document.getElementById("searchInput").value.toLowerCase();
    const sortCriteria = document.getElementById("sortSelect").value;

    let filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchKeyword));

    if (sortCriteria === "priceLowToHigh") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortCriteria === "priceHighToLow") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    const productListContainer = document.querySelector(".products");
    productListContainer.innerHTML = "";

    if (filteredProducts.length > 0) {
      generateProducts(filteredProducts);
    } else {
      productListContainer.innerHTML = '<p>No results found with that query</p>'
    }
}


export function generateProducts(products) {
  const productListContainer = document.querySelector(".products");
  productListContainer.innerHTML = '';

  products.forEach( (product) => {
      const productItem = document.createElement("div");
      productItem.classList.add('product-item');

      const productImg = document.createElement("img");
      productImg.classList.add('product-img');
      productImg.src = `../../images/products/${product.brand}/${product.code}.jpg`;
      productImg.alt = `${product.code} picture`;

      const productName = document.createElement("h2");
      productName.textContent = product.name;

      const productPrice = document.createElement("p");
      productPrice.classList.add("product-price");
      productPrice.textContent = product.priceRupiah;

      const productDesc = document.createElement("p");
      productDesc.classList.add("product-desc");
      productDesc.textContent = product.description;

      productItem.appendChild(productImg);
      productItem.appendChild(productName);
      productItem.appendChild(productPrice);
      productItem.appendChild(productDesc);
      productListContainer.appendChild(productItem);
  })
}