const image = document.querySelector('img');
const items = document.querySelector('#items');

let xhr = new XMLHttpRequest( );
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send();
xhr.onreadystatechange = () => {
  if(xhr.readyState === 4) {
    let data = JSON.parse(xhr.responseText);    
    for(let el in data.response.Valute) {      
      let itemCode = data.response.Valute[el].CharCode;    
      let itemValue = data.response.Valute[el].Value;           
      items.insertAdjacentHTML("beforeEnd",`
        <div class="item">
        <div class="item__code">${itemCode}</div>        
        <div class="item__value">${itemValue}</div>
        <div class="item__currency">руб.</div>
        </div>
      `);
    }
  }
}
xhr.addEventListener('readystatechange', (e) => {
  if(xhr.readyState === xhr.DONE) {
    image.classList.remove('loader_active');
  }
})