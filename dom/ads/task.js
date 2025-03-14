const cases = document.querySelectorAll('.rotator__case');
const intId = setInterval(rotation, 1000);
let i = 0;

function rotation() {
  if(i < cases.length) {
  cases[i].classList.remove('rotator__case_active'); 
  i += 1;
  cases[i].classList.add('rotator__case_active');
  } else {
    i = 0;
    cases[i].classList.add('rotator__case_active');
  }
}