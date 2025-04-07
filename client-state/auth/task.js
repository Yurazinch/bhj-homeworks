const signin = document.querySelector('#signin');
const form = document.querySelector('#signin__form');
const welcome = document.querySelector('#welcome');

function changeForm() {
  signin.classList.remove('signin_active');
  welcome.classList.add('welcome_active');
}

if(localStorage.userId) {
  document.getElementById('user_id').textContent = localStorage.userId;
  changeForm();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();  
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  const url = form.action;
  xhr.open('POST', url);
  xhr.responseType = 'json';
  xhr.send(formData);
  form.reset();
  xhr.onload = function() {
    let response = xhr.response;    
    if(response.success === true) {            
      localStorage.userId = response.user_id;
      document.getElementById('user_id').textContent = response.user_id;
      changeForm();
      } else {
        alert('Ошибка авторизации');
      }
    }
})