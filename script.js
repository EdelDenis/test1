"use strict"

const input = document.querySelector(".input")
const button = document.querySelector(".button");
const text = document.querySelector(".text")


let array = [1,2,3,4,5,6,7,8,9,10];
let randomNumber = array[Math.floor(Math.random()*array.length)];
console.log(randomNumber);

function checkQuestion () {
    while(question == "" || isNaN(question) || question == null){
    question = prompt("Угадайте число от 1 до 10");
    }
}

function playGame (event) {
    event.preventDefault();
    let counter = 3;
    while(counter > 0){
    let question = prompt("Угадайте число от 1 до 10");
    
    checkQuestion();

    if(question == randomNumber){
        text.style.color = "Green";
        text.textContent = "Вы выиграли! Осталось попыток: " + counter;
        break; 
    } else {
        text.style.color = "Red";
        text.textContent = "Вы не угадали! Осталось попыток: " + counter;
        counter--;
    } if (counter == 0) {
        text.style.color = "Red";
        text.textContent = "Вы не угадали! Осталось попыток: " + counter;
        break;
    }
    
}
}



button.addEventListener("click", playGame);









