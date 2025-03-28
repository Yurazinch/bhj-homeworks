const loader = document.querySelector('#loader');
const items = document.querySelector('#items');
const itemCode = document.querySelectorAll('.item__code');
const itemValue = document.querySelectorAll('.item__value');
const itemCurrency = document.querySelectorAll('.item__currency');

let xhr = new XMLHttpRequest( );
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send();
xhr.onreadystatechange = () => {
  if(xhr.readyState === 4) {
    let data = JSON.parse(xhr.responseText);    
    for(let el in data.response.Valute) {
      items.insertAdjacentHTML("beforeEnd",`
        <div class="item">
        <div class="item__code">${itemCode}</div>
        <div class="item__value">${itemValue}</div>
        <div class="item__currency">${itemCurrency}</div>
        </div>
      `);      
      itemCode.textContent = el.CharCode;    
      itemValue.textContent = el.Name;    
      itemCurrency.textContent = el.Value;
    }
  }
}
xhr.addEventListener('readystatechange', (e) => {
  if(xhr.readyState === xhr.DONE) {
    loader.classList.remove('loader_active');
  }
})