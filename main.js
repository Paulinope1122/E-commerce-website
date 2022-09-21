'use strict'
const imageBtn = document.querySelector('.img-1');
const displayImg = document.querySelector('.modal-actions');
const backdrop = document.querySelector('.dropdown');
const nextImg = document.querySelector('.nimage')
const previousImg = document.querySelector('.pimage')
const changingImg = document.querySelector('.img-product1')
const closeIcon = document.querySelector('.close-icon')
const cartImage = document.querySelector('.cart-image')
const cartPrice = document.querySelector('.cart-prices')
const cartContainer = document.querySelector('.cart-container')
const amount = document.querySelector('.number')
const body = document.querySelector('body')
const plusBtn = document.querySelector('.plus-btn')
const minusBtn = document.querySelector('.minus-btn')
const cartAdd = document.querySelector('.cart-market')
const cartNumber = document.querySelector('.cart-number')

let i = 1;
let p = 1;

imageBtn.addEventListener('click', function(){
    backdrop.style.display = 'block';
    displayImg.style.display = 'block'
})
closeIcon.addEventListener('click', function(){
    backdrop.style.display = 'none'
    displayImg.style.display = 'none'
});
plusBtn.addEventListener('click', function(){
    amount.textContent = i++
    cartNumber.textContent = p++

});
minusBtn.addEventListener('click', function(){
    amount.textContent = i--
    cartNumber.textContent = p--
});
cartAdd.addEventListener('click', function(){
    amount.textContent = 0
    cartNumber.textContent = 0
    cartPrice.style.display = 'none'
})

nextImg.addEventListener('click', function(){
    if(changingImg.src.match('image-product-1.jpg')){
        changingImg.src = 'image-product-2.jpg'
    } else if (changingImg.src.match('image-product-2.jpg')){
        changingImg.src = 'image-product-3.jpg'
    } else if(changingImg.src.match('image-product-3.jpg')){
        changingImg.src = 'image-product-4.jpg'
    }else{
        changingImg.src = 'image-product-1.jpg'
    }
});
previousImg.addEventListener('click', function(){
    if(changingImg.src.match('image-product-4.jpg')){
        changingImg.src = 'image-product-3.jpg'
    } else if (changingImg.src.match('image-product-3.jpg')){
        changingImg.src = 'image-product-2.jpg'
    } else if(changingImg.src.match('image-product-2.jpg')){
        changingImg.src = 'image-product-1.jpg'
    }else{
        changingImg.src = 'image-product-4.jpg'
    }
});
cartImage.addEventListener('click', function(){
    cartPrice.style.display = 'block';
});
