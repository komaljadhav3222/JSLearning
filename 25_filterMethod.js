const array=[4,15,2,3,16,8,9,17,4,56,52,47,12,52];
const arrayGreater=array.filter((number,index,array)=>{    
        return number>10;
});
console.log("Array of numbers greater than 10",arrayGreater);
//Array of numbers greater than 10
const arrayNumber =  [42,  50, 3, 2, 7, 22, 11, 40];
const arrayNum = arrayNumber.filter( (currentValue )=> {
    return currentValue > 10;
} );
console.log("Array of numbers greater than 10",arrayNum);
//Even number array
const evenArrayNum = arrayNumber.filter( (currentValue )=> {
    return currentValue%2==0;
} );
console.log("Even number array",evenArrayNum);

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

  //TCS employees salary
  const tcsEmp=arrayEmployees.filter((employee)=>{
return employee.emp_company=='TCS';
  })
  const tcsEmpSalaryList=tcsEmp.map((currentValue)=>{
   return currentValue.emp_salary
  });
  console.log("TCS employees salary => ",tcsEmpSalaryList);


  //Infy employee names

  const infyEmp=arrayEmployees.filter((employee)=>{
    return employee.emp_company=='Infy';
      })
      const infyEmpName=infyEmp.map((emp)=>{
        return emp.emp_name
       });
       console.log("Infy employee names " ,infyEmpName);