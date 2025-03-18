const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab__content');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', (e) => {
    let i = Array.from(tabs).findIndex(el => el.classList.contains('tab_active'));
    tabs[i].classList.remove('tab_active');
    contents[i].classList.remove('tab__content_active');
    tabs[index].classList.add('tab_active');
    contents[index].classList.add('tab__content_active');
  })      
})