function factorialOfNum(num) {
    if (num == 0 || num == 1) {
       return `Factorial of given number ${num} is ---> 1` ;
    }
    if (num < 0 || num == null || num == undefined) {
       return `Factorial of given number ${num} is ---> invalid input`;
        
    }

    let result =1 ;
    for (let index = 1; index <=num; index++) {

        result = result * index ;
      
    }
    
return `Factorial of given number ${num} is ---> ${result}`;
    
}

console.log(factorialOfNum(5));
console.log(factorialOfNum(3));
console.log(factorialOfNum(null));
console.log(factorialOfNum(8));
console.log(factorialOfNum(undefined));
console.log(factorialOfNum(9));
console.log(factorialOfNum(0));


console.log(`-------------------------------------------------------`);




