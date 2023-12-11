let sum = 0

function calc(num1, num2){
    if(num1 != num2){
        sum = num1 + num2
    } else{
        sum = num1 * 5
    }
    console.log(sum)
}

calc(2, 4)
