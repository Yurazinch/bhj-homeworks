const body = document.querySelector('body');
const hasTooltips = document.querySelectorAll('.has-tooltip');

Array.from(hasTooltips).forEach((item, i) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    let tooltipText = item.getAttribute('title');    
    let modalText = document.createElement('div');
    modalText.classList.add('tooltip');
    modalText.style.display = 'block';
    let pointTop = item.getBoundingClientRect().top;
    let pointLeft = item.getBoundingClientRect().left;
    modalText.setAttribute('style', `left: ${pointLeft}; top: ${pointTop}`);    
    modalText.textContent = tooltipText;
    console.log(modalText);
    body.appendChild(modalText);
  })
})