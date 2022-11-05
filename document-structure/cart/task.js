const dec = document.querySelectorAll('.product__quantity-control_dec');
const inc = document.querySelectorAll('.product__quantity-control_inc');
const productAdd = document.querySelectorAll('.product__add');
const cartProducts = document.querySelector('.cart__products');
const cart = document.querySelector('.cart');

for (let i = 0; i < inc.length; i++) {
    inc[i].addEventListener('click', event => {
        event.target.previousElementSibling.innerText++;
    })
}

for (let i = 0; i < dec.length; i++) {
    dec[i].addEventListener('click', event => {
        const value = event.target.nextElementSibling;
        value.innerText == 0 ? value.innerText = 0 : value.innerText--;
    })
}

for (let i = 0; i < productAdd.length; i++) {
    productAdd[i].addEventListener('click', function() {
        const product = this.closest('.product')
        const imgProduct = product.querySelector('img').src;
        const value = product.querySelector('.product__quantity-value').innerText;
        const arrProducts = Array.from(cartProducts.children);
        const cartProduct = `
        <div class="cart__product" data-id="${product.dataset.id}">
            <img class="cart__product-image" src="${imgProduct}">
            <div class="cart__product-count">${value}</div>
            <a href="#" class="cart__product-remove">&times;</a>
        </div>`;

        cart.hidden = false;
        if(arrProducts.some(item => item.dataset.id === product.dataset.id)) {
            arrProducts.find(item => {
                if(item.dataset.id === product.dataset.id) {
                    let cartProductCount = item.querySelector('.cart__product-count').innerText;
                    item.querySelector('.cart__product-count').innerText = Number(cartProductCount) + Number(value);
                }
            })
        }else if(value != 0){
            cartProducts.insertAdjacentHTML('afterBegin', cartProduct);
            removeProduct();
        }
    })
}

const removeProduct = () => {
    const cartProductRemove = document.querySelectorAll('.cart__product-remove');
    for(let i = 0; i < cartProductRemove.length; i++) {
        cartProductRemove[i].onclick = () => {
            cartProductRemove[i].parentElement.remove();
            if(!cartProducts.children.length) {
                cart.hidden = true;
            }
        }
    }
}