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
    if(e.target.classList.contains('product__add')) {
      let dataId = el.getAttribute('data-id');
      let img = imgs[index].getAttribute('src');      
      let count = Number(quantityValues[index].textContent);      
      let inCartIndex = Array.from(cart.children).findIndex(el => el.getAttribute('data-id') === dataId);
      if(inCartIndex >= 0) {
        let balanse = Number(document.querySelectorAll('.cart__product-count')[inCartIndex].textContent);
        document.querySelectorAll('.cart__product-count')[inCartIndex].textContent = balanse + count;
      } else {
        cart.insertAdjacentHTML('beforeEnd', `
          <div class="cart__product" data-id=${dataId}>
            <img class="cart__product-image" src=${img}>
            <div class="cart__product-count">${count}</div>
          </div>
        `);
        /*
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
        */ 
      }    
    }    
  })
})