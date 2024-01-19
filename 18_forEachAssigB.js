

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
const emp_anil = new Employee (22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee (33, "Radha", "HR", 74000, "wipro");
const emp_rishi = new Employee (55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee (66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee (77, "Monika", "IT", 40000, "wipro");
const emp_viny = new Employee (88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee (99, "Mahesh", "HR", 85000, "Infy");

arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika,  emp_viny, emp_mahi];


console.log(`============================Step 1========================================`);


arrayEmployees.forEach ( (element) => {
    if (element.emp_company == "TCS") {
        console.log(`Name of Employees ---> "${element.emp_name}" And  Company is ---> "${element.emp_company}"`);
        
    }
    
});

console.log(`============================Step 2========================================`);

console.log(`Employees With Salary Greater than or Equal to 50000----->`);

arrayEmployees.forEach ( (element) => {
    if (element.emp_salary >= 50000) {
    
        element.getDetails();
    }

});


console.log(`============================Step 3========================================`);


let sum = 0;
arrayEmployees.forEach ( (element) => {
    sum = sum + element.emp_salary;

});
console.log(`Sum of all Employees Salary is --->    ${sum}`);

console.log(`============================Step 4========================================`);

arrayEmployees.forEach ( (element) => {
    average = sum / arrayEmployees.length;
    

});
console.log(`Average Salary of all Employees is ---> ${average}`);

console.log(`============================Step 5========================================`);

console.log(`Employess having Department "IT" OR "HR" AND Having Salary is Greater Than or Equal to 75000 --->`);

arrayEmployees.forEach ( (element) => {

    if (element.emp_dept == "IT" && element.emp_salary >= 75000 || element.emp_dept == "HR" && element.emp_salary >= 75000) {
        element.getDetails();
        
    }

});

console.log(`***********************************************END***************************************************`);









