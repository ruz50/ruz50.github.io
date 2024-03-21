"use strict";
let categories = JSON.parse(localStorage.getItem(`categories`));

let products = JSON.parse(localStorage.getItem(`products`));

categories.forEach((obj) => {
  ul.insertAdjacentHTML(
    `beforeend`,
    `
<li onclick='showData("${obj.title}")'>${obj.title}</li>
`
  );
});

function showData(categoryName) {
  section.innerHTML = "";

  let products = JSON.parse(localStorage.getItem(`products`));
  console.log(products);

  if (categoryName) {
    products = products.filter((cat) => cat.category == categoryName);
    console.log(products);
  }
  if (products) {
    products.forEach((obj) => {
      section.insertAdjacentHTML(
        `beforeend`,
        `
          <div class='parent'>
              <div id='img'>
              <img src='./img/${obj.img}'>
              </div>
              <div id='text'>
              <div class='heading'>
               <h5>category : ${obj.category}</h5>
               <h5> name : ${obj.name}</h5>
              </div>
              <div>
              <p>price : <del>${obj.price}$</del></p>
              <p>new price : ${(
                obj.price -
                (obj.price * obj.discount) / 100
              ).toFixed(2)}$</p>
          </div>
          <div><button type='button' id='cartBtn' onclick='addToCart(${
            obj.id
          })'>to Cart</button></div>
          </div>
          </div>
          `
      );
    });
  }
}

showData();

function showCart() {
  basket.classList.toggle("active");
}

function addToCart(id) {
  let products = JSON.parse(localStorage.getItem(`products`));
  console.log(products);
  let orderList = JSON.parse(localStorage.getItem(`orderList`));

  if (orderList !== null) {
    let isRepeat = orderList.some((item) => item.id == id);
    if (isRepeat) {
      return;
    }
  } else {
    orderList = [];
  }

  let obj = products.find((item) => {
    return item.id == id;
  });

  let objectCart = {
    id: id,
    count: 1,
    name: obj.name,
    price: obj.price,
    discount: obj.discount,
  };

  orderList.push(objectCart);
  localStorage.setItem(`orderList`, JSON.stringify(orderList));
  rendercard();
}

function rendercard() {
  let orderList = JSON.parse(localStorage.getItem(`orderList`));
  let total = orderList.reduce((sum, item) => {
    let x = (item.price - (item.discount * item.price) / 100) * item.count;
    return (sum += +x);
  }, 0);
  prtotal.textContent = `TOTAL PRICE : ${total}$`;


  basket.innerHTML = ``;
  orderList?.forEach((item) => {
    basket.insertAdjacentHTML(
      `beforeend`,
      `
        <section>
        <h4>Product name : ${item.name}</h4>
        <p>Product price : ${
          (item.price - (item.discount * item.price) / 100) * item.count
        } $</p>
        <p>Product count : ${item.count}</p>
        <p><span onclick="changeCount(${item.id},'encrease')">+</span>
        <span onclick="changeCount(${item.id},'decrease')">-</span>
        <span onclick='remove(${item.id})'>delete</span></p>
        </section>
        `
    );
  });
}

function remove(id) {
  console.log("remove");
  let orderList = JSON.parse(localStorage.getItem(`orderList`));
  let index = orderList.findIndex((item) => {
    return item.id == id;
  });
  orderList.splice(index, 1);
  localStorage.setItem(`orderList`, JSON.stringify(orderList));
  rendercard();
}
rendercard();

function changeCount(id, actionType) {
  let orderList = JSON.parse(localStorage.getItem(`orderList`));
  let obj = orderList.find((item) => {
    return item.id == id;
  });
  if (actionType == "encrease") {
    obj.count++;
  }
  if (actionType == "decrease") {
    if (obj.count == 1) {
      remove(id);
    } else {
      obj.count--;
    }
  }
  localStorage.setItem(`orderList`, JSON.stringify(orderList));
  rendercard();
}
rendercard();
