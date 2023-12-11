let outputFrame = document.querySelector("body")
outputFrame.innerHTML += `<p id="output"></p>`

function compare(){
    let age = document.querySelector("#age").value
    let output = document.querySelector("#output")
    if(age >= 18){
        output.innerHTML = "Habibi komm rein rauche eine Pfeife"
        console.log(true)
        
    }else{
        output.innerHTML = "Habibi komm rein rauche eine Pfeife aber erzähl nicht den Behörden"
        console.log(false)
    }
}