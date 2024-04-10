
let operation = '';
let lastInput = '';
let num1 = 0;
let num2 = '';
let result = '';
let operations = ['plus', 'minus', 'xmark', 'divide'];
//<i class="fa-solid fa-"></i>


document.querySelectorAll(".btn").forEach((n) => n.addEventListener("click", checkInput));

function checkInput(e){
    let input = e.currentTarget.value;
    let outputLast = document.querySelector("#outputLast");
    let outputCurrent = document.querySelector("#outputCurrent");
    
    if (operations.includes(input)){
        outputLast.innerHTML = num1 + ' <i class="fs-5 fa-solid fa-'+input+'"></i>';

        operation = input;
    } else if (input == 'equals'){
        console.log(result);
        outputCurrent.textContent = result;
        outputLast.innerHTML = num1 + ' <i class="fs-5 fa-solid fa-'+operation+'"></i> '+num2 + ' <i class="fs-5 fa-solid fa-equals"></i>';
    } else {
        if (operations.includes(lastInput)){
            num2 = input;
            doOperation();
        } else {
            num1 = input;
            outputLast.textContent = input;
        }

        outputCurrent.textContent = input;
    } 

    
    lastInput = input;
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