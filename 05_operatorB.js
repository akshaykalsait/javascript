
console.log("===============Step 1===============");
function greaterNumber( n1 , n2 ) {
    console.log(`Given Numbers are : ${n1} , ${n2}`);    
    var result = n1 > n2 ? `${n1} is greater than ${n2}` : `${n2} is greater than ${n1}`;
    

    console.log(result);
}
greaterNumber(10, -10);
console.log("----------------------------");
greaterNumber(800, 899);

console.log("===============Step 2===============");

function isEvenOrOddNum(num) {
    console.log("Given Number Is :",  num);
    result = num % 2 == 0 ? `Given Number  ${num} is: Even Number` : `Given Number ${num} is: Odd Number`;
    return result;
    
}

var returnValue = isEvenOrOddNum(29);
console.log(returnValue);
console.log("----------------------------");
var returnValue = isEvenOrOddNum(44);
console.log(returnValue);

console.log("----------------------------");
var returnValue = isEvenOrOddNum(0);
console.log(returnValue);

console.log("----------------------------");
var returnValue = isEvenOrOddNum(101);
console.log(returnValue);

console.log("===============Step 3===============");



function wordLength(num) {

    console.log(`Given Word is "${num}"`);

    var len = num.length;
    console.log("Lenght of given word is :" , len);
    var result = len % 2 == 0 ? `Given word "${num}" Having Even Length` : `Given word "${num}" Having Odd Length`;
    return result;
    
   
}
returnValue = wordLength("JavaScript");
console.log(returnValue);


console.log("----------------------------");

returnValue = wordLength("developer");
console.log(returnValue);

console.log("----------------------------");

returnValue = wordLength("Google");
console.log(returnValue);



