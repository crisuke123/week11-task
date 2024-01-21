const myBotton = document.querySelector('button');
const myBox = document.querySelector ('.box');
const colors = ["red", "green", "blue", "yellow"];


myBotton.addEventListener('click',changecolor);

function changecolor() {
    console.log(myBox);


    let randomIndex = Math.floor(Math.random() * colors.length);
    console.log(randomIndex);
    myBox.style.backgroundColor = colors[randomIndex];
}