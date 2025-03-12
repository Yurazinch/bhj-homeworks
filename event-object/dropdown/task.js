const button = document.querySelector('.dropdown');
const list = document.querySelector('.dropdown__list');
const items = document.querySelectorAll('.dropdown__item');

button.addEventListener('click', (event) => list.classList.toggle("dropdown__list_active"));

items.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('.dropdown__value').textContent = item.textContent;   
  });
})
