function maleMarriageEligibility(gender, age ,boyName){
var result=gender=='Male'&&age>=21 
? console.log(`Hey! ${boyName} Congratulations!, your age is ${age} and your gender is ${gender} so ,You are eligible for marriage`)
:console.log(`Hey! ${boyName} Sorry!,  your age is ${age} and your gender is ${gender} so ,You are not eligible for marriage`);
return result;
}
maleMarriageEligibility("Male",25,"BillGates");
maleMarriageEligibility("Male",17,"Stew Jobs");

function femaleMarriageEligibility(gender, age ,girlName){
    var result=gender=='Female'&&age>=18 
    ? console.log(`Hey! ${girlName} Congratulations!,  your age is ${age} and your gender is ${gender} so,You are eligible for marriage`)
    :console.log(`Hey! ${girlName} Sorry!, your age is ${age} and your gender is ${gender} so, You are not eligible for marriage`);
   
return result;
 }
    femaleMarriageEligibility("Female",16,"Jennifer");
    femaleMarriageEligibility("Female",27,"Malinda Gates");

