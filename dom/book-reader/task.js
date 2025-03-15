const books = document.querySelectorAll('.font-size');
const text = document.querySelector('.book__content')

books.forEach((item, index) => {  
  item.addEventListener('click', (e) => { 
    e.preventDefault();
    for(let i of books) {
      if(i.classList.contains('font-size_active')) {
        i.classList.remove('font-size_active');
      }
    }
    if(text.classList.contains('book_fs-small')) {
      text.classList.remove('book_fs-small');
    }
    if(text.classList.contains('book_fs-big')) {
      text.classList.remove('book_fs-big');
    }
    if(index === 0) {
      item.classList.add('font-size_active');
      text.classList.add('book_fs-small');
    }
    if(index === 1) {
      item.classList.add('font-size_active');
    }
    if(index === 2) {
      item.classList.add('font-size_active');
      text.classList.add('book_fs-big');
    }
  })
})