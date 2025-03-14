const reveal = document.querySelectorAll('.reveal');
const heightWindow = window.innerHeight;

reveal[0].addEventListener('scroll', visibleScroll);
reveal[1].addEventListener('scroll', visibleScroll);

function visibleScroll(el) {
    let elTop = el.getBoundingClientRect().top;
    let elBottom = el.getBoundingClientRect().bottom;    
    if(elTop  < heightWindow && elBottom > 0) {
      el.classList.add('.reveal_active');
    } 
    if(el.classList.contains('.reveal_active')) {
      el.classList.remove('.reveal_active');
    } 
} 
