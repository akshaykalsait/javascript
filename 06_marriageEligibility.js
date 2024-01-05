

function marriageEligibility(gender , age){ 
    if ((age<=0 || age == undefined || isNaN(age))) {
        console.log(`Sorry....You have entered Invalid input`);
        
    } else {
        if ((gender == "male" && age>=21 || gender == "female" && age>=18)) {
            console.log(`${gender} ${age}--->Yes...You are eligible for Marriage`);
        } else {
          
            console.log(`${gender} ${age}--->Not eligible for marriage `);
        }; 
        
    };
};
marriageEligibility("male",  17);
marriageEligibility("male", 25);
marriageEligibility("female", 28);
marriageEligibility("female", 16);
marriageEligibility("Other", 35);
marriageEligibility("Other", 41);