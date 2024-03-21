"use strict";
let cat = JSON.parse(localStorage.getItem(`categories`));

cat.forEach((obj) => {
  selProd.insertAdjacentHTML(
    `beforeend`,
    `
    <option value='${obj.title}'>${obj.title}</option>
    `
  );
});

let id = location.hash.slice(1);
console.log(id); //5

let prod = JSON.parse(localStorage.getItem(`products`));
console.log(prod);
let x = prod.find((obj) => {
  return obj.id == id;
});
console.log(x);

nameProd.value = x.name;
priceProd.value = x.price;
discountProd.value = x.discount;
descProd.value = x.description;
img.src = `./img/${x.img}`;
editBtn.addEventListener(`click`, function () {
  x.name = nameProd.value;
  x.price = priceProd.value;
  x.discount = discountProd.value;
  x.description = descProd.value;
  imgProd.files.length && (x.img = imgProd.files[0]["name"]);

  localStorage.setItem(`products`, JSON.stringify(prod));
  location.href = `index.html`;
});
