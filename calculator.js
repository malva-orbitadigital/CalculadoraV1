
let operation = '';
// let lastInput = '';
let secondNum = false;
let num1 = '0';
let num2 = '';
let result = '';
let operations = ['plus', 'minus', 'xmark', 'divide'];


document.querySelectorAll(".btn").forEach((n) => n.addEventListener("click", checkInput));

function checkInput(e){
    let input = e.currentTarget.value;
    //console.log(input);
    let outputLast = document.querySelector("#outputLast");
    let outputCurrent = document.querySelector("#outputCurrent");
    
    if (operations.includes(input)){    // OPERATIONS
        if (num2 !== ''){
            doOperation();
            outputLast.innerHTML = result + ' <i class="fs-5 fa-solid fa-'+operation+'"></i> ';
            outputCurrent.innerHTML = result;
            num1 = result;
        } else {
            outputLast.innerHTML = num1 + ' <i class="fs-5 fa-solid fa-'+input+'"></i> ';
        }
        num2 = '';
        secondNum = true;
        operation = input;
    } else if (input == 'equals'){      // RESOLVE OPERATION
        doOperation();
        outputCurrent.textContent = result;
        outputLast.innerHTML = num1 + ' <i class="fs-5 fa-solid fa-'+operation+'"></i> '+num2 + ' <i class="fs-5 fa-solid fa-equals"></i>';
        num2 = '';
        num1 = result;
    } else if (input == 'delete') {     // DELETE ONE NUMBER 
        if (secondNum) {

        } else {
            num1 = num1.slice(-1, 1);
            outputCurrent.textContent = num1;
        }
    } else {                            // NUMBER
        if (secondNum){
            if (outputCurrent.textContent == num1){
                outputCurrent.textContent = '';
            }
            num2 += input;
            outputCurrent.textContent = num2;
            //outputLast.innerHTML += input;
        } else {
            num1 == 0 ? num1 = input : num1 += input;
            outputCurrent.textContent = num1;
        }
    } 

    //console.log(num1+' '+num2+' '+result+' '+operation);
    
    // lastInput = input;
}

function doOperation(){
    n1 = parseFloat(num1);
    n2 = parseFloat(num2);
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