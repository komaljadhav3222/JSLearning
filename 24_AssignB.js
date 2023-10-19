class Employee {
    emp_id;
  emp_name;
  emp_department;
  emp_salary;
  emp_company;
  constructor(emp_id, emp_name, emp_department, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_department = emp_department;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}
const emp_anil=new Employee(11,"Anil","Software",60000,"TCS");
const emp_radha = new Employee (33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee (55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee (66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee (77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee (88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee (99, "Mahesh", "HR", 85000, "Infy");

const arrayOfEmp=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log("1");
arrayOfEmp.forEach(employee => {
    if(employee.emp_company="TCS")
    console.log("all the employees working in ‘TCS’ => ",employee.emp_name,employee.emp_company);
});
console.log("2");
// 2. Find the ‘Finance’ department employees, log only department and employee name on console
arrayOfEmp.forEach(employee => {
  if(employee.emp_department="Finance")
  console.log("all 'Finance' department employees => ",employee.emp_name,employee.emp_department);
});
console.log("3");
// 3. Find the employees whose name starts with ‘R’ and complete employee details on console [ hint –> startsWith(“R“) ]
arrayOfEmp.forEach(employee => {
  let name=employee.emp_name;
  if(name.startsWith("R"))
  console.log("employees whose name starts with ‘R’ => ",employee.emp_name);
});
console.log("4");
// 4. Find the employees whose salary is greater than 75000, and log on console emp name, company and salary
arrayOfEmp.forEach(employee => {
  if(employee.emp_salary>75000)
  console.log(` employees whose salary is greater than 75000 name - ${employee.emp_name}, Company -${employee.emp_company},Salary - ${employee.emp_salary}`);
});
console.log("5");
// 5. Find the emp’s whose salary greater than or equal 50000 and from ‘IT’ department, log complete emp details on
// console
// [ Hint → if(emp.emp_salary>=50000 && emp.emp_dept==’IT’) inside for loop ]
arrayOfEmp.forEach(employee => {
//if(employee.emp_salary>=50000)//4
if (employee.emp_department="IT"&&employee.emp_salary>=50000) 
  console.log(`emp’s whose salary greater than or equal 50000 and from ‘IT’ department Name:- ID- ${employee.emp_id}
 -${employee.emp_name} Company -${employee.emp_company}, Salary - ${employee.emp_salary}
,department - ${employee.emp_department}`);
});