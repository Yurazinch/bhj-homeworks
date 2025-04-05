const modal = document.getElementById('subscribe-modal');
const close = document.querySelector('.modal__close');
let state;//создал для версии с локальным хранилищем

//cookie очень зависит от настроек безопасности,
//у меня не дает записывать, нужно сбрасывать настройки
//или обходить в коде (как обойти?)

/*window.addEventListener('load', (e) => {  
    console.log(document.cookie); //после перезагрузки куки удалены
    if(document.cookie !== 'state=0') {
    modal.classList.add('modal_active');
    }
  })
  close.addEventListener('click', (e) => {
    document.cookie = 'state=0';
    modal.classList.remove('modal_active');
    console.log(document.cookie); //!записывает, если Cookie
  })
*/

//реализация на локальном хранилище работает
window.addEventListener('load', (e) => {
   state = localStorage.getItem('state');
   if(state !== 'inactive') {
    modal.classList.add('modal_active');
   }
 });
close.addEventListener('click', (e) => {  
  localStorage.state = 'inactive';
  modal.classList.remove('modal_active');  
})
