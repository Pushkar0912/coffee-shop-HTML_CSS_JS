console.log("hello")
// close navbar
let navbar=document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.toggle('active')
    searchform.classList.remove('active')
    cartitem.classList.remove('active')
}

// search-btn
let searchform=document.querySelector('.header .search-form');
document.querySelector('#search-btn').onclick=()=>{
    searchform.classList.toggle('active')
    navbar.classList.remove('active')
    cartitem.classList.remove('active')
}

// cart-item open
let cartitem=document.querySelector('.header .cart-items-container');
document.querySelector('#cart-btn').onclick=()=>{
    cartitem.classList.toggle('active')
    navbar.classList.remove('active')
    searchform.classList.remove('active')
}


window.onscroll=()=>{
    navbar.classList.remove('active')
    searchform.classList.remove('active')
    cartitem.classList.remove('active')
}
