const products = [
    // Singlets (3)
    { name: "MANFORD Single Cotton Combed 1 in 1 Pack [MFC-01]", price: 79900, priceRupiah: "Rp79,900.00", brand: "manford", type: "singlet", code: "MFC-01", description: "MFC 01 sangat cocok untuk anda yang ingin tampil elegant dengan singlet berbahan nyaman dan lembut."},
    { name: "MUSCLE ELEMENTS Singlet Salur 1 in 1 Pack [MEC-01]", price: 59900, priceRupiah: "Rp59,900.00", brand: "muscle-element", type: "singlet", code: "MEC-01", description: "MEC 01 cocok untuk yang menyukai gaya santai. Produk ini dibuat menggunakan bahan Cotton Blend yang akan membuat anda merasa nyaman."},
    { name: "ZUCA Oblong R-Neck 1 in 1 Pack [ZUS-09]", price: 84900, priceRupiah: "Rp84,900.00", brand: "zuca", type: "singlet", code: "ZUS-09", description: "ZUS 09 cocok untuk anda yang menyukai gaya simple. Produk ini dibuat menggunakan bahan Cotton Combed 100% yang nyaman dan tidak panas saat dipakai."},

    // Boxers (15)
    // 9 manford
    { name: "MANFORD Boxer 1 in 1 Pack [MFX-179]", price: 79900, priceRupiah: "Rp79,900.00", brand: "manford", type: "boxer", code: "MFX-179", description: "MFX 179 sangat cocok untuk anda yang ingin bersantai dengan bahan material yang sejuk. Desain karet dan balutan warna pada kain sehingga menambah kesan elegant dan energik."},
    { name: "MANFORD Boxer 1 in 1 Pack [MFXKL-216]", price: 69900, priceRupiah: "Rp69,900.00", brand: "manford", type: "boxer", code: "MFXKL-216", description: "MFXKL 216 sangat cocok untuk anda yang ingin bersantai dengan bahan material yang sejuk. Desain karet dan balutan warna hitam pada kain sehingga menambah kesan elegant dan energik."},
    { name: "MANFORD Boxer 1 in 1 Pack [MFXKL-187]", price: 89900, priceRupiah: "Rp89,900.00", brand: "manford", type: "boxer", code: "MFXKL-187", description: "MFXKL 187 sangat cocok untuk anda yang ingin bersantai dengan bahan material yang sejuk. Desain karet dan desain brief yang simple menambah kesan elegant dan energik."},
    { name: "MANFORD Boxer 1 in 1 Pack [MFXKL-211]", price: 79900, priceRupiah: "Rp79,900.00", brand: "manford", type: "boxer", code: "MFXKL-211", description: "MFXKL 211 sangat cocok untuk anda yang ingin bersantai dengan bahan material yang sejuk. Desain karet dan balutan warna grey pada kain sehingga menambah kesan elegant dan energik."},
    { name: "MANFORD Boxer 2 in 1 Pack [MFXKL-223]", price: 119900, priceRupiah: "Rp119,900.00", brand: "manford", type: "boxer", code: "MFXKL-223", description: "MFXKL 223 sangat cocok untuk anda yang ingin bersantai dengan bahan material yang sejuk. Desain karet dan balutan warna hitam dan abu pada kain sehingga menambah kesan elegant dan energik."},
    { name: "MANFORD Boxer Brief 1 in 1 Pack [MFXKL-09]", price: 69900, priceRupiah: "Rp69,900.00", brand: "manford", type: "boxer", code: "MFXKL-09", description: "MFXKL 09 sangat cocok untuk anda yang ingin bersantai dengan bahan material yang sejuk. Desain karet dan balutan warna hitam dan abu pada kain sehingga menambah kesan elegant dan energik."},
    { name: "MANFORD Boxer Full-Print 1 in 1 Pack [MFXKD-168P]", price: 79900, priceRupiah: "Rp79,900.00", brand: "manford", type: "boxer", code: "MFXKD-168P", description: "MFXKD 168P sangat cocok untuk anda yang menyukai boxer motif dengan bahan lembut dan nyaman."},
    { name: "MANFORD Boxer Motif 1 in 1 Pack [MFX-169]", price: 89900, priceRupiah: "Rp89,900.00", brand: "manford", type: "boxer", code: "MFX-169", description: "MFX 169 sangat cocok untuk anda yang ingin bersantai dengan bahan material yang sejuk. Desain karet dan balutan motif kotak pada kain sehingga menambah kesan elegant dan energik."},
    { name: "MANFORD Boxer Motif 1 in 1 Pack [MFX-189]", price: 99900, priceRupiah: "Rp99,900.00", brand: "manford", type: "boxer", code: "MFX-189", description: "MFX 189 sangat cocok untuk anda yang ingin bersantai dengan bahan material yang sejuk. Desain karet dan balutan motif pada kain sehingga menambah kesan elegant dan energik."},
    // 2 muscle element
    { name: "MUSCLE ELEMENTS Boxer Misty 2 in 1 Pack [MEXKL-228]", price: 109900, priceRupiah: "Rp109,900.00", brand: "muscle-element", type: "boxer", code: "MEXKL-228", description: "MEXKL 228 cocok untuk yang menyukai gaya sport style, dengan desain karet luar font style menambah produk ini terlihat menarik. Produk ini dibuat menggunakan bahan Cotton Blend yang akan membuat anda merasa nyaman."},
    { name: "MUSCLE ELEMENTS Boxer Stripe Full-Print 1 in 1 Pack [MEX-02]", price: 79900, priceRupiah: "Rp79,900.00", brand: "muscle-element", type: "boxer", code: "MEX-02", description: "MEX 02 cocok untuk yang menyukai gaya santai, dengan desain motif full print menambah produk ini terlihat menarik. Produk ini dibuat menggunakan bahan Cotton Blend yang akan membuat anda merasa nyaman."},
    // 4 zuca
    { name: "ZUCA Boxer 1 in 1 Pack [ZUXKL-105]", price: 79900, priceRupiah: "Rp79,900.00", brand: "zuca", type: "boxer", code: "ZUXKL-105", description: "ZUXKL 105 cocok untuk anda yang menyukai gaya simple. Produk ini dibuat menggunakan bahan VISCOSE yang dipadukan dengan karet NYLON. Bahan yang tidak panas dan nyaman untuk dipakai."},
    { name: "ZUCA Boxer 1 in 1 Pack [ZUXKL-ST-108]", price: 79900, priceRupiah: "Rp79,900.00", brand: "zuca", type: "boxer", code: "ZUXKL-ST-108", description: "ZUXKL ST 108 cocok untuk anda yang menyukai gaya style. Produk ini dibuat menggunakan bahan viscose yang akan membuat anda merasa nyaman."},
    { name: "ZUCA Boxer Motif 1 in 1 Pack [ZUX-08]", price: 79900, priceRupiah: "Rp79,900.00", brand: "zuca", type: "boxer", code: "ZUX-08", description: "ZUX 08 sangat cocok untuk anda yang bergaya santai dengan komposisi bahan yang extra lembut sehingga membuat anda nyaman."},
    { name: "ZUCA Boxer Sport Mix Color 1 in 1 Pack [ZUX-SP-802]", price: 89900, priceRupiah: "Rp89,900.00", brand: "zuca", type: "boxer", code: "ZUX-SP-802", description: "ZUX SP 802 cocok untuk anda yang menyukai gaya style. Produk ini dibuat menggunakan bahan cotton rich yang akan membuat anda merasa nyaman."},

    // Briefs (21)
    // 5 manford
    { name: "MANFORD Briefs 3 in 1 Pack [MFB-689]", price: 99900, priceRupiah: "Rp99,900.00", brand: "manford", type: "briefs", code: "MFB-689", description: "MFB 689 akan memanjakan anda dengan keunggulan bahan 100% cotton yang sangat lembut dan terasa nyaman saat dipakai."},
    { name: "MANFORD Briefs 3 in 1 Pack [MFBKL-033]", price: 99900, priceRupiah: "Rp99,900.00", brand: "manford", type: "briefs", code: "MFBKL-033", description: "MFBKL 033 sangat cocok untuk anda yang ingin bersantai dengan bahan material yang sejuk. Desain karet dan balutan warna hitam pada kain sehingga menambah kesan elegant dan energik."},
    { name: "MANFORD Briefs 3 in 1 Pack [MFBKL-302]", price: 129900, priceRupiah: "Rp129,900.00", brand: "manford", type: "briefs", code: "MFBKL-302", description: "MFBKL 302 sangat cocok untuk anda yang ingin bersantai dengan bahan material yang sejuk. Desain karet dan desain brief yang simple menambah kesan elegant dan energik."},
    { name: "MANFORD Briefs 3 in 1 Pack [MFBKL-312]", price: 149900, priceRupiah: "Rp149,900.00", brand: "manford", type: "briefs", code: "MFBKL-312", description: "MFBKL 312 didesain untuk pria modern dan stylish. Dengan keunggulan bahan yang lembut dan elastis membuat anda bebas bergerak."},
    { name: "MANFORD Briefs 3 in 1 Pack [MFBKL-53]", price: 149900, priceRupiah: "Rp149,900.00", brand: "manford", type: "briefs", code: "MFBKL-53", description: "MFBKL 53 sangat cocok untuk anda yang ingin bersantai dengan bahan material yang sejuk. Desain karet dan balutan warna Putih pada kain sehingga menambah kesan elegant dan energik."},
    // 12 muscle element
    { name: "MUSCLE ELEMENTS Briefs 2 in 1 Pack [MEBKL-218]", price: 99900, priceRupiah: "Rp99,900.00", brand: "muscle-element", type: "briefs", code: "MEBKL-218", description: "MEBKL 218 cocok untuk yang menyukai gaya sport style, dengan desain karet luar font style menambah produk ini terlihat menarik. Produk ini dibuat menggunakan bahan Cotton Blend yang akan membuat anda merasa nyaman."},
    { name: "MUSCLE ELEMENTS Briefs 3 in 1 Pack [MEBKL-302]", price: 139900, priceRupiah: "Rp139,900.00", brand: "muscle-element", type: "briefs", code: "MEBKL-302", description: "MEBKL 302 cocok untuk yang menyukai gaya sport style, dengan desain karet bergaya font menambah produk ini terlihat menarik. Produk ini dibuat menggunakan bahan Cotton Blend yang akan membuat anda merasa nyaman."},
    { name: "MUSCLE ELEMENTS Briefs Basic-Colours 3 in 1 Pack [MEB-033]", price: 94900, priceRupiah: "Rp94,900.00", brand: "muscle-element", type: "briefs", code: "MEB-033", description: "MEB 033 cocok untuk yang menyukai gaya sport style, dengan desain karet bungkus menambah produk ini terlihat menarik. Produk ini dibuat menggunakan bahan Cotton Blend yang akan membuat anda merasa nyaman."},
    { name: "MUSCLE ELEMENTS Briefs Black Edition Mid-Stripe 3 in 1 Pack [MEB-032]", price: 79900, priceRupiah: "Rp79,900.00", brand: "muscle-element", type: "briefs", code: "MEB-032", description: "MEB 032 cocok untuk yang menyukai gaya sport style, dengan desain karet bergaya font menambah produk ini terlihat menarik. Produk ini dibuat menggunakan bahan Cotton Blend yang akan membuat anda merasa nyaman."},
    { name: "MUSCLE ELEMENTS Briefs Brown-Series 4 in 1 Pack [MEB-742]", price: 119900, priceRupiah: "Rp119,900.00", brand: "muscle-element", type: "briefs", code: "MEB-742", description: "MEB 742 didesain khusus untuk pria yang bergaya santai dan casual, dengan bahan yang sangat lembut dan nyaman akan menambah rasa percaya diri pengguna."},
    { name: "MUSCLE ELEMENTS Briefs Misty-Series 3 in 1 Pack [MEBKL-301]", price: 99900, priceRupiah: "Rp99,900.00", brand: "muscle-element", type: "briefs", code: "MEBKL-301", description: "MEBKL 301 didesain khusus untuk pria yang bergaya santai dan casual, dengan bahan yang sangat lembut dan nyaman akan menambah rasa percaya diri pengguna."},
    { name: "MUSCLE ELEMENTS Briefs Misty-Series 3 in 1 Pack [MEBKL-304]", price: 119900, priceRupiah: "Rp119,900.00", brand: "muscle-element", type: "briefs", code: "MEBKL-304", description: "MEBKL 304 cocok untuk yang menyukai gaya sport style, dengan desain karet luar font style menambah produk ini terlihat menarik. Produk ini dibuat menggunakan bahan Cotton Blend yang akan membuat anda merasa nyaman."},
    { name: "MUSCLE ELEMENTS Briefs Red-Green-Blue Waistband 3 in 1 Pack [MEBKL-303]", price: 149900, priceRupiah: "Rp149,900.00", brand: "muscle-element", type: "briefs", code: "MEBKL-303", description: "MEBKL 303 cocok untuk yang menyukai gaya sport style, dengan desain karet bergaya font menambah produk ini terlihat menarik. Produk ini dibuat menggunakan bahan Cotton Blend yang akan membuat anda merasa nyaman."},
    { name: "MUSCLE ELEMENTS Briefs Seri Misty 3 in 1 Pack [MEB-031]", price: 74900, priceRupiah: "Rp74,900.00", brand: "muscle-element", type: "briefs", code: "MEB-301", description: "MEB 031 cocok untuk yang menyukai gaya sport style, desain karet bergaya simple dengan label hitam ditengah menambah produk ini terlihat menarik. Produk ini dibuat menggunakan bahan Cotton Blend yang akan membuat anda merasa nyaman."},
    { name: "MUSCLE ELEMENTS Briefs Solid-Color 3 in 1 Pack [MEBKL-306]", price: 99900, priceRupiah: "Rp99,900.00", brand: "muscle-element", type: "briefs", code: "MEBKL-306", description: "MEBKL 306 cocok untuk yang menyukai gaya sport style, dengan desain karet luar font style menambah produk ini terlihat menarik. Produk ini dibuat menggunakan bahan Cotton Blend yang akan membuat anda merasa nyaman."},
    { name: "MUSCLE ELEMENTS Briefs Solid-Series 3 in 1 Pack [MEBKL-305]", price: 99900, priceRupiah: "Rp99,900.00", brand: "muscle-element", type: "briefs", code: "MEBKL-305", description: "MEBKL 304 cocok untuk yang menyukai gaya sport style, dengan desain karet luar font style menambah produk ini terlihat menarik. Produk ini dibuat menggunakan bahan Cotton Blend yang akan membuat anda merasa nyaman."},
    { name: "MUSCLE ELEMENTS Briefs Stripe 5 in 1 Pack [MEB-051]", price: 159900, priceRupiah: "Rp159,900.00", brand: "muscle-element", type: "briefs", code: "MEB-051", description: "MEB 051 cocok untuk yang menyukai gaya sport style, dengan desain karet bergaya font menambah produk ini terlihat menarik. Produk ini dibuat menggunakan bahan Cotton Blend yang akan membuat anda merasa nyaman."},
    // 4 zuca
    { name: "ZUCA Briefs Addictive 2 in 1 Pack [ZUBKL-63]", price: 119900, priceRupiah: "Rp119,900.00", brand: "zuca", type: "briefs", code: "ZUBKL-63", description: "ZUBKL 63 sangat cocok untuk anda yang bergaya santai dengan komposisi bahan yang extra lembut sehingga membuat anda nyaman."},
    { name: "ZUCA Briefs Rainbow-Waistband 2 in 1 Pack [ZUBKL-AD-629]", price: 129900, priceRupiah: "Rp129,900.00", brand: "zuca", type: "briefs", code: "ZUBKL-AD-629", description: "ZUBKL AD 629 didesain khusus untuk pria fashionable yang agresif. Produk ini memiliki motif gaya style yarn dyed pada bahan serta dengan keunggulan waistband yang sangat lembut dan fashionable."},
    { name: "ZUCA Briefs Special Edition Rayon 2 in 1 Pack [ZUBKL-ST-208]", price: 119900, priceRupiah: "Rp119,900.00", brand: "zuca", type: "briefs", code: "ZUBKL-ST-208", description: "ZUBKL ST 208 cocok untuk anda yang menyukai gaya style, dengan desain karet bergaya font style menambah produk ini terlihat menarik. Produk ini dibuat menggunakan bahan Spandex Viscose yang akan membuat anda merasa nyaman."},
    { name: "ZUCA Briefs Viscose 2 in 1 Pack [ZUBKL-SP-206]", price: 129900, priceRupiah: "Rp129,900.00", brand: "zuca", type: "briefs", code: "ZUBKL-SP-206", description: "ZUBKL SP 206 didesain khusus untuk pria dengan style sport fashion, sangat nyaman digunakan karena terbuat dari bahan Dilon Viscose yang lembut dan nyaman."},

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

    const productListContainer = document.querySelector(".products");
    productListContainer.innerHTML = "";

    if (filteredProducts.length > 0) {
      filteredProducts.forEach(product => {
        const productItem = document.createElement("div");
        productItem.innerHTML = `<p>${product.name} - ${product.priceRupiah}</p>`;
        productListContainer.appendChild(productItem);
      });
    } else {
        productListContainer.innerHTML = '<p>No results found with that query</p>'
    }
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

