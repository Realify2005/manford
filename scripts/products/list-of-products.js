const products = [
    // Singlets (3)
    { name: "MANFORD Single Cotton Combed 1 in 1 Pack [MFC-01]", price: 79900, priceRupiah: "Rp79,900.00", brand: "manford", type: "singlet", code: "MFC-01", description: "MFC 01 sangat cocok untuk anda yang ingin tampil elegant dengan singlet berbahan nyaman dan lembut."},
    { name: "MUSCLE ELEMENTS Singlet Salur 1 in 1 Pack [MEC-01]", price: 59900, priceRupiah: "Rp59,900.00", brand: "muscle-element", type: "singlet", code: "MEC-01", description: "MEC 01 cocok untuk yang menyukai gaya santai. Produk ini dibuat menggunakan bahan Cotton Blend yang akan membuat anda merasa nyaman."},
    { name: "ZUCA Oblong R-Neck 1 in 1 Pack [ZUS-09]", price: 84900, priceRupiah: "Rp84,900.00", brand: "zuca", type: "singlet", code: "ZUS-09", description: "ZUS 09 cocok untuk anda yang menyukai gaya simple. Produk ini dibuat menggunakan bahan Cotton Combed 100% yang nyaman dan tidak panas saat dipakai."},

    // Boxers (15)
    { name: "MANFORD Boxer 1 in 1 Pack [MFX-179]", price: 79900, priceRupiah: "Rp79,900.00", brand: "manford", type: "boxer", code: "MFX-179", description: "MFX 179 sangat cocok untuk anda yang ingin bersantai dengan bahan material yang sejuk. Desain karet dan balutan warna pada kain sehingga menambah kesan elegant dan energik."},
    { name: "MANFORD Boxer 1 in 1 Pack [MFXKL-216]", price: 69900, priceRupiah: "Rp69,900.00", brand: "manford", type: "boxer", code: "MFXKL-216", description: "MFXKL 216 sangat cocok untuk anda yang ingin bersantai dengan bahan material yang sejuk. Desain karet dan balutan warna hitam pada kain sehingga menambah kesan elegant dan energik."},
    { name: "MANFORD Boxer 1 in 1 Pack [MFXKL-187]", price: 89900, priceRupiah: "Rp89,900.00", brand: "manford", type: "boxer", code: "MFXKL-187", description: "MFXKL 187 sangat cocok untuk anda yang ingin bersantai dengan bahan material yang sejuk. Desain karet dan desain brief yang simple menambah kesan elegant dan energik."},
    { name: "MANFORD Boxer 1 in 1 Pack [MFXKL-211]", price: 79900, priceRupiah: "Rp79,900.00", brand: "manford", type: "boxer", code: "MFXKL-211", description: "MFXKL 211 sangat cocok untuk anda yang ingin bersantai dengan bahan material yang sejuk. Desain karet dan balutan warna grey pada kain sehingga menambah kesan elegant dan energik."},
    { name: "MANFORD Boxer 2 in 1 Pack [MFXKL-223]", price: 119900, priceRupiah: "Rp119,900.00", brand: "manford", type: "boxer", code: "MFXKL-223", description: "MFXKL 223 sangat cocok untuk anda yang ingin bersantai dengan bahan material yang sejuk. Desain karet dan balutan warna hitam dan abu pada kain sehingga menambah kesan elegant dan energik."},
    { name: "MANFORD Boxer Brief 1 in 1 Pack [MFXKL-09]", price: 69900, priceRupiah: "Rp69,900.00", brand: "manford", type: "boxer", code: "MFXKL-09", description: "MFXKL 09 sangat cocok untuk anda yang ingin bersantai dengan bahan material yang sejuk. Desain karet dan balutan warna hitam dan abu pada kain sehingga menambah kesan elegant dan energik."},
    { name: "MANFORD Boxer Full-Print 1 in 1 Pack [MFXKD-168P]", price: 79900, priceRupiah: "Rp79,900.00", brand: "manford", type: "boxer", code: "MFXKD-168P", description: "MFXKD 168P sangat cocok untuk anda yang menyukai boxer motif dengan bahan lembut dan nyaman."},
    { name: "MANFORD Boxer Motif 1 in 1 Pack [MFX-169]", price: 89900, priceRupiah: "Rp89,900.00", brand: "manford", type: "boxer", code: "MFX-169", description: "MFX 169 sangat cocok untuk anda yang ingin bersantai dengan bahan material yang sejuk. Desain karet dan balutan motif kotak pada kain sehingga menambah kesan elegant dan energik."},
    { name: "MANFORD Boxer Motif 1 in 1 Pack [MFX-189]", price: 99900, priceRupiah: "Rp99,900.00", brand: "manford", type: "boxer", code: "MFX-189", description: "MFX 189 sangat cocok untuk anda yang ingin bersantai dengan bahan material yang sejuk. Desain karet dan balutan motif pada kain sehingga menambah kesan elegant dan energik."},
    { name: "MUSCLE ELEMENTS Boxer Misty 2 in 1 Pack [MEXKL-228]", price: 109900, priceRupiah: "Rp109,900.00", brand: "muscle-element", type: "boxer", code: "MEXKL-228", description: "MEXKL 228 cocok untuk yang menyukai gaya sport style, dengan desain karet luar font style menambah produk ini terlihat menarik. Produk ini dibuat menggunakan bahan Cotton Blend yang akan membuat anda merasa nyaman."},
    { name: "MUSCLE ELEMENTS Boxer Stripe Full-Print 1 in 1 Pack [MEX-02]", price: 79900, priceRupiah: "Rp79,900.00", brand: "muscle-element", type: "boxer", code: "MEX-02", description: "MEX 02 cocok untuk yang menyukai gaya santai, dengan desain motif full print menambah produk ini terlihat menarik. Produk ini dibuat menggunakan bahan Cotton Blend yang akan membuat anda merasa nyaman."},
    { name: "ZUCA Boxer 1 in 1 Pack [ZUXKL-105]", price: 79900, priceRupiah: "Rp79,900.00", brand: "zuca", type: "boxer", code: "ZUXKL-105", description: "ZUXKL 105 cocok untuk anda yang menyukai gaya simple. Produk ini dibuat menggunakan bahan VISCOSE yang dipadukan dengan karet NYLON. Bahan yang tidak panas dan nyaman untuk dipakai."},
    { name: "ZUCA Boxer 1 in 1 Pack [ZUXKL-ST-108]", price: 79900, priceRupiah: "Rp79,900.00", brand: "zuca", type: "boxer", code: "ZUXKL-ST-108", description: "ZUXKL ST 108 cocok untuk anda yang menyukai gaya style. Produk ini dibuat menggunakan bahan viscose yang akan membuat anda merasa nyaman."},
    { name: "ZUCA Boxer Motif 1 in 1 Pack [ZUX-08]", price: 79900, priceRupiah: "Rp79,900.00", brand: "zuca", type: "boxer", code: "ZUX-08", description: "ZUX 08 sangat cocok untuk anda yang bergaya santai dengan komposisi bahan yang extra lembut sehingga membuat anda nyaman."},
    { name: "ZUCA Boxer Sport Mix Color 1 in 1 Pack [ZUX-SP-802]", price: 89900, priceRupiah: "Rp89,900.00", brand: "zuca", type: "boxer", code: "ZUX-SP-802", description: "ZUX SP 802 cocok untuk anda yang menyukai gaya style. Produk ini dibuat menggunakan bahan cotton rich yang akan membuat anda merasa nyaman."},

    // Briefs (21)
    // 5 manford
    { name: "MANFORD Oblong V-Neck 1 in 1 Pack [MFS-11-BL]", price: 99900, priceRupiah: "Rp99,900.00", brand: "manford", type: "briefs", code: "MFS-11-BL", description: ""},
    { name: "MANFORD Oblong V-Neck 1 in 1 Pack [MFS-11-BL]", price: 99900, priceRupiah: "Rp99,900.00", brand: "manford", type: "briefs", code: "MFS-11-BL", description: ""},
    { name: "MANFORD Oblong V-Neck 1 in 1 Pack [MFS-11-BL]", price: 99900, priceRupiah: "Rp99,900.00", brand: "manford", type: "briefs", code: "MFS-11-BL", description: ""},
    { name: "MANFORD Oblong V-Neck 1 in 1 Pack [MFS-11-BL]", price: 99900, priceRupiah: "Rp99,900.00", brand: "manford", type: "briefs", code: "MFS-11-BL", description: ""},
    { name: "MANFORD Oblong V-Neck 1 in 1 Pack [MFS-11-BL]", price: 99900, priceRupiah: "Rp99,900.00", brand: "manford", type: "briefs", code: "MFS-11-BL", description: ""},
    // 12 muscle element
    { name: "MANFORD Oblong V-Neck 1 in 1 Pack [MFS-11-BL]", price: 99900, priceRupiah: "Rp99,900.00", brand: "muscle-element", type: "briefs", code: "MFS-11-BL", description: ""},
    { name: "MANFORD Oblong V-Neck 1 in 1 Pack [MFS-11-BL]", price: 99900, priceRupiah: "Rp99,900.00", brand: "muscle-element", type: "briefs", code: "MFS-11-BL", description: ""},
    { name: "MANFORD Oblong V-Neck 1 in 1 Pack [MFS-11-BL]", price: 99900, priceRupiah: "Rp99,900.00", brand: "muscle-element", type: "briefs", code: "MFS-11-BL", description: ""},
    { name: "MANFORD Oblong V-Neck 1 in 1 Pack [MFS-11-BL]", price: 99900, priceRupiah: "Rp99,900.00", brand: "muscle-element", type: "briefs", code: "MFS-11-BL", description: ""},
    { name: "MANFORD Oblong V-Neck 1 in 1 Pack [MFS-11-BL]", price: 99900, priceRupiah: "Rp99,900.00", brand: "muscle-element", type: "briefs", code: "MFS-11-BL", description: ""},
    { name: "MANFORD Oblong V-Neck 1 in 1 Pack [MFS-11-BL]", price: 99900, priceRupiah: "Rp99,900.00", brand: "muscle-element", type: "briefs", code: "MFS-11-BL", description: ""},
    { name: "MANFORD Oblong V-Neck 1 in 1 Pack [MFS-11-BL]", price: 99900, priceRupiah: "Rp99,900.00", brand: "muscle-element", type: "briefs", code: "MFS-11-BL", description: ""},
    { name: "MANFORD Oblong V-Neck 1 in 1 Pack [MFS-11-BL]", price: 99900, priceRupiah: "Rp99,900.00", brand: "muscle-element", type: "briefs", code: "MFS-11-BL", description: ""},
    { name: "MANFORD Oblong V-Neck 1 in 1 Pack [MFS-11-BL]", price: 99900, priceRupiah: "Rp99,900.00", brand: "muscle-element", type: "briefs", code: "MFS-11-BL", description: ""},
    { name: "MANFORD Oblong V-Neck 1 in 1 Pack [MFS-11-BL]", price: 99900, priceRupiah: "Rp99,900.00", brand: "muscle-element", type: "briefs", code: "MFS-11-BL", description: ""},
    { name: "MANFORD Oblong V-Neck 1 in 1 Pack [MFS-11-BL]", price: 99900, priceRupiah: "Rp99,900.00", brand: "muscle-element", type: "briefs", code: "MFS-11-BL", description: ""},
    { name: "MANFORD Oblong V-Neck 1 in 1 Pack [MFS-11-BL]", price: 99900, priceRupiah: "Rp99,900.00", brand: "muscle-element", type: "briefs", code: "MFS-11-BL", description: ""},
    // 4 zuca
    { name: "MANFORD Oblong V-Neck 1 in 1 Pack [MFS-11-BL]", price: 99900, priceRupiah: "Rp99,900.00", brand: "zuca", type: "briefs", code: "MFS-11-BL", description: ""},
    { name: "MANFORD Oblong V-Neck 1 in 1 Pack [MFS-11-BL]", price: 99900, priceRupiah: "Rp99,900.00", brand: "zuca", type: "briefs", code: "MFS-11-BL", description: ""},
    { name: "MANFORD Oblong V-Neck 1 in 1 Pack [MFS-11-BL]", price: 99900, priceRupiah: "Rp99,900.00", brand: "zuca", type: "briefs", code: "MFS-11-BL", description: ""},
    { name: "MANFORD Oblong V-Neck 1 in 1 Pack [MFS-11-BL]", price: 99900, priceRupiah: "Rp99,900.00", brand: "zuca", type: "briefs", code: "MFS-11-BL", description: ""},

    // T-Shirt (8)
    { name: "MANFORD Oblong V-Neck 1 in 1 Pack [MFS-11-BL]", price: 99900, priceRupiah: "Rp99,900.00", brand: "manford", type: "t-shirt", code: "MFS-11-BL", description: "MFS 11-BL sangat cocok untuk anda yang ingin bersantai dengan bahan material yang sejuk. Desain pada tshirt yang simpel dan elegan membuat nyaman dipakai kapan saja."},
    { name: "MANFORD Oblong V-Neck 1 in 1 Pack [MFS-11-MR]", price: 99900, priceRupiah: "Rp99,900.00", brand: "manford", type: "t-shirt", code: "MFS-11-MR", description: "MFS 11-MR sangat cocok untuk anda yang ingin bersantai dengan bahan material yang sejuk. Desain pada tshirt yang simpel dan elegan membuat nyaman dipakai kapan saja."},
    { name: "MANFORD Oblong V-Neck 1 in 1 Pack [MFS-11]", price: 89900, priceRupiah: "Rp89,900.00", brand: "manford", type: "t-shirt", code: "MFS-11", description: "MFS 11 sangat cocok untuk anda yang ingin bersantai dengan bahan material yang sejuk. Desain pada tshirt yang simpel dan elegan membuat nyaman dipakai kapan saja."},
    { name: "MUSCLE ELEMENT Oblong Round-Neck 1 in 1 Pack [MES-02]", price: 74900, priceRupiah: "Rp74,900.00", brand: "muscle-element", type: "t-shirt", code: "MES-02", description: "MES 02 ini cocok untuk anda yang ingin tampil modis dan tetap terlihat santai dengan bahan yang sangat lembut dan nyaman untuk dikenakan sehari-hari."},
    { name: "MUSCLE ELEMENT Oblong Round-Neck 1 in 1 Pack [MES-03 BL]", price: 94900, priceRupiah: "Rp94,900.00", brand: "muscle-element", type: "t-shirt", code: "MES-03-BL", description: "MES-03 BL cocok dipakai untuk bersantai, dengan desain simple dan polos menambah produk ini terlihat compact. Produk ini dibuat menggunakan bahan Soft Cotton Blend yang akan membuat anda merasa nyaman saat memakainya."},
    { name: "MUSCLE ELEMENT Oblong Round-Neck 1 in 1 Pack Roundneck [MES-03 WH]", price: 89900, priceRupiah: "Rp89,900.00", brand: "muscle-element", type: "t-shirt", code: "MES-03-WH", description: "MES-03 WH cocok untuk yang menyukai gaya simple, dengan desain compact dan bahan Cotton-Blend dapat membuat Anda merasakan kenyamanan saat memakainya."},
    { name: "MUSCLE ELEMENTS Oblong R-Neck Abu-Maroon 2 in 1 Pack [MES-01-AM]", price: 179900, priceRupiah: "Rp179,900.00", brand: "muscle-element", type: "t-shirt", code: "MES-01-AM", description: "MES 01 AM ini cocok untuk anda yang ingin tampil modis dan tetap terlihat santai dengan bahan yang sangat lembut dan nyaman untuk dikenakan sehari-hari."},
    { name: "MUSCLE ELEMENTS Oblong R-Neck Navy-Hijau 2 in 1 Pack [MES-01-NH]", price: 179900, priceRupiah: "Rp179,900.00", brand: "muscle-element", type: "t-shirt", code: "MES-01-NH", description: "MES 01 NH ini cocok untuk anda yang ingin tampil modis dan tetap terlihat santai dengan bahan yang sangat lembut dan nyaman untuk dikenakan sehari-hari."},
];

function displayProducts() {
    const searchKeyword = document.getElementById("searchInput").value.toLowerCase();
    const sortCriteria = document.getElementById("sortSelect").value;

    let filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchKeyword));

    if (sortCriteria === "priceLowToHigh") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortCriteria === "priceHighToLow") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    const productListContainer = document.getElementById("productList");
    productListContainer.innerHTML = "";

    filteredProducts.forEach(product => {
      const productItem = document.createElement("div");
      productItem.innerHTML = `<p>${product.name} - $${product.price}</p>`;
      productListContainer.appendChild(productItem);
    });
  }

function initialiseProducts() {
    const productListContainer = document.querySelector(".products");
    productListContainer.innerHTML = '';

    products.forEach( (product) => {
        const productItem = document.createElement("div");
        productItem.innerHTML = `<p>${product.name} - ${product.priceRupiah}</p>`
        productListContainer.appendChild(productItem);
    })
}

initialiseProducts();

  // Event listeners for search input and sorting select
  document.getElementById("searchInput").addEventListener("input", displayProducts);
  document.getElementById("sortSelect").addEventListener("change", displayProducts);

