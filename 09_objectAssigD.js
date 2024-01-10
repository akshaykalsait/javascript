

let professor = {
    firstName: "Akshay",
    lastName: "Kalsait",
    age: 29,
    isMarried: true,
    DateOfBirth: "16 june 1994",
    degrees :{
        engineering : `CSC`,
    PHD : `Adv Computing`,
    Programing : `JavaScript`, 
    
    },
    
    certificates : ["Hacker Rank Participation" ,"Certificate in IFE course" , "Certificate in Adv Programing"],
    totalExperience : "14 Years",
    
}
console.log(`===============================step 1================================`);
console.log(professor);
console.log(`===============================step 2================================`);

console.log(professor.degrees);
console.log(`===============================step 3================================`);
console.log(`Adding certificates in Array :[${professor.certificates}] `);
console.log(`===============================step 4================================`);
console.log(`After Adding new property totalExperience : ${professor.totalExperience}`);
console.log(`===============================step 5================================`);
console.log(`Existing professor age : ${professor.age}`);


professor.age = 30;
console.log(`After Update professor age : ${professor.age}`);

console.log(`===============================step 6================================`);


let certificates = ["Hacker Rank Participation" ,"Certificate in IFE course" , "Certificate in Adv Programing"] 
console.log(`Given Array is : \n [${certificates}]`);

certificates.splice(2 , 0 , "Oracle Certified");
console.log(`After Added new Certificate then new Array is : \n [${certificates}]`);

console.log(`===============================step 7================================`);


let lastElement = certificates[certificates.length-1];
console.log(`Last element of given Array is : ${lastElement}`);

console.log(`===============================step 8================================`);

for (const key in professor) {
    if (professor.hasOwnProperty.call(professor, key)) {
        const element = professor[key];
        console.log(`Key ==> ${key}, Value ==> ${element}`);
    }
}

console.log(`===============================step 9================================`);

for (const key in certificates) {
    if (certificates.hasOwnProperty.call(certificates, key)) {
        const element = certificates[key];
        console.log(`Key ==> ${key}, Value ==> ${element}`);
    }
}

