const body = document.querySelector('body');
const hasTooltips = document.querySelectorAll('.has-tooltip');
body.insertAdjacentHTML('beforeBegin', `<div class="tooltip"></div>`);
const tooltip = document.querySelector('.tooltip');

Array.from(hasTooltips).forEach((item, i) => {   
  item.addEventListener('click', (e) => {  
    e.preventDefault();
    let titleText = item.getAttribute('title');    
    if(titleText === tooltip.innerText) {
      tooltip.classList.toggle('tooltip_active');           
    } else {
    let pointTop = item.getBoundingClientRect().top;
    let pointLeft = item.getBoundingClientRect().left;
    tooltip.setAttribute('style', `left: ${pointLeft}px; top: ${pointTop + 20}px`);
    tooltip.textContent = titleText;        
    tooltip.classList.add('tooltip_active');
    }    
  })
})