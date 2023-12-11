

function compare(){
    let age = document.querySelector("#age").value
    let output = document.querySelector("#output")
    if(age >= 18){
        output.innerHTML = "is ok"
        console.log(true)
        
    }else{
        output.innerHTML = "run"
        console.log(false)
    }
}