

const arrayNumbers = [1 , -7 , 40 , 502 , -77 , 91 , 0 , 108 , 89 , -601];
console.log(`Given Array is : [${arrayNumbers}]`);

console.log(`===============================Step 1========================================`);

console.log(`*** Array "INDEX" with its "ELEMENTS" ***`);
arrayNumbers.forEach( (element , index) => {
   
    console.log(index, "==>" , element);
          
});



console.log(`===============================Step 2========================================`);

console.log(`*** Positive Numbers available in Given Array are -->`);

arrayNumbers.forEach( (element)=> {
    if (element >=0) {
     
        console.log( `${element}`);
        
    }
})

console.log(`===============================Step 3========================================`);

    //console.log(`Negative Numbers New Array from Given Array  is -->`);
    const newArray = [];
  arrayNumbers.forEach( (element) =>{
    if (element < 0) {

       newArray.push(element);
       
    }
    
});
console.log(`Negative Numbers New Array from Given Array  is --> [${newArray}]`);

console.log(`===============================Step 4========================================`);

console.log(`Even Numbers from Given Array are -->`);

arrayNumbers.forEach( (element) => {
    if (element % 2 == 0) {
        console.log(element);
        
    }
})

console.log(`===============================Step 5========================================`);

let sum = 0;
arrayNumbers.forEach( (element) => {
    
    sum = sum + element;

})
console.log(`Sum of all elements from given Array is --> ${sum}`);

console.log(`===============================Step 6========================================`);

console.log(`Even indexed Array Values from Given Array is -->`);

arrayNumbers.forEach( (element ,index) => {

    if (index % 2 == 0) {
        console.log(element);
        
    }

})

console.log(`*******************************************END*********************************************************`);