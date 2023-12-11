const changeColor = document.querySelector("body")
let zweite = document.querySelector("#zweite")


function change(){
    let value = document.querySelector(`#slidebar`).value
    console.log(document.querySelector('#slidebar').value)
    if(value <= 50)
        {changeColor.style.backgroundColor = ("green")
        zweite.innerHTML = "Good Level of health effect: Little or no risk"}
    else if(value <= 100 && value > 50)
        {zweite.innerHTML = "Good Level of health effect: Little or no risk"
        changeColor.style.backgroundColor = ("yellow")}
    else if(value <= 150 && value > 100)
        {changeColor.style.backgroundColor = ("orange")
        zweite.innerHTML = "Good Level of health effect: Little or no risk"}
}