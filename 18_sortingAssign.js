

const arrayRollNumbers = [113 , 45 , 56 , 11 , 32 , 45 , 109 , 799 , 56 , 45];
console.log(`Given Array is --> [${arrayRollNumbers}]\n`);

console.log(`*********************** Step 1 ******************************\n`);

console.log(`-------- After Reverse -----------\n`);
arrayRollNumbers.reverse();
console.log(`Reverse Array is --> [${arrayRollNumbers}]\n`);

console.log(`*********************** Step 2 ******************************\n`);

arrayRollNumbers.sort();
console.log(`Sorted Array is --> [${arrayRollNumbers}]\n`);

console.log(`*********************** Step 3 ******************************\n`);

const assendingArray = arrayRollNumbers.sort((num1 , num2) => {
   return  num1 > num2 ? 1 : -1;
});
console.log(`Array Sorted in Ascending Order --> [${assendingArray}]\n`);

console.log(`*********************** Step 4 ******************************\n`);

const greaterNumber = assendingArray.reverse();
console.log(`Greatest Number from given Array is --> ${greaterNumber[0]}\n`);

console.log(`*********************** Step 5 ******************************\n`);


const smallestNumber = assendingArray;

console.log(`Smallest Number from given Array is --> ${smallestNumber[assendingArray.length -1]}\n`);

console.log(`*********************** Step 6 ******************************\n`);


    const result = [];
    const duplicate = assendingArray.reverse();

    for (let i = 0; i < duplicate.length; i++) {

if (duplicate[i] !== duplicate[i + 1]) {
    
    result.push(duplicate[i]);
}
   // return result;
}

console.log(`After Removing Duplicate Elements ---> [${result}]\n`);
console.log(`******************************** END *********************************`);