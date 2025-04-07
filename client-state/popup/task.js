const modal = document.getElementById('subscribe-modal');
const close = document.querySelector('.modal__close');

window.addEventListener('load', (e) => {    
  let modalClosed = document.cookie.split(';').filter(el => el === 'modal=closed')[0];  
  if(modalClosed !== 'modal=closed') {
  modal.classList.add('modal_active');
  }
})
close.addEventListener('click', (e) => {
  document.cookie = 'modal=closed';
  modal.classList.remove('modal_active');
})
