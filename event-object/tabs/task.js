const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab__content');

tabs.forEach((item, index) => {
      item.addEventListener('click', (e) => {
        if(item.classList.contains('tab_active')) {
          item.classList.remove('tab_active');
        }
        if(e.target) {
          item.classList.add('tab_active');
        } 
        contents.forEach((item, i) => {
            if(i === index) {
                item.classList.add('tab__content_active');
            } else {
                item.classList.remove('tab__content_active');
            }
        })        
    });
})