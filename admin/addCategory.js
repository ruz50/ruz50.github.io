'use strict';
// localStorage.clear()
btn.addEventListener(`click`, function(){
    let categories;
    let catId=0
    if(localStorage.getItem(`categories`)){
        categories = JSON.parse(localStorage.getItem(`categories`))
    }else{
        categories = [];
    }
    if(localStorage.getItem(`catId`)){
        catId = +localStorage.getItem(`catId`)+1
    }

    let obj = {
        id:catId,
        title:text.value,
    }

    categories.push(obj);

    localStorage.setItem(`categories`, JSON.stringify(categories))
    localStorage.setItem(`catId`, catId);
    location.href=`../index.html`

})