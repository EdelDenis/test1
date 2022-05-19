"use strict"




let array = [1,2,3,4,5,6,7,8,9,10];
let randomNumber = array[Math.floor(Math.random()*array.length)];
console.log(randomNumber);

let text = document.querySelector(".text");
const addForm = document.querySelector("form.add");
const addInput = addForm.querySelector(".adding__input");
const btn = addForm.querySelector(".button");




addForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    let counter = 3;
    
    let answer = addInput.value;
    
    if(answer == "" || isNaN(answer)){
        text.style.color = "orange";
        text.textContent = "Введите число !"
    } else {
        if(randomNumber == answer){
            text.style.color = "green";
            text.textContent = "Вы выиграли! Осталось попыток " + counter;
            event.target.reset();
        } else{
            text.style.color = "red";
            counter--;
            text.textContent = "Вы проиграли! Осталось попыток " + counter; 
            event.target.reset();
        }
    }
})













