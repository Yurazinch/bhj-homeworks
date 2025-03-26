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

    /*let task = document.createElement('div');
    let title = document.createElement('div');
    let delTask = document.createElement('a');
    task.classList.add('task');
    title.classList.add('task__title');
    title.textContent = input.value.trim();
    delTask.classList.add('task__remove');
    delTask.setAttribute('href', '#');
    delTask.innerHTML = "&times;";
    taskList.appendChild(task);
    task.appendChild(title);
    task.appendChild(delTask);*/

  } else {
    alert('Поле не должно быть пустым!')}  
})

taskList.addEventListener('click', (e) => {   
  if(e.target.classList.contains('task__remove')) { 
    e.target.parentElement.remove();
    }
})