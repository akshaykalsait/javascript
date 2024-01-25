



const additionButton = document.querySelector("#addition");
const firstInput = document.querySelector("#field-one");
const secondInput = document.querySelector("#field-two");
const resultValue = document.querySelector("#resultValue");

additionButton.addEventListener('click' , () => {

    
const valueOne = +firstInput.value;
const valueTwo = +secondInput.value;
const result = valueOne + valueTwo;



if (firstInput.value == "" && secondInput.value == "") {
    resultValue.innerHTML = "First Enter Valid Inputs and Then Check for Result";
    
} else {
    resultValue.innerHTML = result; 
    resultValue.style.color = "black";
    
}



});

const substractionButton = document.querySelector("#substraction");


substractionButton.addEventListener('click' , () => {
    resultValue.style.color = "black";
    
const valueOne = +firstInput.value;
const valueTwo = +secondInput.value;
const result = valueOne - valueTwo;



if (firstInput.value == "" && secondInput.value == "") {
    resultValue.innerHTML = "First Enter Valid Inputs and Then Check for Result";
    
} else {
    resultValue.innerHTML = result; 
    
}

});


const multiplicationButton = document.querySelector("#multiplication");


multiplicationButton.addEventListener('click' , () => {

    resultValue.style.color = "black";
const valueOne = +firstInput.value;
const valueTwo = +secondInput.value;
const result = valueOne * valueTwo;



if (firstInput.value == "" && secondInput.value == "") {
    resultValue.innerHTML = "First Enter Valid Inputs and Then Check for Result";
    if (firstInput.value == "" && secondInput.value == "") {
        
        
    }
    
} else {
    resultValue.innerHTML = result; 
    
}

});




const divisionButton = document.querySelector("#division");


divisionButton.addEventListener('click' , () => {
    resultValue.style.color = "black";
    
const valueOne = +firstInput.value;
const valueTwo = +secondInput.value;
const result = valueOne / valueTwo;

if (secondInput.value == 0) {
    resultValue.innerHTML = "Cannot divide by 0";
    
    resultValue.style.color = "red";

    
    

    if (firstInput.value == "" || secondInput.value == "") {
        resultValue.style.color = "black";
        resultValue.innerHTML = "First Enter Valid Inputs and Then Check for Result";   
    }
    
}

else {
    resultValue.innerHTML = result; 
    resultValue.style.color = "black";
}



});




const resetButton = document.querySelector("#reset");
resetButton.addEventListener('click' , () =>{
    resultValue.style.color = "black";
    resultValue.innerHTML = `Enter Inputs To Perform New Operation`;
    firstInput.value = "";
    secondInput.value = "";
})







