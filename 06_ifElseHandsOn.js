console.log(`-----------------------Assignment 2-----------------------`);

console.log(`====================Step 1====================`);
var evenOrOdd = function (num) {
    var resultValue = "";
    if (num % 2 == 0) {
         resultValue = `Given Number Value ${num} is : Even Number`;
        
    } else {
         resultValue = `Given Number Value ${num} is : ODD Number`;
    }
    return resultValue;
}
var result = evenOrOdd(45);
console.log( result);


var result = evenOrOdd(70);
console.log( result);


var result = evenOrOdd(67);
console.log( result);


var result = evenOrOdd(98);
console.log( result);

console.log(`====================Step 2====================`);


var eligiblityForVote = function (age) {
    var returnValue = "";

    if (age >= 18) {
        returnValue =`Hey... your age is ${age} means you are Eligible For Voting`         
    } else {
        returnValue = `Hey... your age is ${age} means you are Not Eligible For Voting` 
    }
    return returnValue;
}
    var result = eligiblityForVote(18);
    console.log(result);

    var result = eligiblityForVote(20);
    console.log(result);

    var result = eligiblityForVote(17);
    console.log(result);
    
    var result = eligiblityForVote(40);
    console.log(result);

    console.log(`====================Step 3====================`);

    var charCount = function(string) {
       
        var len = string.length;
        console.log(`Given string "${string}" having length ${len}`);
        var returnValue = "";
        if (len > 10) {
            returnValue = `It Means Given string contains more than 10 Characters`;
        } else {
            returnValue = `Given string does not contains more than 10 Characters`;
        }
        return returnValue;

    }
        var result = charCount(`JavaScript-ES6`);
        console.log(result);

        console.log(`====================Step 4====================`);

        var startsWith = function (string) {
            var res = string.startsWith(`Java`);
            var resultValue = "";
            if (res) {
                resultValue = `Yes, Given String "${string}" starts with word "Java"`
                
            } else {
                resultValue = `NO, Given String "${string}" does not starts with word "Java"`
            }
            return resultValue;
        }
            var result = startsWith("JavaScript Language");
            console.log(result);