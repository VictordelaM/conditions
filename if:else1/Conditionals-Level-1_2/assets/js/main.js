function eingabe(){
    let weather = document.querySelector("#wetterEingabe").value
    let output = document.querySelector("#output")

    if(weather > 10){
        output.innerHTML = "chill mal digga"
    } else if(weather >= 8 && weather <= 10){
        output.innerHTML = "super"
    } else if(weather >= 6 && weather <= 7){
        output.innerHTML = "gut"
    } else if(weather >= 3 && weather <= 5){
        output.innerHTML = "okay"
    } else if(weather >= 0 && weather <= 2){
        output.innerHTML = "schlecht"
    } else {
        output.innerHTML = "so schlimm kanns nicht sein"
    }
}
