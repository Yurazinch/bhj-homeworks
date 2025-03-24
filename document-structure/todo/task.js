const form = document.querySelector('form');
const input = document.querySelector('input');
const taskList = document.querySelector('.tasks__list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if(input.value) {     
    let task = document.createElement('div');
    let title = document.createElement('div');
    let delTask = document.createElement('a');
    task.classList.add('task');
    title.classList.add('task__title');
    title.textContent = input.value;
    delTask.classList.add('task__remove');
    delTask.setAttribute('href', '#');
    delTask.innerHTML = "&times;";
    taskList.appendChild(task);
    task.appendChild(title);
    task.appendChild(delTask);
  } else {
    alert('Поле не должно быть пустым!')}  
})

taskList.addEventListener('click', (e) => {  
  if(e.target != e.currentTarget) {
    target = e.target;  
    target.parentElement.remove();
    }
})