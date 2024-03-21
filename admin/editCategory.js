'use strict';
let categories = JSON.parse(localStorage.getItem(`categories`))
let x = location.hash.slice(1);//id
console.log(x);
let id = categories.find((item)=>{
    return item.id==x
})
console.log(categories);
 catInp.value = id.title;

 catBtn.addEventListener(`click` , function(){
    id.title=catInp.value;
    localStorage.setItem(`categories`, JSON.stringify(categories));
    location.href = `../index.html`
 })