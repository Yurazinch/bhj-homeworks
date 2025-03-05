const timer = setInterval(() => { 
  let ticks = document.getElementById("timer").textContent;
  if(ticks <= 0) {
    clearInterval(timer);
    window.alert('Вы победили в конкурсе!');
  }
  ticks -= 1;
  document.getElementById("timer").textContent = ticks;
}, 1000);