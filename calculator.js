
let operation = '';
// let lastInput = '';
let secondNum = false;
let num1 = 0;
let num2 = '';
let result = '';
let operations = ['plus', 'minus', 'xmark', 'divide'];


document.querySelectorAll(".btn").forEach((n) => n.addEventListener("click", checkInput));

function checkInput(e){
    let input = e.currentTarget.value;
    let outputLast = document.querySelector("#outputLast");
    let outputCurrent = document.querySelector("#outputCurrent");
    
    if (operations.includes(input)){
        outputLast.innerHTML = num1 + ' <i class="fs-5 fa-solid fa-'+input+'"></i> ';
        secondNum = true;
        num2 = '';
        operation = input;
    } else if (input == 'equals'){
        console.log(num1 +" "+ num2);
        doOperation();
        outputCurrent.textContent = result;
        outputLast.innerHTML = num1 + ' <i class="fs-5 fa-solid fa-'+operation+'"></i> '+num2 + ' <i class="fs-5 fa-solid fa-equals"></i>';
        num2 = '';
        num1 = result;
    } else {
        if (secondNum){
            if (outputCurrent.textContent == num1){
                outputCurrent.textContent = '';
            }
            num2 += input;
            outputCurrent.textContent = num2;
            outputLast.innerHTML += input;
        } else {
            num1 == 0 ? num1 = input : num1 += input;
            outputCurrent.textContent = num1;
        }

    } 

    
    // lastInput = input;
}

function doOperation(){
    n1 = parseInt(num1);
    n2 = parseInt(num2);
    switch (operation) {
        case "plus":
            result = n1 + n2;
            break;
        case "minus":
            result = n1 - n2;
            break;
        case "xmark":
            result = n1 * n2;
            break;
        default:
            if (n2 === 0){
                result = "No se puede dividir entre 0";
            }
            result = n1 / n2;
    }
}