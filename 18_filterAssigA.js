

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

    console.log(`**************************************Step 1**********************************************`);

          const newArray = arrayEmployees.filter(element => { return element.emp_company == "TCS"
           

            });
            newArray.forEach ((element) => { 

                console.log(`Company Name is --> ${element.emp_company} , Employee Name is  --> ${element.emp_name} \n`);
                
            });
      

        
        

        console.log(`**************************************Step 2**********************************************`);
        
       const wiproArray = arrayEmployees.filter((element) =>{

        return element.emp_company == "wipro";
        

       });

      const sumOfSalary =  wiproArray.reduce( (runningTotal , element) => {

            return runningTotal + element.emp_salary;

       },0 );

        averageOfSalary = sumOfSalary / wiproArray.length;

       console.log(`Average salary of Employees from Company "wipro" is --> ${averageOfSalary} \n`);


       console.log(`**************************************Step 3**********************************************`);

       const wiproAndinfyArray = arrayEmployees.filter((element) =>{

        return element.emp_company == "wipro" || element.emp_company == "Infy";
        

       });

      const sumOfWISalary =  wiproAndinfyArray.reduce( (runningTotal , element) => {

            return runningTotal + element.emp_salary;

       },0 );

       averageOfSalary = sumOfWISalary / wiproAndinfyArray.length;

       console.log(`Average salary of Employees From Company "wipro" and "Infy" is --> ${averageOfSalary} \n`);

       console.log(`**************************************  END  **********************************************`);