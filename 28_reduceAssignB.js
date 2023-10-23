class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
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

const arrayEmployees = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monica,
  emp_viny,
  emp_mahi,
];
console.log(`1. Find all the employees from ‘Wipro’ company`);
const wiproEmployee = arrayEmployees.filter((employee) => {
  return employee.emp_company == "Wipro";
});
const empName = wiproEmployee.map((currentValue, index) => {
  return currentValue.emp_name;
});
console.log(empName);

console.log(` 2. Find all the employees from ‘IT’ OR ‘HR’ dept`);
const itOrHrEmployee = arrayEmployees.filter((employee) => {
  return employee.emp_dept == "IT" || employee.emp_dept == "HR";
});
const itOrHrEmpName = itOrHrEmployee.map((currentValue, index) => {
  return currentValue.emp_name;
});
console.log(`employees from ‘IT’ OR ‘HR’ dept ${itOrHrEmpName}`);

console.log(` 3. Find all the employees whose emp id’s are greater than 50`);
const empIdGreatFifty = arrayEmployees.filter((employee) => {
  return employee.emp_id > 50;
});
const empNameGreatFifty = empIdGreatFifty.map((currentValue, index) => {
  return currentValue.emp_name;
});
console.log(
  `employees whose emp id’s are greater than 50 ${empNameGreatFifty}`
);

console.log(`========== 4. Find all the employees whose names start with letter ‘A’ or ‘V’ or ‘M’ [ Hint→ startsWith( “A”) || startsWith( “V”)
    startsWith( “M”) ] ==========`);
const employee = arrayEmployees.filter((employee) => {
  return (
    employee.emp_name.startsWith("A") ||
    employee.emp_name.startsWith("V") ||
    employee.emp_name.startsWith("M")
  );
});
const EmployeeName = employee.map((currentValue, index) => {
  return currentValue.emp_name;
});
console.log(
  ` employees whose names start with letter ‘A’ or ‘V’ or ‘M’  ${EmployeeName}`
);

console.log(
  `5. Find the average salary of the employee for all the department`
);
const employeeSalary = arrayEmployees.filter((employee) => {
  return employee.emp_salary;
});
const totalEmployeesalary = employeeSalary.map((currentValue, index) => {
  return currentValue.emp_salary;
});
const TotalSalary = totalEmployeesalary.reduce((runningTotal, value) => {
  return runningTotal + value;
});
console.log(TotalSalary / totalEmployeesalary.length);

console.log(`6. Find the average salary for ‘IT’ department [ Hint → Filter the ‘IT’ department employee using filter( ) which
            return new array with only ‘IT’ department employees and then use reduce( ) to get the average ]`);

            const ITemployeeSalary = arrayEmployees.filter((employee) => {
                return employee.emp_dept=='IT';
              });
              const ItTotalEmployeesalary = ITemployeeSalary.map((currentValue, index) => {
                return currentValue.emp_salary;
              });
              const itTotalSalary = ItTotalEmployeesalary.reduce((runningTotal, value) => {
                return runningTotal + value;
              });
              console.log(itTotalSalary / ItTotalEmployeesalary.length);         
