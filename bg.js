const body = document.querySelector("body");

const IMG_NUMBER = 3;

function showImage(imgNumber){
    const image = new Image();
    image.src = `./Image/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}
function genRandom(){
    const rand = Math.random() * IMG_NUMBER;
    return Math.floor(rand);
}
function init(){
    const randomNumber = genRandom(); 
    showImage(randomNumber);
}
init();