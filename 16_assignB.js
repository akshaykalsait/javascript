

class Employee{
    constructor (emp_id, emp_name, emp_dept, emp_salary, emp_company  ){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;

    }
    getDetails(){
        console.log(`emp_id :${this.emp_id} , emp_name :${this.emp_name} , emp_dept :${this.emp_dept} , emp_salary :${this.emp_salary},  emp_company :${this.emp_company} `);
    }
    
}
const emp_anil = new Employee (22, "Anil", "IT", 5000, "TCS");
const emp_radha = new Employee (33, "Radha", "HR", 74000, "wipro");
const emp_rishi = new Employee (55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee (66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee (77, "Monika", "IT", 40000, "wipro");
const emp_viny = new Employee (88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee (99, "Mahesh", "HR", 85000, "Infy");

arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika,  emp_viny, emp_mahi];


console.log(`=============================Step 1=============================================`);

for (const element of arrayEmployees) {
    if (element.emp_company == "TCS") {
        console.log(`Employee Name is ${element.emp_name} and he is working in "TCS"`);
  
    }
    
}

console.log(`=============================Step 2=============================================`);

for (const element of arrayEmployees) {
    if (element.emp_dept == "Finance") {
        console.log(`Employee ${element.emp_name} is Working in "Finance Department"`);
        
    }
    
}
console.log(`=============================Step 3=============================================`);

for (const element of arrayEmployees) {
    if ( element.emp_name.startsWith(`R`)) {
        element.getDetails();
         
    }
        
    }

    console.log(`=============================Step 4=============================================`);
    

    for (const element of arrayEmployees) {
        if (element.emp_salary > 75000) {
            console.log(`Employee Name is : ${element.emp_name} , Employee Company is : ${element.emp_company} , Employee Salary is : ${element.emp_salary}`);
            
        }
    }

    console.log(`=============================Step 5=============================================`);

        for (const element of arrayEmployees) {
            if (element.emp_salary >=50000 && element.emp_dept == "IT") {
             element.getDetails();
                
            }
            
        }

        console.log(`=============================Step 6=============================================`);

        for (const element of arrayEmployees) {
            if (element.emp_company == "Infy") {
                element.getDetails();
                
            }
            
        }

    




