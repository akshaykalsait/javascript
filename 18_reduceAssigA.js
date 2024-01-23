

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

const arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika,  emp_viny, emp_mahi];

    console.log(`**************************************Step 1**********************************************`);

      arrayEmps.filter( (element) =>{

        return element.emp_company == "wipro";
    
    }).forEach( (element) => {

        element.getDetails();

    });

    console.log(`**************************************Step 2**********************************************`);

    const itHrDep = arrayEmps.filter( (element) =>{
        return (element.emp_dept == "IT" || element.emp_dept == "HR")
    });

    itHrDep.forEach( (element) =>{
        element.getDetails();

    });

    console.log(`**************************************Step 3**********************************************`);

    const greaterArray = arrayEmps.filter( (element) =>{

        return element.emp_id > 50 ;
    });

    greaterArray.forEach( (element) => {

        element.getDetails();
    });

    console.log(`**************************************Step 4**********************************************`);

    const startsWith = arrayEmps.filter( (element) => {

        return element.emp_name.startsWith("A") || element.emp_name.startsWith("V") || element.emp_name.startsWith("M");
    });
    startsWith.forEach( (element) => {
        element.getDetails();
    });

    console.log(`**************************************Step 5**********************************************`);

    const depArray = arrayEmps.reduce( (runningTotal, element) => {
        
        return runningTotal + element.emp_salary;

    },0);

    const averageSalary = depArray / arrayEmps.length;
    console.log(`Average Salary of the Employees for All Departments is --> ${averageSalary}`);

    console.log(`**************************************Step 6**********************************************`);


    const itDep = arrayEmps.filter((element) => {

        return element.emp_dept == "IT";
    });
    const sumArray = itDep.reduce((runningTotal , element) => {

        return runningTotal + element.emp_salary;

    }, 0);

    average = sumArray / itDep.length;
    console.log(`Average Salary of "IT" Department Employees is --> ${average}`);

    console.log(`************************************** END **********************************************`);