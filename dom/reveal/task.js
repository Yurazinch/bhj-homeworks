const reveal = document.querySelectorAll('.reveal');
const heightWindow = window.innerHeight;
for(let i of reveal) {
i.addEventListener('scroll', (e) => {
  e.preventDefault();
  let elTop = i.getBoundingClientRect().top;
  let elBottom = i.getBoundingClientRect().bottom;
  if(elTop  > 0 && elBottom < heightWindow) {
    i.classList.add('.reveal_active');
    } else {
    i.classList.remove('.reveal_active');
    }
  })
}