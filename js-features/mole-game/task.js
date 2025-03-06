let board = document.querySelectorAll(".hole");
let dead = 0;
let lost = 0;
for(let element of board) {
    element.addEventListener('click', () => {
        if(element.className.includes("hole hole_has-mole")) {
            dead += 1;
            document.getElementById("dead").textContent = dead;
        } else {
            lost += 1;
            document.getElementById("lost").textContent = lost;
        }
        if(dead >= 10) {
            window.alert('Вы победили!');
            dead = 0;
            document.getElementById("dead").textContent = dead;
            lost = 0;
            document.getElementById("lost").textContent = lost;
        }
        if(lost >= 5) {
            window.alert('Вы проиграли!');
            dead = 0;
            document.getElementById("dead").textContent = dead;
            lost = 0;
            document.getElementById("lost").textContent = lost;
        }
    }, false);
}