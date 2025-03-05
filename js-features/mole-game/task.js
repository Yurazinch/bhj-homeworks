let board = document.querySelectorAll(".hole");
let mole = document.getElementsByClassName("hole_has-mole");
let dead = 0;
let lost = 0;
for(element of board) {
    element.addEventListener('click', (element, mole) => {
        if(element === mole) {
            dead += 1;
            document.getElementById("dead").textContent = dead;
        } else {
            lost += 1;
            document.getElementById("lost").textContent = lost;
        }
        if(dead >= 10) {
            window.alert('Вы победили!');
            dead = 0;
            lost = 0;
        }
        if(lost >= 5) {
            window.alert('Вы проиграли!');
            dead = 0;
            lost = 0;
        }
    }, false);
}