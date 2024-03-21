'use strict';
// localStorage.clear()
function updateData() {
    const categories = JSON.parse(localStorage.getItem(`categories`));
    console.log(categories);
    tbody.innerHTML = ''
    categories.forEach(item => {
        tbody.insertAdjacentHTML(`afterbegin`, `
        <tr>
        <td>${item.id}</td>
        <td>${item.title}</td>
        <td><span class="material-symbols-outlined" onclick='delCategory(${item.id})'>
        auto_delete
        </span>
        <a href='editCategory.html#${item.id}'> <span class="material-symbols-outlined">
        edit_note
        </span></a>
       </td>
        </tr>
        `)
    });
}

function delCategory(x) {
    const categories = JSON.parse(localStorage.getItem(`categories`));

    let i = categories.findIndex((obj) => {
        return obj.id == x
    })

    categories.splice(i , 1)
    localStorage.setItem(`categories`, JSON.stringify(categories))
    updateData()

}

updateData()

function updateProd(){
    let prod = JSON.parse(localStorage.getItem(`products`));
    prodBody.innerHTML=``
    prod.forEach((obj)=>{
        prodBody.insertAdjacentHTML(`beforeend`, `
        <tr>
        <td>${obj.category}</td>
        <td>${obj.name}</td>
        <td>${obj.price}</td>
        <td>${obj.discount}</td>
        <td>${obj.description}</td>
        <td><img src='./img/${obj.img}'></td>
        <td><span class="material-symbols-outlined" onclick='delProduct(${obj.id})'>
        auto_delete
        </span>
        <a href='editProduct.html#${obj.id}'> <span class="material-symbols-outlined">
        edit_note
        </span></a></td>
        </tr>
        `)
    })
}

function delProduct(x){
    const products = JSON.parse(localStorage.getItem(`products`));
    console.log(products);

   let obj= products.findIndex((item)=>{
    return item.id==x
    })
    products.splice(obj, 1)
    console.log(obj);
    localStorage.setItem(`products`, JSON.stringify(products))
    updateProd()
}

updateProd()

