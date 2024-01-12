console.log(`================================Step 1 & 2=====================================`);

function Bank(bankName , location , ifscCode , branchCode) {
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
    this.display = function(){
        console.log(`Bank Name is: ${this.bankName}, Location is : ${this.location}, IFSC Code is: ${this.ifscCode}, Branch Code is: ${branchCode}`);
    }
    
}
    const yesBank = new Bank ("YES Bank" , "Satara" , "YES0002988" , 2988);
    const sbiBank = new Bank ("State Bank Of India" , "Pune" , "SBI00005522" , 5522);
    const mahBank = new Bank ("Bank Of Maharashtra" , "Kolhapur" , "MAH0002554" , 2554);
    const axisBank = new Bank ("Axis Bank" , "Mumbai" , "AXI0001254" , 1254);

    console.log(`Bank Details is --->`);
    yesBank.display();

    console.log(`Bank Details is --->`);
    sbiBank.display();

    console.log(`Bank Details is --->`);
    mahBank.display();

    console.log(`Bank Details is --->`);
    axisBank.display();


    console.log(`================================Step 3 , 4 , 5=====================================`);

    Bank.prototype.openTime = "9 AM IST";
    Bank.prototype.closeTime = "6 PM IST";

    
    console.log(`Open Time of SBI Bank is: ${sbiBank.openTime} and Close Time is: ${sbiBank.closeTime}`);

    console.log(`================================Step 6=====================================`);

    console.log(`Bank Name is: ${axisBank.bankName} and Close Time is: ${axisBank.closeTime}`);

    
    console.log(`================================Step 7=====================================`);

    console.log(`Bank Name is :${yesBank.bankName} , Branch Code is: ${yesBank.branchCode} , Open Time is:${yesBank.openTime} `);

    

    