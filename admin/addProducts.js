'use strict'
let cat = JSON.parse(localStorage.getItem(`categories`))

cat.forEach(obj => {
    selProd.insertAdjacentHTML(`beforeend`, `
    <option value='${obj.title}'>${obj.title}</option>
    `)
});



prodBtn.addEventListener(`click`, function(){
    let products;
  let prodId=1;
    if(localStorage.getItem(`products`)){
        products = JSON.parse(localStorage.getItem(`products`))
    }else{
        products=[]
    }

    if(localStorage.getItem(`prodId`)){
        prodId = +localStorage.getItem(`prodId`)+1
    }

    let obj = {
        id:prodId,
        category : selProd.value,
        name:nameProd.value,
        price:priceProd.value,
        discount:discountProd.value,
        description:descProd.value,
        img: imgProd.files[0]['name']
    }
    products.push(obj)

    localStorage.setItem(`products`, JSON.stringify(products))
    localStorage.setItem(`prodId`, prodId)
    location.href=`../index.html`
})