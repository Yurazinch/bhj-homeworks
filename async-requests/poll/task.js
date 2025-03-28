const title = document.querySelector('.poll__title');
const answers = document.querySelector('.poll__answers');

let xhr = new XMLHttpRequest( );
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send();
xhr.onreadystatechange = () => {
  if(xhr.readyState === 4) {
    let response = JSON.parse(xhr.responseText);
    title.textContent = response.data.title;
    for(let i = 0; i < response.data.answers.length; i++) {
      answers.insertAdjacentHTML("beforeEnd",`
      <button class="poll__answer">${response.data.answers[i]}</button>
      `);      
      }
    answers.addEventListener('click', (e) => { 
      if(e.target.classList.contains('poll__answer')) {
          alert('Спасибо, ваш голос засчитан!');
        }
    })
  }
}