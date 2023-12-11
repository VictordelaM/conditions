const ageJohn = 22
const ageMeike = 34
const sizeJohn = 170
const sizeMeike = 168
const nameJohn = "John"
const nameMeike = "Meike"
let scoreJohn = 0
let scoreMeike = 0

function calcScore(age, size, name){
    if(name == "John")
        scoreJohn = age * 5 + size
    else if(name == "Meike")
        scoreMeike = age * 5 + size
}

function compare(){
    calcScore(ageJohn, sizeJohn, nameJohn)
    calcScore(ageMeike, sizeMeike, nameMeike)
    if(scoreMeike > scoreJohn){
        console.log("Meike wins")
    }
    else if(scoreJohn > scoreMeike){
        console.log("John wins")
    } else{
        console.log("Unentschieden")
    }
}

compare()