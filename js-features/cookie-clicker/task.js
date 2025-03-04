let numberClick = 0;
let cycleClick = 0;
const clickerImage = document.querySelector('img');
let spanElement = document.querySelector('span');
let classElement = document.querySelector('.clicker__cookie');

function resetImage() {
    numberClick += 1;
    spanElement.textContent = numberClick;
    classElement.width = "250";
    if(numberClick % 2 === 0) {
        classElement.width = "200";
    }
    
   /* speedClick = function() {
        if(!intervalClick) {
            intervalClick = setInterval(cycleClick += 1, 1000);
        }
        return numberClick / cycleClick;
    }*/
}

clickerImage.addEventListener('click', resetImage, false);