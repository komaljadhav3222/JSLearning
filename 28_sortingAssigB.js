class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary =emp_salary;
        this.emp_company = emp_company;
    }
  }
  const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
  const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
  const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
  const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
  const emp_monica = new Employee(77, "Monica", "IT", 40000, "Wipro");
  const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
  const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
  
  const arrayEmployees = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monica,emp_viny,emp_mahi];


console.log(`1. Sort the ‘arrayEmployees’ in ascending order of employee department & log Id, dept, & Company`);

const arraySortId=arrayEmployees.sort((emp1,emp2)=>{
    return emp1.emp_id>emp2.emp_id?1:-1;
    });
    arraySortId.forEach((employee)=>{
        console.log(`Employee Id- ${employee.emp_id}, Department - ${employee.emp_dept},Name - ${employee.emp_name}`);
    })

    console.log(`2. Sort the ‘arrayEmployees’ in descending order of Employee Id’s and log employee details → Id, Name, Department`);
const descSortArray = arraySortId.reverse();
descSortArray.forEach((employee)=>{
    console.log(`Employee Id- ${employee.emp_id}, Department - ${employee.emp_dept},Name - ${employee.emp_name}`);
})

console.log(`3. Sort the employee array in descending order of employee salary and log Name, Salary & Company`);
 const arraySalary=arrayEmployees.sort((emp1,emp2)=>{
return emp1.emp_salary>emp2.emp_salary?1:-1;
 });
 const desSalary=arraySalary.reverse();
 desSalary.forEach((employee)=>{
    console.log(`Employee Name - ${employee.emp_name} , salary - ${employee.emp_salary},Company - ${employee.emp_company}`);
});

