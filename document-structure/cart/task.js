const cards = document.getElementsByClassName('product');
const quantityControls = document.getElementsByClassName('product__quantity-controls');
const quantityValues = document.getElementsByClassName('product__quantity-value');
const imgs = document.getElementsByClassName('product__image');
const cart = document.querySelector('.cart__products');

Array.from(quantityControls).forEach((item, i) => {
  item.addEventListener('click', (e) => {
    const target = e.target;      
    let quantity = Number(quantityValues[i].textContent);     
    if(target.classList.contains('product__quantity-control_inc')) {
      quantity += 1;     
      quantityValues[i].textContent = quantity;
    } 
    if(target.classList.contains('product__quantity-control_dec')) {
      if(quantity > 1) {
        quantity -= 1;
      } else {
        quantity =1;
      }
      quantityValues[i].textContent = quantity;
    }
  })
})

Array.from(cards).forEach((el, index) => {
  el.addEventListener('click', (e) => {
    const tg = e.target;
    
    if(tg.classList.contains('product__add')) {
      let dataId = el.getAttribute('data-id');
      let img = imgs[index].getAttribute('src');      
      let count = Number(quantityValues[index].textContent);      
      let i = Array.from(cart.children).findIndex(el => el.getAttribute('data-id') === dataId);
      if(i >= 0) {
        let balanse = Number(document.querySelectorAll('.cart__product-count')[i].textContent);
        document.querySelectorAll('.cart__product-count')[i].textContent = balanse + count;
      } else {
        let divCart = document.createElement('div');
        let imgCart = document.createElement('img');
        let countCart = document.createElement('div');
        divCart.classList.add('cart__product');
        imgCart.classList.add('cart__product-image');
        countCart.classList.add('cart__product-count');
        divCart.setAttribute('data-id', dataId);
        imgCart.setAttribute('src', img);
        countCart.textContent = count;
        cart.appendChild(divCart);
        divCart.appendChild(imgCart);
        divCart.appendChild(countCart);  
      }    
    }    
  })
})