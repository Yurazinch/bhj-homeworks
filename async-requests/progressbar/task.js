let progress = document.querySelector('#progress');
let form = document.querySelector('#form');
const fileInput = document.getElementById('file');
let fileName = document.querySelector('.input__wrapper-desc');


let form_Data = new FormData(form);
fileInput.addEventListener('change', (e) => {
  fileName.textContent = fileInput.value.split('\\').pop();  
})
form.addEventListener('submit', upload(), false);
function upload(form_Data) {
  let xhr = new XMLHttpRequest( );
  xhr.upload.onprogress = function(event) {
    progress.value = event.loaded;
  }
  xhr.onloadend = function() {
    if (xhr.status == 200) {
      console.log("Успех");
    } else {
      console.log("Ошибка " + this.status);
    }
  };
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  xhr.send(form_Data);  
}