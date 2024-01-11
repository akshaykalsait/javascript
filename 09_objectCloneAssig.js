const bankSbi = {
  bankName: "State Bank Of India",
  branch: "Pune",
  ifscCode: "SBIN0002988",
  headOffice: "Mumbai",
};

const bankLocation = {
  street: "FC Road",
  city: "Pune",
  pin: 412107,
};
console.log(`======================step 1======================`);
console.log(bankSbi);

console.log(`======================step 2======================`);
console.log(bankLocation);

console.log(`======================step 3======================`);
console.log(`-----------After Cloning object "bankSbi"-----------`);
const newBankSbi = Object.assign({}, bankSbi);
console.log(newBankSbi);
console.log(`-----------After Cloning object "bankLocation"-----------`);
const newBankLocation = Object.assign({}, bankLocation);
console.log(newBankLocation);

console.log(`======================step 4======================`);
const rateOfInterest = {
  homeLoanInterest: 8.4,
  personalLoanInterest: 11.9,
  dueInterest: 14.9,
};
console.log(rateOfInterest);

console.log(`======================step 5======================`);

const sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest);
//console.log(`----After Merging objects "bankSbi" , "bankLocation" , "rateOfInterest"----`);
console.table(sbiDetails);

console.log(`======================step 6======================`);
console.log(`-----------After Traversing object "sbiDetails"-----------`);
for (const key in sbiDetails) {
  if (sbiDetails.hasOwnProperty.call(sbiDetails, key)) {
    const element = sbiDetails[key];

    console.log(`Key ==> ${key}, Value ==> ${element}`);
  }
}
