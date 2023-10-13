const employee_info =`{
    "name" : "Aleix Melon",
    "id" : "E00245",
    "role" : ["Dev", "DBA"],    
    "age": 23,    
    "doj": "11-12-2019",
    "married": false,
     "address": {    
    "street": "32, Laham St.", 
    "city": "Innsbruck", 
    "country": "Austria"   },
    "referred-by": "E0012" 
}`
const employeeInfoObject = JSON.parse(employee_info);
console.log(typeof employeeInfoObject, employeeInfoObject);
console.log("=================== Role DEV======================");

console.log(employeeInfoObject.role[0]);
console.log("=================== employee Last Name======================");
let employeeName = employeeInfoObject.name.split(" ");
console.log(employeeName[1]);
let employeeJoinDate=employeeInfoObject.doj;
let employeeJoinYear = employeeJoinDate.split("-");
console.log("=================== employee Join year======================");
console.log(employeeJoinYear[2]);