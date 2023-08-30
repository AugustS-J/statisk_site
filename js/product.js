fetch("https://kea-alt-del.dk/t7/api/products/1525")
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".display-name").textContent = product.productdisplayname;
  document.querySelector(".brand-name").textContent = product.brandname;
  document.querySelector(".priser").textContent = product.price + " DKK";
  document.querySelector(".discount").textContent = product.discount + " %";
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}
