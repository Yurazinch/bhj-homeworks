const form = document.querySelector('form');
const input = document.querySelector('input');
const taskList = document.querySelector('.tasks__list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if(input.value.trim()) {
    taskList.insertAdjacentHTML('beforeEnd', `
      <div class="task">
      <div class="task__title">${input.value}</div>
      <a href="#" class="task__remove">&times;</a>
      </div>
    `); 
    input.value = '';
  } else {
    alert('Поле не должно быть пустым!')}  
})

taskList.addEventListener('click', (e) => {   
  if(e.target.classList.contains('task__remove')) { 
    e.target.parentElement.remove();
    }
})