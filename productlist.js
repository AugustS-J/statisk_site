fetch("https://kea-alt-del.dk/t7/api/products/")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  //console.log(product);

  //fang template
  const template = document.querySelector("#smallProductTemplate").content;

  //lav en kopi
  const copy = template.cloneNode(true);

  //ændre indhold
  copy.querySelector(".display-name").textContent = product.productdisplayname;
  copy.querySelector(".brand-name").textContent = product.brandname;
  copy.querySelector(".priser").textContent = product.price + " DKK";
  copy.querySelector(".discount").textContent = product.discount + " %";
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  if (product.soldout) {
    //produkt er udsolgt
    copy.querySelector("article").classList.add("soldout");
  }

  copy.querySelector(".single-product").setAttribute("href", `product.html?id=${product.id}`);

  //appende
  document.querySelector(".product-grid").appendChild(copy);
}

/*
<article class="smallProduct">
                <h3></h3>
                <p class="produkt-overskrift"></p>
                <img src="" alt="">
                <p class="produkt-priser"></p>
                <div class="discount-badge">
                    <p></p>
                    <p></p>
                </div>
                <div class="sold-out-badge"></div>
                <a href="produkt.html">Læs mere</a>
            </article>

{
  "id": 1163,
  "gender": "Men",
  "category": "Apparel",
  "subcategory": "Topwear",
  "articletype": "Tshirts",
  "season": "Summer",
  "productionyear": 2011,
  "usagetype": "Sports",
  "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
  "price": 895,
  "discount": null,
  "brandname": "Nike",
  "soldout": 0
}
*/
