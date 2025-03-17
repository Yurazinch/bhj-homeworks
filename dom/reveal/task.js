const reveal = document.querySelectorAll('.reveal');
const heightWindow = window.innerHeight;

document.addEventListener('scroll', (e) => {    
  if((reveal[0].getBoundingClientRect().top  > 0) && (reveal[0].getBoundingClientRect().bottom < heightWindow)) {
    reveal[0].classList.add('reveal_active');
    } else {
    reveal[0].classList.remove('reveal_active');
    }
})
document.addEventListener('scroll', (e) => {
  if((reveal[1].getBoundingClientRect().top  > 0) && (reveal[1].getBoundingClientRect().bottom < heightWindow)) {
    reveal[1].classList.add('reveal_active');
    } else {
    reveal[1].classList.remove('reveal_active');
    }
})