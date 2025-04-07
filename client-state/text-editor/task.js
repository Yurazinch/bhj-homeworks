const editor = document.getElementById('editor')

editor.addEventListener('input', e => {
  localStorage.text = editor.value;
})
              
window.addEventListener('load', e => {
  editor.value = localStorage.getItem('text');
})