
console.log(`-----------------------Assignment 1-----------------------`);
console.log(`====================Step 1====================`);
function maleMarriageEligibility(gender , age , boyName) {
    console.log(`Given gender is ${gender} , age is ${age} and Name is ${boyName} `);
    console.log(`      --------------------`);
    var result = gender == "male" && age>=21 ? `Hey ${boyName} you are eligible for marriage` : `Not eligible for marriage`;
    return result;
    
}
var resultValue = maleMarriageEligibility( "male" , 25 , "Billgates");

console.log(resultValue);
console.log(`------------------------------------------------------------`);
var resultValue = maleMarriageEligibility( "male" , 17 , "Stew Jobs");
console.log(resultValue);

console.log(`====================Step 2====================`);

function femaleMarriageEligibility(gender , age , girlName) {
    console.log(`Given gender is ${gender} , age is ${age} and Name is ${girlName} `);
    console.log(`      --------------------`);
    var result = gender == "female" && age>=18 ? `Hey ${girlName} you are eligible for marriage` : `Not eligible for marriage`;
    return result;
    
}
var resultValue = femaleMarriageEligibility( "female" , 16 , "Jenifer");

console.log(resultValue);
console.log(`------------------------------------------------------------`);
var resultValue = femaleMarriageEligibility( "female" , 27 , "Malinda Gates");
console.log(resultValue);
