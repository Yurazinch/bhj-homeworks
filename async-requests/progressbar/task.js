let progress = document.querySelector('#progress');
let form = document.querySelector('#form');
const fileInput = document.getElementById('file');
let fileName = document.querySelector('.input__wrapper-desc');

fileInput.addEventListener('change', (e) => {
  fileName.textContent = fileInput.value.split('\\').pop();  
})
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let form_Data = new FormData(form);
  let xhr = new XMLHttpRequest( );
  xhr.upload.onprogress = function(event) {
    progress.value = event.loaded / event.total;
  }
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  xhr.send(form_Data);  
})