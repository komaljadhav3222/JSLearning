function maleMarriageEligibility(gender, age ,boyName){
var result=gender=='Male'&&age>=21 
? `Hey! ${boyName} Congratulations!, your age is ${age} so ,You are eligible for marriage`
:`Hey! ${boyName} Sorry!,  your age is ${age} so ,You are not eligible for marriage`;
// return "result is"+result;
console.log(result);
}
maleMarriageEligibility("Male",25,"BillGates");

function femaleMarriageEligibility(gender, age ,girlName){
    var result=gender=='Female'&&age>=18 
    ? `Hey! ${girlName} Congratulations!,  your age is ${age} so,You are eligible for marriage`
    :`Hey! ${girlName} Sorry!, your age is ${age} so, You are not eligible for marriage`;
   
   console.log(result);
// return result;
 }
    femaleMarriageEligibility("Female",16,"Jennifer");

