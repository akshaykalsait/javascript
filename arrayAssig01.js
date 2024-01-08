
console.log(`================================Array Assignment================================`);

const fruits_seasonal = [`"Banana"` , `"Orange"` , `"Apple"` , `"Mango"` , `"Water Melon"`];
console.log(`Given Array is : ${fruits_seasonal}`);

var result = fruits_seasonal.length;
console.log(`Length of given Array is : ${result}`);

console.log(`================================step 1================================`);

console.log(`Original Array is : ${fruits_seasonal}`);
const firstElementAtIndex = fruits_seasonal[0];
console.log(`First Element in Array is: ${firstElementAtIndex}`);

const lastElementAtIndex = fruits_seasonal[fruits_seasonal.length - 1];
console.log(`Last Element in Array is: ${lastElementAtIndex}`);

console.log(`================================step 2================================`);

console.log(`Original Array is : ${fruits_seasonal}`);
fruits_seasonal.unshift("Papaya");
console.log(`After Adding Element - "Papaya" before element - "Banana" The New Array is --> \n[${fruits_seasonal}]`);

console.log(`================================step 3================================`);

let fruitArray = [`"Banana"` , `"Orange"` , `"Apple"` , `"Mango"` , `"Water Melon"`];
console.log(`Original Array is [${fruitArray}]`);

fruitArray.splice(3 , 1);
console.log(`After Removing "Mango" from the Array then New Array is--> \n[${fruitArray}]`);

console.log(`================================step 4================================`);

let fruitArray1 = [`"Banana"` , `"Orange"` , `"Apple"` , `"Mango"` , `"Water Melon"`];
console.log(`Original Array is [${fruitArray1}]`);

fruitArray1.push(`"Pineapple"`);
console.log(`After Inserting element "Pineapple" at the Last Position then New Array is--> \n[${fruitArray1}]`);

console.log(`================================step 5================================`);

let fruitArray2 = [`"Banana"` , `"Orange"` , `"Apple"` , `"Mango"` , `"Water Melon"`];

console.log(`Original Array is [${fruitArray2}]`);

 fruitArray2.splice(4 , 0 , `"Dragon Fruit"`);
console.log(`After Inserting element "Dragon Fruit" before element "Water Melon" then New Array is--> \n[${fruitArray2}]`);

console.log(`================================step 6================================`);

let fruitArray3 = [`"Banana"` , `"Orange"` , `"Apple"` , `"Mango"` , `"Water Melon"`];
console.log(`Original Array is [${fruitArray3}]`);

fruitArray3.splice(1 , 1 , `"Kiwi"`);
console.log(`After Replacing element "Orange" with "Kiwi" then the new Array is--> \n[${fruitArray3}]`);

console.log(`================================step 7================================`);


let fruitArray4 = [`"Banana"` , `"Orange"` , `"Apple"` , `"Mango"` , `"Water Melon"`];
console.log(`Original Array is [${fruitArray4}]`);

 var result = fruitArray4.slice(1 , 4);
console.log(`After slice elements from Index 1 To 4 then New Array is:[${result}]`);

console.log(`================================step 8================================`);

let fruitArray5 = [`"Banana"` , `"Orange"` , `"Apple"` , `"Mango"` , `"Water Melon"`];
console.log(`Original Array is [${fruitArray5}]`);

var result1 = fruitArray5.slice(fruitArray5.length -3);
console.log(`Last 3 Elements of Array are--> [${result1}]`);

console.log(`================================END================================`);



