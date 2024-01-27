

const arrayNums = [20 , 3 , 4 , 56 , 90 , 400 , 49];
console.log(`Given Array is --> ${arrayNums}`);


console.log(`***********************Step 1******************************`);
const cloneArray = arrayNums;
cloneArray.push(56 , 66);

console.log(`Clone Array is --> ${`After Pushing Elements in Given Array --> ${cloneArray}`}`);
console.log(`After Clone -- Original Array Becomes --> ${arrayNums}`);

console.log(`***********************Step 2******************************`);

const arrayNums1 =   [20 , 3 , 4 , 56 , 90 , 400 , 49];
console.log(`Given Array is --> ${arrayNums1}`);

const deepCloneArray = [...arrayNums1];
arrayNums1.splice(arrayNums1.indexOf(90), 0 , 10 , 25);

console.log(`Original Array is --> ${deepCloneArray}`);
console.log(`Adding 10 , 25 --- Deep Clone Array Becomes --> ${arrayNums1}`)

console.log(`***********************Step 3******************************`);
const arrayNums2 = [20 , 3 , 4 , 56 , 90 , 400 , 49];

const arrayEven = [2 , 30 , 14 , 8];

const mergedArray = [...arrayNums2,...arrayEven]
console.log(`Original Array is --> ${arrayNums2} AND arrayEven is --> ${arrayEven}`);
console.log(`Mergd Array is --> ${mergedArray}`);

console.log(`***********************Step 4******************************`);


const employee_info ={
    emp_id :27,
    emp_name : "John Doe",
    salary : {
        july_month : "40,000INR",
        aug_month : "50,000INR",
        jun_month : "65,000INR"
    },
    address :{
        locality : {
            colony : "OM Vrindavan Society",
            street : "Kanch Pokli, 431202",
        },
        city : "Mumbai",
        state : "Maharashtra",
        country : "India"
    },
    mobiles : ["+91 8600 3456 88","1800- 4567 32","+91- 9096 5678 77"]


}
console.log(`"employee_info" Object Created`);



console.log(`***********************Step 5******************************`);


        console.log(`******  A  ******`);
    console.log(`Employee Address is --> ${JSON.stringify(employee_info.address)}`);

    console.log(`******  B  ******`);

    console.log(`Employee ${employee_info.emp_name} Mobile Number is --> ${employee_info.mobiles}`)

    console.log(`***********************Step 6******************************`);

    console.log(`******  A  ******`);

    const deepCloneCopy = JSON.parse(JSON.stringify(employee_info));
    deepCloneCopy.salary.july_month = '80,000 INR';
    console.log(`Deep Cloned Salary Of Jully Month is  --> ${deepCloneCopy.salary.july_month}`);
    console.log(`Original Salary Of JUlly Month is --> ${employee_info.salary.july_month}`);

    console.log(`******  B  ******`);
    console.log(`Original property "Country" on Original Object is --> ${employee_info.address.country}`);
    employee_info.address.country = "United Kingdom";
    
    console.log(`Updated Property "Country" On Original Object is --> ${employee_info.address.country}`);

    console.log(`******  C  ******`);

    console.log(`Original Object is --> \n${JSON.stringify(employee_info)}\n`);
    console.log(`Cloned Object is --> \n${JSON.stringify(deepCloneCopy)}`);












