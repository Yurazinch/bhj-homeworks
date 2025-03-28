let progress = document.querySelector('#progress');
let form = document.querySelector('#form');
let file = document.querySelector('.input__wrapper-desc');

form.addEventListener('submit', (e) => {
  let formData = new FormData(form);
  form.append('file', 'fileName');
  let xhr = new XMLHttpRequest( );
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  xhr.send(formData);
  xhr.addEventListener('readystatechange', function() {
  xhr.readyState === progress.value;
  })
})