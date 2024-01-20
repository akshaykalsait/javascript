
console.log(`%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%   Step 1   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n`);


const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(`Given Array is --> [${arrayNumbers}]`);
const array = arrayNumbers.map( (element) => {
        return element + 10;
});
console.log(`After Adding 10 in Each Element for available Array --> [${array}]\n`);

console.log(`%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%   Step 2   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n`);
console.log(`Given Array is --> [${arrayNumbers}]`);
const arrayCube = arrayNumbers.map( (element) => {
        return element * element * element;
});
console.log(`Cube of Elements from given Array is --> [${arrayCube}]\n`);

console.log(`%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%   Step 3   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n`);

console.log(`Given Array is --> [${arrayNumbers}]`);

const indexAddedArray = arrayNumbers.map( (element, index) => {
            return element + index;
});
console.log(`After Adding Index value in to its corrosponding Array Element --> [${indexAddedArray}]\n`);

console.log(`%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%   END   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n`);