const card = document.querySelector('#signin');
const form = document.querySelector('#signin__form');
const welcome = document.querySelector('#welcome');

if(localStorage.userId) {
  card.classList.remove('signin_active');
  welcome.classList.add('welcome_active');
}

form.addEventListener('submit', (e) => {
  e.preventDefault();  
  const formData = new FormData(form);
  //пытался без аргумента form добавить данные из формы
  /*
  let log = document.forms[0].elements[0].value;
  let pass = document.forms[0].elements[1].value;
  console.log(log, pass);
  formData.append("login", log);
  formData.append("password", pass);
  */
  console.log(formData);//пустой объект, почему не добавляются данные?
  const xhr = new XMLHttpRequest();
  const url = form.action;//данные url из формы
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-Type', 'multipart/form-data');
  xhr.send(formData); //ошибка 500 (Internal Server Error)
  form.reset();
  let data = JSON.parse(xhr.responseText);  //ошибка Uncaught SyntaxError: Unexpected end of JSON input
                                            //at JSON.parse (<anonymous>)
                                            //at HTMLFormElement.<anonymous>
  console.log(data);
  if(data.success === true) {
    card.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    userId = response.user_id;
    localStorage.userId = response.user_id;
  } else {
    alert('Ошибка авторизации')
  }
})